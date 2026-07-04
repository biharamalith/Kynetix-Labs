import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type WheelEvent } from "react";
import { capabilityPillars } from "@/lib/siteContent";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const capabilityVisuals = [
  "/capabilities/mobile-web.png",
  "/capabilities/iot-pos.png",
  "/capabilities/data-logic.png",
  "/capabilities/cloud-quality.png",
] as const;

const capabilityHighlights = capabilityPillars.map((pillar, index) => ({
  ...pillar,
  visual: capabilityVisuals[index],
}));

const autoAdvanceMs = 6200;
const slideMotionMs = 3400;

const easeCarouselMotion = (progress: number) =>
  0.5 - Math.cos(Math.PI * progress) / 2;

export const CapabilityStrip = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideAnimationRef = useRef<number>(0);
  const settleTimeoutRef = useRef<number>(0);
  const isProgrammaticScrollRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isAtFinalSlide = activeIndex === capabilityHighlights.length - 1;

  const updateActiveSlide = useCallback(() => {
    const track = trackRef.current;

    if (!track || isProgrammaticScrollRef.current) {
      return;
    }

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-capability-slide]"));
    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    const nearestIndex = slides.reduce(
      (closestIndex, slide, index) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const closestSlide = slides[closestIndex];
        const closestSlideCenter = closestSlide.offsetLeft + closestSlide.clientWidth / 2;

        return Math.abs(slideCenter - trackCenter) < Math.abs(closestSlideCenter - trackCenter) ? index : closestIndex;
      },
      0,
    );

    setActiveIndex(nearestIndex);
  }, []);

  const moveTrackTo = useCallback(
    (track: HTMLDivElement, targetLeft: number, behavior: ScrollBehavior, onComplete?: () => void) => {
      window.cancelAnimationFrame(slideAnimationRef.current);
      window.clearTimeout(settleTimeoutRef.current);

      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
      const safeTargetLeft = Math.min(Math.max(targetLeft, 0), maxScrollLeft);

      if (behavior === "auto" || Math.abs(track.scrollLeft - safeTargetLeft) < 1) {
        track.scrollLeft = safeTargetLeft;
        onComplete?.();
        return;
      }

      const startLeft = track.scrollLeft;
      const distance = safeTargetLeft - startLeft;
      const startedAt = window.performance.now();

      const animateSlide = (now: number) => {
        const progress = Math.min((now - startedAt) / slideMotionMs, 1);
        const easedProgress = easeCarouselMotion(progress);

        track.scrollLeft = startLeft + distance * easedProgress;

        if (progress < 1) {
          slideAnimationRef.current = window.requestAnimationFrame(animateSlide);
          return;
        }

        track.scrollLeft = safeTargetLeft;
        onComplete?.();
      };

      slideAnimationRef.current = window.requestAnimationFrame(animateSlide);
    },
    [],
  );

  const goToSlide = useCallback(
    (targetIndex: number, behavior: ScrollBehavior = "smooth") => {
      const track = trackRef.current;
      const normalizedIndex = Math.max(0, Math.min(targetIndex, capabilityHighlights.length - 1));

      if (!track) {
        setActiveIndex(normalizedIndex);
        setIsTransitioning(false);
        return;
      }

      const slide = track.querySelectorAll<HTMLElement>("[data-capability-slide]")[normalizedIndex];

      if (!slide) {
        return;
      }

      const scrollTarget = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;

      if (behavior === "auto") {
        isProgrammaticScrollRef.current = true;
        setActiveIndex(normalizedIndex);
        setIsTransitioning(false);
        moveTrackTo(track, scrollTarget, behavior, () => {
          isProgrammaticScrollRef.current = false;
        });
        return;
      }

      isProgrammaticScrollRef.current = true;
      setActiveIndex(normalizedIndex);
      setIsTransitioning(true);
      moveTrackTo(track, scrollTarget, behavior, () => {
        setActiveIndex(normalizedIndex);
        settleTimeoutRef.current = window.setTimeout(() => {
          setIsTransitioning(false);
          isProgrammaticScrollRef.current = false;
        }, 80);
      });
    },
    [moveTrackTo],
  );

  const goToPreviousSlide = useCallback(() => {
    setIsPlaying(false);
    goToSlide(activeIndex === 0 ? 0 : activeIndex - 1);
  }, [activeIndex, goToSlide]);

  const goToNextSlide = useCallback(() => {
    setIsPlaying(false);
    goToSlide(activeIndex === capabilityHighlights.length - 1 ? capabilityHighlights.length - 1 : activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const togglePlayback = useCallback(() => {
    if (isAtFinalSlide) {
      setIsPlaying(true);
      goToSlide(0);
      return;
    }

    setIsPlaying((current) => !current);
  }, [goToSlide, isAtFinalSlide]);

  const handleDotClick = useCallback(
    (targetIndex: number) => {
      setIsPlaying(false);
      goToSlide(targetIndex);
    },
    [goToSlide],
  );

  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      const track = trackRef.current;

      if (!track || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      const canScrollLeft = track.scrollLeft > 0;
      const canScrollRight = track.scrollLeft < track.scrollWidth - track.clientWidth - 1;
      const shouldMoveCarousel = (event.deltaY < 0 && canScrollLeft) || (event.deltaY > 0 && canScrollRight);

      if (!shouldMoveCarousel) {
        return;
      }

      event.preventDefault();
      setIsPlaying(false);
      isProgrammaticScrollRef.current = false;
      window.cancelAnimationFrame(slideAnimationRef.current);
      window.clearTimeout(settleTimeoutRef.current);
      setIsTransitioning(false);

      if (typeof track.scrollBy === "function") {
        track.scrollBy({ left: event.deltaY * 0.2, behavior: "auto" });
      } else {
        track.scrollLeft += event.deltaY * 0.2;
      }
    },
    [],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPreviousSlide();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextSlide();
      }
    },
    [goToNextSlide, goToPreviousSlide],
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    let animationFrame = 0;

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSlide);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    goToSlide(0, "auto");

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(slideAnimationRef.current);
      window.clearTimeout(settleTimeoutRef.current);
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [goToSlide, updateActiveSlide]);

  useEffect(() => {
    if (!isPlaying || isTransitioning || activeIndex === capabilityHighlights.length - 1) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      goToSlide(activeIndex + 1);
    }, autoAdvanceMs);

    return () => window.clearTimeout(timerId);
  }, [activeIndex, goToSlide, isPlaying, isTransitioning]);

  return (
    <section className="capability-luxury-section" aria-labelledby="capability-title">
      <div className="container-main relative z-10">
        <RevealOnScroll className="capability-section-header">
          <h2 id="capability-title" className="capability-section-title">
            Get the capabilities.
          </h2>
          <p className="capability-section-intro">
            Product-grade software systems for web, mobile, connected operations, automation, and reliable cloud delivery.
          </p>
        </RevealOnScroll>
      </div>

      <div className="capability-carousel-shell relative z-10">
        <div
          aria-label="Capability highlights"
          className="capability-carousel-viewport"
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
          ref={trackRef}
          tabIndex={0}
        >
          <div className="capability-carousel-track">
            {capabilityHighlights.map((pillar, index) => {
              const slideNumber = index + 1;
              const isActive = index === activeIndex;

              return (
                <article
                  aria-label={`${pillar.value}: ${pillar.label}`}
                  className={`capability-highlight-card${isActive ? " is-active" : ""}`}
                  data-capability-slide="true"
                  key={pillar.value}
                >
                  <img className="capability-highlight-image" src={pillar.visual} alt="" loading={index === 0 ? "eager" : "lazy"} />
                  <div className="capability-highlight-shade" aria-hidden="true" />
                  <div className="capability-highlight-copy">
                    <span>{pillar.value}</span>
                    <h3>{pillar.label}</h3>
                    <p>{pillar.description}</p>
                  </div>
                  <div className="capability-highlight-meter" aria-hidden="true">
                    <span>{String(slideNumber).padStart(2, "0")}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className={`capability-carousel-controls${isPlaying ? " is-playing" : ""}${isTransitioning ? " is-transitioning" : ""}`}
          aria-label="Capability carousel controls"
        >
          <div className="capability-carousel-dots" role="tablist" aria-label="Select capability highlight">
            {capabilityHighlights.map((pillar, index) => (
              <button
                aria-label={`Show ${pillar.value}`}
                aria-selected={index === activeIndex}
                className={`capability-carousel-dot${index === activeIndex ? " is-active" : ""}`}
                key={pillar.value}
                onClick={() => handleDotClick(index)}
                role="tab"
                type="button"
              >
                <span className="capability-carousel-dot-progress" aria-hidden="true" />
              </button>
            ))}
          </div>
          <button
            aria-label={
              isAtFinalSlide
                ? "Replay capability highlights"
                : isPlaying
                  ? "Pause capability highlights"
                  : "Play capability highlights"
            }
            className={`capability-carousel-play${isAtFinalSlide ? " is-replay" : ""}`}
            onClick={togglePlayback}
            type="button"
          >
            {isAtFinalSlide ? (
              <svg aria-hidden="true" className="capability-control-icon capability-replay-icon" viewBox="0 0 24 24">
                <path
                  d="M18.45 8.3A7.15 7.15 0 1 0 19.18 13"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.45"
                />
                <path
                  d="M18.28 4.72v3.82h-3.82"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.45"
                />
              </svg>
            ) : isPlaying ? (
              <span className="capability-pause-icon" aria-hidden="true">
                <span />
                <span />
              </span>
            ) : (
              <svg aria-hidden="true" className="capability-control-icon capability-play-icon" viewBox="0 0 24 24">
                <path d="M8.5 5.8v12.4L18 12z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

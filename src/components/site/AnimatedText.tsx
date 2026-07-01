import { CSSProperties } from "react";
import { motionConfig } from "@/lib/motionConfig";

interface AnimatedTextProps {
  text: string;
  highlight?: string;
}

const renderWords = (text: string, startIndex = 0) =>
  text.split(" ").map((word, index) => (
    <span key={`${word}-${startIndex + index}`} className="animated-word" style={{ "--word-index": startIndex + index } as CSSProperties}>
      {word}
    </span>
  ));

export const AnimatedText = ({ text, highlight }: AnimatedTextProps) => {
  const words = text.trim().split(" ");

  return (
    <>
      <span className="animated-text" style={{ "--word-step-ms": `${motionConfig.hero.wordStepMs}ms` } as CSSProperties}>
        {renderWords(text)}
      </span>{" "}
      {highlight ? <span className="animated-text-highlight">{renderWords(highlight, words.length)}</span> : null}
    </>
  );
};

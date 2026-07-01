import { CursorGlow } from "./CursorGlow";
import { LoadingScreen } from "./LoadingScreen";
import { ScrollProgressBar } from "./ScrollProgressBar";

export const MotionLayer = () => {
  return (
    <>
      {/* Global motion helpers are mounted once so page components stay focused on content. */}
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgressBar />
    </>
  );
};

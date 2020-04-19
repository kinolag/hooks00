import { useRef } from "react";

// we call this a 'custom hook' > to share/reuse functionality
export const useCountRenders = () => {
  const renders = useRef(0);
  console.log("Renders: ", renders.current++);
};

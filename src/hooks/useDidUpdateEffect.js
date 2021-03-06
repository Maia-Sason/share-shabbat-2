import { useEffect, useRef } from "react";

const useDidUpdateEffect = (callback, inputs) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      return callback();
    }
    didMountRef.current = true;
  }, [...inputs]);
};

export default useDidUpdateEffect;

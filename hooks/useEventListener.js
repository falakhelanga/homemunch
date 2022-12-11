import { useEffect, useRef } from "react";

export default function useEventListener(eventType, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (document == null) return;
    const handler = (e) => callbackRef.current(e);
    document.addEventListener(eventType, handler);

    return () => document.removeEventListener(eventType, handler);
  }, [eventType]);
}

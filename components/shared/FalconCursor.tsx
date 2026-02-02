"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CURSOR_SIZE = 60;
/** Gap between falcon (left) and cursor position (right); falcon sits to the left of the actual cursor */
const OFFSET_LEFT_OF_CURSOR = 8;
const CENTER_Y = CURSOR_SIZE / 2;

export function FalconCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isPointerEl =
          el.closest("a, button, [role='button'], .cursor-pointer") != null;
        setIsPointer(isPointerEl);
      } else {
        setIsPointer(false);
      }
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate(${position.x - CURSOR_SIZE - OFFSET_LEFT_OF_CURSOR}px, ${position.y - CENTER_Y}px) rotate(${isPointer ? "20deg" : "0deg"})`,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease, transform 0.12s ease-out",
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
      }}
      aria-hidden
    >
      <Image
        src="/cursorFalconBigger.png"
        alt=""
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        className="h-full w-full object-contain"
        draggable={false}
        priority
      />
    </div>
  );
}

export default FalconCursor;

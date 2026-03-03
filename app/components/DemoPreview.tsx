"use client";

import { useRef, useEffect, useState } from "react";

const IFRAME_W = 1280; // width at which demo pages are designed

interface Props {
  slug: string;
}

export default function DemoPreview({ slug }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / IFRAME_W);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 overflow-hidden">
      <div
        style={{
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          width: `${IFRAME_W}px`,
          height: `${Math.ceil(1 / scale * 100)}%`,
          flexShrink: 0,
        }}
      >
        <iframe
          src={`/demo/${slug}`}
          width={IFRAME_W}
          height="900"
          scrolling="no"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          style={{
            border: "none",
            display: "block",
            pointerEvents: "none",
            width: `${IFRAME_W}px`,
            height: "900px",
          }}
        />
      </div>
    </div>
  );
}

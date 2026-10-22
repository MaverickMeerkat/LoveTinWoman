"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type MetaPixelProps = {
  pixelId: string;
};

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: Fbq;
};

declare global {
  interface Window {
    _fbq?: Fbq;
    fbq?: Fbq;
  }
}

export function MetaPixel({ pixelId }: MetaPixelProps) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!window.fbq) {
      const fbq = function (...args: unknown[]) {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue.push(args);
        }
      } as Fbq;

      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];
      window.fbq = fbq;
      window._fbq = fbq;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);

      fbq("init", pixelId);
    }

    if (lastTrackedPath.current !== pathname) {
      window.fbq?.("track", "PageView");
      lastTrackedPath.current = pathname;
    }
  }, [pathname, pixelId]);

  return (
    <noscript>
      <img
        alt=""
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${encodeURIComponent(pixelId)}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}

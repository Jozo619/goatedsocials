"use client";

import { useEffect, useRef, useState } from "react";

const sizes = {
  sm: { box: "h-11 sm:h-12", text: "text-xl sm:text-2xl" },
  md: { box: "h-14", text: "text-2xl" },
  nav: { box: "h-10 sm:h-14", text: "text-xl sm:text-2xl" },
};

const variants = {
  full: { src: "/logo.png", chip: "bg-brand-dark px-2 py-1 dark:bg-transparent dark:px-0 dark:py-0" },
  text: { src: "/logotext.png", chip: "bg-transparent px-0 py-0" },
};

export default function Logo({
  size = "sm",
  variant = "full",
}: {
  size?: "sm" | "md" | "nav";
  variant?: "full" | "text";
}) {
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { box, text } = sizes[size];
  const { src, chip } = variants[variant];

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImgError(true);
    }
  }, []);

  if (imgError) {
    return (
      <span className={`font-bold tracking-tight ${text}`}>
        <span className="gradient-text">Goated</span>
        <span className="text-brand-dark dark:text-white">Socials</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center rounded-lg ${chip} ${box}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt="GoatedSocials"
        className="h-full w-auto object-contain"
        onError={() => setImgError(true)}
      />
    </span>
  );
}

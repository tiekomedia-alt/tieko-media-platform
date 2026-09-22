"use client";

import Link from "next/link";
import posthog from "posthog-js";
import type { ReactNode } from "react";

type TrackedFunnelLinkProps = {
  href: string;
  eventName: string;
  placement: string;
  children: ReactNode;
  className?: string;
};

export default function TrackedFunnelLink({
  href,
  eventName,
  placement,
  children,
  className,
}: TrackedFunnelLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => posthog.capture(eventName, { placement })}
    >
      {children}
    </Link>
  );
}

"use client";

import { ReactNode } from "react";
import FalconCursor from "./FalconCursor";

/**
 * Wraps the app so FalconCursor stays mounted across client-side navigations.
 * Without this, Next.js can remount the root layout's children when the route
 * segment changes, which unmounts FalconCursor.
 */
export function AppWithCursor({ children }: { children: ReactNode }) {
  return (
    <>
      <FalconCursor />
      {children}
    </>
  );
}

export default AppWithCursor;

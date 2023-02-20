/*
Automatic heading level generation
https://sergiodxa.com/articles/keep-heading-levels-consistent-with-react-context
 */

'use client'

import React from "react";
import { HeadingLevelContext } from "./heading";

type RegionProps = React.HTMLAttributes<HTMLDivElement>;

export default function Region(props: RegionProps) {
  const headingLevel = React.useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <section {...props} />
    </HeadingLevelContext.Provider>
  );
}

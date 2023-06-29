/*
Automatic heading level generation
https://sergiodxa.com/articles/keep-heading-levels-consistent-with-react-context
*/

'use client'

import React from "react";

export const HeadingLevelContext = React.createContext<number>(0);

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: number;
};

export default function Heading({ level, ...props }: HeadingProps) {
  const headingLevel = useHeadingLevel(level);

  return React.createElement("div", {
    ...props,
    role: "heading",
    "aria-level": headingLevel,
  });
}

function useHeadingLevel(level?: number): number {
  const headingLevel = React.useContext(HeadingLevelContext);

  if (level !== undefined) {
    if (level <= 0) {
      throw new Error(
        "The level of a Heading must be a positive value greater than zero."
      );
    }

    return level;
  }

  if (headingLevel === 0) {
    throw new Error(
      "To use auto heading levels, wrap your Heading in a Region."
    );
  }

  return headingLevel;
}

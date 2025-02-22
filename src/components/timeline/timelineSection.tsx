"use client";

import { FC, PropsWithChildren, ReactNode } from "react";
import Region from "../region";
import Card from "../card";
import Heading from "../heading";
import { ITheme, ThemeProvider, useTheme } from "../theme";
import styles from "./timelineSection.module.scss";

export interface ITimelineSectionProps {
  title: string;
  startDate?: Date | string | number;
  endDate?: Date | string | number;
  description: ReactNode;
  theme?: ITheme;
}

export const TimelineSection: FC<PropsWithChildren<ITimelineSectionProps>> = ({
  children,
  title,
  startDate,
  endDate,
  description,
  theme,
}) => {
  return (
    <ThemeProvider {...theme}>
      <Region className={styles.timelineSection}>
        <TimelineHeader title={title} startDate={startDate} endDate={endDate}>
          {description}
        </TimelineHeader>

        {children}
      </Region>
    </ThemeProvider>
  );
};

interface ITimelineHeaderProps {
  title: string;
  startDate?: Date | string | number;
  endDate?: Date | string | number;
}

const TimelineHeader: FC<PropsWithChildren<ITimelineHeaderProps>> = ({
  children,
  title,
  startDate,
  endDate,
}) => {
  const theme = useTheme();

  return (
    <Card style={{ borderLeftColor: theme.color }}>
      <div className={styles.headerLayout}>
        <Heading className={styles.title}>
          {title}
        </Heading>
        {startDate !== undefined && (
          <span className={styles.date}>{`${startDate} - ${
            endDate ?? "Present"
          }`}</span>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </Card>
  );
};

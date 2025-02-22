"use client";

import { FC, PropsWithChildren, useId } from "react";
import Card from "../card";
import Region from "../region";
import Heading from "../heading";
import styles from "./timelineEvent.module.scss";
import { useTheme } from "../theme";

export interface ITimelineEventProps {
  title: string;
  startDate?: Date | string | number;
  endDate?: Date | string | number;
}

export const TimelineEvent: FC<PropsWithChildren<ITimelineEventProps>> = ({
  children,
  title,
  startDate,
  endDate,
}) => {
  const labelId = useId();
  const theme = useTheme();

  return (
    <Card style={{ borderLeftColor: theme.color }}>
      <Region aria-labelledby={labelId} className={styles.cardLayout}>
        <Heading
          id={labelId}
          className={styles.title}
        >
          {title}
        </Heading>
        {startDate !== undefined && (
          <span className={styles.date}>{`${startDate} - ${
            endDate ?? "Present"
          }`}</span>
        )}
        <div className={styles.content}>{children}</div>
      </Region>
    </Card>
  );
};

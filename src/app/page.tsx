import Card from "@/components/card";
import Heading from "@/components/heading";
import Region from "@/components/region";
import styles from "./page.module.scss";
import Image from "next/image";
import avataar from "public/avataaar.svg";
import { TimelineEvent } from "@/components/timeline/timelineEvent";
import { TimelineSection } from "@/components/timeline/timelineSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.introduction}>
        <Image
          className={styles.mainPhoto}
          src={avataar}
          alt="cartoon photo of Paul"
        />
        <p className={styles.mainDescription}>
          Hi! I'm Paul Magnus. I am a full-stack developer at Epic Systems where
          I develop patient flow and discharge planning tools for hospitals
          around the US and the world.
        </p>
      </section>

      <TimelineSection
        title="Epic"
        theme={{
          color: "#ba122b",
        }}
        startDate={2019}
        description={
          <>
            I am a full stack developer working on tools to help hospitals
            improve patient movement and discharge planning. I lead design and
            development for full stack projects involving database, web server,
            and front-end client code. I am a leading developer in the overhaul
            of Epic's core patient movement workflows for transfer and
            discharge.
          </>
        }
      >
        <TimelineEvent title="Patient Flow" startDate={2019}>
          I work on Epic's core patient flow workflows: Admission, Transfer,
          Leave of Absence, and Discharge. I am a leading developer on Epic's
          overhaul of these tools into a web-based framework.
        </TimelineEvent>

        <TimelineEvent title="Discharge Planning">
          I work on tools to help hospitals track the plan for a patient's
          discharge from the hospital. These tools help ensure that patients
          avoid spending unnecessary time in the hospital.
        </TimelineEvent>
      </TimelineSection>

      <TimelineSection
        title="Hamilton College"
        startDate={2014}
        endDate={2018}
        theme={{ color: "#002f86" }}
        description={
          <>
            I studied computer science and mathematics at Hamilton College and
            worked as a teaching assistant for the computer science department.
            I worked on a summer research project at the college where I lead
            development of a strongly-typed dialect of Python and a Python
            graphics package which was used the following year in the
            introductory computer science classes. In my senior year, I
            developed an extension to Python that allows for Bash-style
            scripting called PyShell.
          </>
        }
      >
        <TimelineEvent title="PyShell" startDate={2018} endDate={2018}>
          PyShell is a superset of the Python programming language that allows
          for Bash-style scripting directly within a Python program. This was my
          senior project as a computer science student at Hamilton College.
        </TimelineEvent>

        <TimelineEvent title="CSPy" startDate={2017} endDate={2017}>
          CSPy is a statically-typed dialect of Python. This language was
          developed for use in the introductory computer science courses at
          Hamilton College.
        </TimelineEvent>

        <TimelineEvent
          title="Python Graphics Package"
          startDate={2017}
          endDate={2017}
        >
          This python graphics package was used as the graphics framework for
          the introductory computer science courses at Hamilton College.
        </TimelineEvent>

        <TimelineEvent
          title="Space Invaders AI"
          startDate={2017}
          endDate={2017}
        >
          A machine learning system using genetic programming for playing Space
          Invaders.
        </TimelineEvent>
      </TimelineSection>
    </main>
  );
}

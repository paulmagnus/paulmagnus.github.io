import Card from "@/components/card";
import Heading from "@/components/heading";
import Region from "@/components/region";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Region className={styles.epicGroup} aria-labelledby="epicHeading">
        <Card>
          <div className={styles.cardLayout}>
            <Heading id="epicHeading" className={styles.cardTitle}>
              Epic
            </Heading>
            <span className={styles.cardDate}>2019 - Present</span>
            <div className={styles.cardContent}>
              I am a full stack developer working on tools to help hospitals
              improve patient movement and discharge planning. I lead design and
              development for full stack projects involving database, web
              server, and front-end client code. I am a leading developer in the
              overhaul of Epic's core patient movement workflows for transfer
              and discharge.
            </div>
          </div>
        </Card>

        <Card>
          <Region className={styles.cardLayout} aria-labelledby="patientFlowHeading">
            <Heading id="patientFlowHeading" className={styles.cardTitle}>
              Patient Flow
            </Heading>
            <span className={styles.cardDate}>2019 - Present</span>
            <div className={styles.cardContent}>
              I work on Epic's core patient flow workflows: Admission, Transfer,
              Leave of Absence, and Discharge. I am a leading developer on
              Epic's overhaul of these tools into a web-based framework.
            </div>
          </Region>
        </Card>

        <Card title="Discharge Planning">
          I work on tools to help hospitals track the plan for a patient's
          discharge from the hospital. These tools help ensure that patients
          avoid spending unnecessary time in the hospital.
        </Card>
      </Region>

      <Region
        className={styles.hamiltonGroup}
        aria-labelledby="hamiltonHeading"
      >
        <Card>
          I studied computer science and mathematics at Hamilton College and
          worked as a teaching assistant for the computer science department. I
          worked on a summer research project at the college where I lead
          development of a strongly-typed dialect of Python and a Python
          graphics package which was used the following year in the introductory
          computer science classes. In my senior year, I developed an extension
          to Python that allows for Bash-style scripting called PyShell.
        </Card>
      </Region>
    </main>
  );
}

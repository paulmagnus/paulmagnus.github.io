import React from 'react';
import {
    Container, Card, ProgressBar
} from 'react-bootstrap';
import IdentifierPhoto from './IdentifierPhoto';
import Widget from './Widget';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHospital, faGraduationCap, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faFile } from "@fortawesome/free-regular-svg-icons";
import { TextColorClass } from './Color';
import IconLink from './IconLink';

export default function Home(): React.ReactElement {
    return (
        <Container className="_content">
            <section id="introduction">
                <div id="mainPhoto">
                    <IdentifierPhoto center />
                </div>
                <p id="description">
                    Hi! I'm Paul Magnus. I am a full-stack developer at Epic Systems where I develop patient flow and discharge planning tools for hospitals around the US and
                    the world.
                </p>
            </section>

            <section>
                <Widget id="epic" title="Epic" color="epic-red" date="2019 - Present" >
                    <Card.Subtitle>Software Developer</Card.Subtitle>
                    I am a full stack developer working on tools to help hospitals improve patient movement and discharge planning. I lead design and development for full stack projects
                    involving database, web server, and front-end client code. I am a leading developer in the overhaul of Epic's core patient movement workflows for transfer and discharge.
                    <Card.Footer>
                        <IconLink icon={faHospital} color="epic-red" href="https://www.epic.com" text="epic.com" />
                    </Card.Footer>
                </Widget>

                <div className="projectList">
                    <Widget title="Patient Flow" color="epic-red">
                        I work on Epic's core patient flow workflows: Admission, Transfer, Leave of Absence, and Discharge. I am a leading developer on Epic's overhaul of these tools into
                        a web-based framework.
                    </Widget>

                    <Widget title="Discharge Planning" color="epic-red">
                        I work on tools to help hospitals track the plan for a patient's discharge from the hospital.
                        These tools help ensure that patients avoid spending unnecessary time in the hospital.
                    </Widget>
                </div>
            </section>

            <section>
                <Widget title="Hamilton College" color="hamilton-blue" date="2014 - 2018">
                    <Card.Subtitle>Computer Science and Mathematics</Card.Subtitle>
                    I studied computer science and mathematics at Hamilton College and worked as a teaching assistant for the computer science department. I worked on a summer research project
                    at the college where I lead development of a strongly-typed dialect of Python and a Python graphics package which was used the following year in the introductory computer
                    science classes. In my senior year, I developed an extension to Python that allows for Bash-style scripting called PyShell.
                    <Card.Footer>
                        <IconLink icon={faGraduationCap} color="hamilton-blue" href="https://www.hamilton.edu" text="hamilton.com" />
                    </Card.Footer>
                </Widget>

                <div className="projectList">
                    <Widget title="PyShell" color="hamilton-blue" date="2018">
                        PyShell is a superset of the Python programming language that allows for Bash-style scripting directly within a Python program.
                        This was my senior project as a computer science student at Hamilton College.
                        <Card.Footer>
                            <IconLink icon={faGithub} color="gitHub-green" href="https://github.com/paulmagnus/pyshell" text="GitHub" />
                            <IconLink icon={faFilePdf} href="/pdf/PyShell_Paper.pdf" text="Documentation" />
                        </Card.Footer>
                    </Widget>

                    <Widget title="CSPy" color="hamilton-blue" date="2017">
                        CSPy is a statically-typed dialect of Python. This language was developed for use in the introductory computer science courses at Hamilton College.
                        <Card.Footer>
                            <IconLink icon={faGithub} color="gitHub-green" href="https://github.com/paulmagnus/CSPy" text="GitHub" />
                            <IconLink icon={faFilePdf} href="/pdf/CSPy-general.pdf" text="User Documentation" />
                            <IconLink icon={faFilePdf} href="/pdf/CSPy-developer.pdf" text="Developer Documenation" />
                        </Card.Footer>
                    </Widget>

                    <Widget title="Python Graphics Package" color="hamilton-blue" date="2017">
                        This python graphics package was used as the graphics framework for the introductory computer science courses at Hamilton College.
                        <Card.Footer>
                            <IconLink icon={faGithub} color="gitHub-green" href="https://github.com/paulmagnus/cs110graphics" text="GitHub" />
                            <IconLink icon={faFile} href="https://www.pauljmagnus.com/cs110graphics/html/index.html" text="Documenation" />
                        </Card.Footer>
                    </Widget>

                    <Widget title="Space Invaders AI" color="hamilton-blue" date="2017">
                        A machine learning system using genetic programming for playing Space Invaders.
                        <Card.Footer>
                            <IconLink icon={faGithub} color="gitHub-green" href="https://github.com/paulmagnus/GP-Semester-Project" text="GitHub" />
                        </Card.Footer>
                    </Widget>
                </div>
            </section>

            <section>
                <Widget title="Acquincum Institute of Technology" color="ait-green" date="2016">
                    I studies abroad in Budapest, Hungary for a semester. I studied computer graphics, computer vision, and cryptography.
                    <Card.Footer>
                        <IconLink icon={faGlobeEurope} color="ait-green" href="https://www.ait-budapest.com/" text="ait-budapest.com" />
                    </Card.Footer>
                </Widget>

                <div className="projectList">
                    <Widget title="2D Space Game" color="ait-green" date="2016">
                        A simple space game built with C++ and OpenGL.
                        <div className="projectVideo">
                            <video width="100%" autoPlay loop>
                                <source src="/video/Space_Game.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Widget>

                    <Widget title="Flight Simulator" color="ait-green" date="2016">
                        Simple flight simulator in 3D built with C++ and OpenGL.
                        <div className="projectVideo">
                            <video width="100%" autoPlay loop>
                                <source src="/video/Flight_Sim.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Widget>
                </div>
            </section>

            <Widget id="contact" title="Contact">
                <ul className="fa-ul">
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} listItem className={TextColorClass("dark")} />
                        <a href="mailto:pauljmagnus@gmail.com">pauljmagnus@gmail.com</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} listItem className={TextColorClass("linkedIn-blue")} />
                        <a href="https://www.linkedin.com/in/paul-magnus/">paul-magnus</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} listItem className={TextColorClass("gitHub-green")} />
                        <a href="https://github.com/paulmagnus/">paulmagnus</a>
                    </li>
                </ul>
            </Widget>
        </Container>
    );
}
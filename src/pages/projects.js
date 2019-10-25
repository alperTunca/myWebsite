import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import ProjectCard from '../components/projectCard';
import {ListGroup} from "react-bootstrap";


const title = "Projects | Alper Tunca";

const robotArmText = "The robot arm we developed in an undergraduate lesson, the application I developed to manage with an android-based device. Go inside for details.";
const cansatText = "For the CanSat competition organized by NASA, " +
    "the embedded software of the electronic circuit board belonging to the scientific load of the model satellite is here. Go inside for details.";
const websiteText = "This is my first website using React. It will always be open to improvement and will be updated. Go inside for details.";


class Projects extends Component {

    openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    render() {

        const colorStyle = {
            color: "#34A4EB"
        };


        return (
            <div className="mt-3">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <h1 style={colorStyle}>PROJECTS</h1>
                <hr style={{background : "#FFFFFF", width : "100px"}}/>
                <p style={{color: "#FFFFFF"}}>Some projects are here, You can open <a target="_blank"
                                                                                      rel="noopener noreferrer"
                                                                                      href="https://github.com/alperTunca?tab=repositories"
                                                                                      style={{color: "#34A4EB"}}>github</a> for
                    more</p>

                    <ListGroup style={{alignItems : "center"}}>

                        <ProjectCard border="success" cardHeader="Robot Arm"
                                     imgURL="./robot-arm.jpg" info={robotArmText}
                                     link="https://github.com/alperTunca/Robot-Arm"/>

                        <ProjectCard border="primary" cardHeader="Payload Circuit Code - Cansat 2019"
                                     imgURL="./cansat-circuit.jpg" info={cansatText}
                                     link="https://github.com/alperTunca/cansat-payload-embeded"/>

                        <ProjectCard border="warning" cardHeader="Personal Website"
                                     imgURL="./react-icon.jpg" info={websiteText}
                                     link="https://github.com/alperTunca/myWebsite"/>

                    </ListGroup>


            </div>
        );
    }
}

export default Projects;

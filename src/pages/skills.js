import React, {Component} from 'react';
import {Helmet} from "react-helmet";

const title = "Skills | Alper Tunca";

class Skills extends Component {

    render() {

        const colorStyle = {
            color: "#34A4EB"
        };

        return (
            <div className="mt-3">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <h1 style={colorStyle}>SKILLS</h1>
                <hr style={{background : "#FFFFFF", width : "100px"}}/>
            </div>
        );
    }
}

export default Skills;

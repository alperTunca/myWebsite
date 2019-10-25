import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import Home from "../pages/home";


class ProjectCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardHeader: props.cardHeader,
            imgURL: props.imgURL,
            border: props.border,
            info: props.info,
            link: props.link
        };
    }

    openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        return (
            <div className="m-4 col-md-5 col-xs-2">
                <Card border={this.state.border} style={{background: "#2B2A28"}}>
                    <Card.Header style={{color: "#34A4EB",alignText : "center",cursor: "pointer"}} onClick={this.openInNewTab.bind(this, this.state.link)}>
                            {this.state.cardHeader}
                    </Card.Header>
                    <Card.Body>
                        <Card.Img className="mb-1 col-xs-1 col-md-2" src={this.state.imgURL} style={{
                            width : "120px", height: "100px", minWidth : "120px", align : "center", float : "left"}}/>
                           <Card.Text className="ml-1"
                                       style={{color: "#FFFFFF", textAlign: "left"}}>
                                {this.state.info}
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

Home.propTypes = {
    cardHeader: PropTypes.string,
    imgURL: PropTypes.string,
    border: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string
};

Home.defaultProps = {
    cardHeader: 'Header Project',
    border: "primary",
    info: "Add Info for this Project",
    link: "_blank"
};


export default ProjectCard;

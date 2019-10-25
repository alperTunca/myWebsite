import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types';

const title = "Home | Alper Tunca";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiColor: props.hiColor
        }
    }

    getRandomColor() {
        console.log(this.state.hiColor);
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({
            hiColor: color
        });
    };

    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    render() {

        const iStyle = {
            color: "#34A4EB",
            cursor: "pointer"
        };


        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <div className="container content">
                    <Col>
                        <Image className="mt-3 " src={'./profile-photo.jpg'} width="128px" roundedCircle/>
                    </Col>
                    <h2 style={{color: "#34A4EB", fontSize: "35px", fontWeight: "bold"}}>Alper Tunca</h2>
                    <h3 style={{color: "#FFFFFF", fontSize: "30px"}}>Engineer & Developer</h3>
                    <p>
                        <i className="fab fa-linkedin fa-2x mr-3" style={iStyle}
                           onClick={this.openInNewTab.bind(this, "https://www.linkedin.com/in/alper-tunca-419611173/")}/>
                        <i className="fab fa-twitter-square fa-2x mr-3 " style={iStyle}
                           onClick={this.openInNewTab.bind(this, "https://twitter.com/tuncaa34")}/>
                        <i className="fab fa-github-square fa-2x" style={iStyle}
                           onClick={this.openInNewTab.bind(this, "https://github.com/alperTunca")}/>
                    </p>
                </div>
                <br/>
                <br/>
                <div className="container content">
                    <h4 style={{textAlign: "left"}}>

                        <span onClick={this.getRandomColor.bind(this)}
                              style={{
                                  color: this.state.hiColor || "#FFFFFF",
                                  fontWeight: "bold",
                                  cursor: "pointer"
                              }}>Hi, Everyone  </span>
                        <span className="emoji" role="img" aria-label="wave">👋</span>
                    </h4>
                    <p style={{textAlign: "left"}}>
                        <span style={{color: "#34A4EB", fontSize: "20px", textAlign: "center"}}>
                            I'm a student in electrical and electronics engineering. I am trying
                            to prove myself by learning many programming languages. I participate
                            in many events and competitions alone or with my team. <br/> <br/>
                            I develop projects mostly with JavaScript using React, Node and with Java using Android.
                            I also design basic circuit boards.
                        </span>
                    </p>
                </div>

            </div>
        );
    }
}

Home.propTypes = {
    hiColor: PropTypes.string
};



export default Home;
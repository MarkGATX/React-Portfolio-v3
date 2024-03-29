import React from 'react';
import greensock from '../../images/gsap-greensock.svg'
import animate from '../../images/Adobe_Animate_CC_icon_(2020).svg'
import Questions from '../Questions'
import googleFonts from "../../images/Google-Fonts-Logo.png"
import "./AboutMe.css";

export default function AboutMe() {

    return (
        <section className="aboutMe col-md-11 col-lg-3 ">
            <h2 className="col-12 mb-4">About me</h2>
            <p>I'm a creative Front-End developer and multi-hyphenate who loves learning and creating new things. </p>
            <p>With over 18 years of professional experience across multiple industries I've developed a keen eye for detail, a talent for visual storytelling, the soft skills needed to work with diverse teams, and the technical skills to make it all come together.</p>
            <p className="mb-5">Thanks for stopping by and please reach out to say hello.</p>
            <Questions />
            {/* <h5 id="question"></h5>
            <p id="answer" className="mb-5"></p> */}
            <h5 id="techSkills" >Tech skills:</h5>
            <div className="d-flex flex-wrap">
                <i title="React" className="devicon-react-plain colored"></i>
                <i title="Javascript" className="devicon-javascript-plain colored"></i>
                <i title="Next.js" className="devicon-nextjs-original"></i>
                <i title="GraphQL" className="devicon-graphql-plain colored"></i>
                <i title="MaterialUI" className="devicon-materialui-plain colored"></i>
                <i title="MongoDB" className="devicon-mongodb-plain colored"></i>
                <img title="Greensock" className="icon" alt="greensock logo" src={greensock} />
                <i title="Sequelize" className="devicon-sequelize-plain colored"></i>
                <i title="Bootstrap" className="devicon-bootstrap-plain colored"></i>
                <i title="Handlebars" className="devicon-handlebars-plain colored"></i>
                <i title="Heroku" className="devicon-heroku-plain colored"></i>
                <i title="jquery" className="devicon-jquery-plain colored"></i>
                <i title="MySQL" className="devicon-mysql-plain colored"></i>
                <i title="vscode" className="devicon-vscode-plain colored"></i>
                <i title="CSS3" className="devicon-css3-plain colored"></i>
                <i title="HTML5" className="devicon-html5-plain colored"></i>
                <i title="NodeJS" className="devicon-nodejs-plain colored"></i>
                <i title="Wordpress" className="devicon-wordpress-plain colored"></i>
                <i title="Photoshop" className="devicon-photoshop-plain colored"></i>
                <i title="Premiere Pro" className="devicon-premierepro-plain colored"></i>
                <i title="After Effects" className="devicon-aftereffects-plain colored"></i>
                <i title="Blender" className="devicon-blender-original colored"></i>
                <img title="Adobe Animate" className="icon" alt="adobe animate logo" src={animate} />
                <img title="Google Fonts" className="icon" alt="Google Fonts logo" src={googleFonts} />
                    </div>

                </section>
                )
                }
import React from "react";
import AppHeader from "../cmps/AppHeader";
import Projects from "../cmps/Projects";
import About from "../cmps/About";

class HomePage extends React.Component {
    render() {
        return (
            <>
                <AppHeader />
                <div className="home">
                    <div className="container">
                        <header className="intro-text">
                            <div className="intro-heading">HEY, I'M MOSHE DABUSH</div>
                            <div className="intro-lead-in">A Full-stack / Frontend Web Developer</div>
                            <a className="btn btn-xl js-scroll-trigger" href="#services">Projects</a>
                        </header>
                    </div>
                    <About />
                    <Projects />

                </div>
            </>
        )
    }
}
export default HomePage;
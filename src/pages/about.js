import './about.css';

const About = () => {
    return (
        <div className="about">
            <div className="content">
                <h1>About</h1>
                <div className="images">
                    <div className="profile">
                        <img src="theresa.jpg" />
                        <h5>Theresa Yu</h5>
                    </div>
                    <div className="profile">
                        <img src="boyan.jpg" />
                        <h5>Boyan Xia</h5>
                    </div>
                </div>
                <p>
                    Theresa Yu and Boyan Xia are fourth year medical students at the University of Maryland School of Medicine who are passionate about
                    highlighting the struggles facing the AAPI medical community. Our hope is that by documenting the experiences of UMB students and faculty,
                    we can shed light on racism, xenophobia, and intolerance towards the AAPI community that still exists in our society today. In doing so, we
                    aim to open dialogues to develop action plans to address these biases in our communities. Theresa Yu is an aspiring radiologist. Boyan Xia
                    is an aspiring internist.
                </p>
            </div>
        </div>
    );
};

export default About;

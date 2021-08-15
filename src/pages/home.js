import About from './about';
import Background from './background';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <h1>UMB Against AAPI Hate</h1>
            </div>
            <div className="mission">
                <h1>Mission</h1>
                <p>
                    In response to sharply rising reports of xenophobia and hate crimes against Asian American and Pacific Islander (AAPI) individuals resulting
                    from the COVID-19 pandemic, medical students at the University of Maryland School of Medicine created an AAPI Hate Response Group in March,
                    2021. Our mission is to increase awareness for incidents of violence, discrimination, harrassment, or hate experienced by students and to
                    work with administration to effectively address all forms of structural racism leveled at AAPI, Black, Indigenous, and other communities of
                    color.
                </p>
            </div>
            <Background />
        </div>
    );
};

export default Home;

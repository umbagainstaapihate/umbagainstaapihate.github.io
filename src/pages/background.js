import './background.css';

const Background = () => {
    return (
        <div className="background">
            <h1>Background</h1>
            <p>
                Awareness of hate incidents against Asian Americans entered the national spotlight after the start of the COVID-19 pandemic. However, anti-AAPI
                attacks have long been an issue in the United States prior to the pandemic. The FBI has been able to collect on Asian-related bias incidents as
                far back as 1996. Although these incidents declined from the 1990s to the 2010s, reported incidents began rising once more in 2016.
            </p>
            <img src="figure1.png" id="figure"></img>
            <p id="source">
                Hate crime data collected by the FBI showing a rise in incidents against Asians on the rise once more.
                <br />
                Figure taken from
                <span>
                    {' '}
                    <a target="_blank" href="https://www.nbclosangeles.com/news/national-international/anti-asian-hate-crimes-statistics-in-the-us/2597914/">
                        NBC Los Angeles
                    </a>
                </span>
                .
            </p>
            <p>
                These incidents have taken a more violent turn since the start of the COVID-19 pandemic. Unfortunately, the number of incidents has only
                continued to grow since then. Anti-Asian hate crimes reported to police in 16 of America’s largest cities rose by 164% in the first quarter of
                2021 compared to the first quarter of 2020.
            </p>
            <p>
                <a target="_blank" href="https://stopaapihate.org/">
                    Stop AAPI Hate
                </a>{' '}
                is a group dedicated to gathering data related to bias incidents against Asian Americans. Recent statistics from Stop AAPI hate (
                <a target="_blank" href="https://stopaapihate.org/wp-content/uploads/2021/08/Stop-AAPI-Hate-National-Report-Final.pdf">
                    National Report
                </a>
                ) showed that self-reported incidents of racism and hate crimes jumped dramatically from 3,795 between March 2020-February 2021 to 6,603 within
                just one month in March 2021. These numbers have even further increased to 9,081 during April-June 2021. Their statistics also show that Asian
                Americans between 26-35 years of age make up the vast majority of self-reported hate incidents submitted to the group. The Stop AAPI{' '}
                <a target="_blank" href="https://stopaapihate.org/mental-health-report/">
                    Mental Health report
                </a>{' '}
                highlights the effects anti-Asian racism has had on the mental health of Asian Americans during the pandemic.
            </p>
            <img src="figure2.png" id="figure"></img>
            <p id="source">
                According to Stop AAPI hate, most of the self-reported incidents involved verbal harassment.
                <br />
                Figure from
                <span>
                    {' '}
                    <a
                        target="_blank"
                        href="https://www.asisonline.org/security-management-magazine/articles/2021/07/hate-crimes-against-AAPI-continue-to-rise/"
                    >
                        https://www.asisonline.org/security-management-magazine/articles/2021/07/hate-crimes-against-AAPI-continue-to-rise/
                    </a>
                </span>
                .
            </p>
            <p>
                Hate crimes targeting AAPI individuals in Maryland have more than doubled since 2019, according to an April 9 press release from the governor’s
                office. More than half of 1,500 Asian Americans who responded to an AAPI Data 2020 Asian American Voter Survey (
                <a target="_blank" href="http://aapidata.com/">
                    http://aapidata.com/
                </a>
                ) reported that they are worried about experiencing hate crimes, harassment, or discrimination because of anti-Asian rhetoric surrounding
                COVID-19.
            </p>
            <img src="figure3.png" id="figure"></img>
            <p id="source">
                Figure from
                <span>
                    {' '}
                    <a target="_blank" href="http://aapidata.com/">
                        http://aapidata.com/
                    </a>
                </span>
                .
            </p>
        </div>
    );
};

export default Background;

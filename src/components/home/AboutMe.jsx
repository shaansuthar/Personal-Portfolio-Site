import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container row">
        <p className="lead text-center">My journey in engineering has been shaped by a diverse range of experiences, each contributing to my growth. One of the standout chapters was my time at Microsoft, where I had the privilege of gaining hands-on experience in full-stack development. During this period, I was involved in creating a website and chatbot for an internal big data analytics tool. This opportunity allowed me to delve deep into the world of software development and product management. I learned new programming languages and gained insights into the entire product lifecycle, from initial development to production deployment. This experience not only expanded my skill set but also provided me with a profound understanding of the tech industry's nuances.</p>
        <p className="lead text-center">The following summer, I embraced a new challenge at Microsoft by working on a diagnostics tool. This tool aimed to automate the process of checking the history of a website in Bing's index to make it easier to diagnose issues of disappearing URLs. My role involved developing algorithms and implementing automation processes, further enhancing my software development and problem-solving skills. This experience taught me how to develop robust, efficient code that scales for massive distributed systems.</p>
        <p className="lead text-center">Prior to my internships at Microsoft, I spent two years trading options, where I honed my risk management skills and became adept at identifying trends across different timeframes. This journey involved extensive coursework, encompassing diverse trading strategies and signal analysis. I also developed custom indicators to enhance signal recognition. This experience equipped me with a deep understanding of data analysis, risk assessment, and timely decision-making.</p>
        <p className="lead text-center">In addition to my professional experiences, I'm actively involved in extracurricular activities. At McMaster University's Formula Electric team, I've played a pivotal role, advancing from a team member to leading a team of 15 dedicated individuals responsible for designing and manufacturing the suspension and steering system for our 1/4 scale electric Formula 1-style race car. My responsibilities included optimizing suspension dynamics, bellcrank design, and conducting structural tests to ensure safety and performance. This experience emphasized the importance of precision engineering, teamwork, and rigorous testing in developing high-performance vehicles.</p>
        <p className="lead text-center">Another defining extracurricular experience in my journey has been my involvement in competitive robotics. It's where I honed my ability to thrive under high-pressure situations, developed exceptional teamwork and leadership skills, and learned to work effectively within a multidisciplinary team. I'm particularly proud of the fact that I now mentor high school robotics teams, sharing my knowledge and inspiring the next generation of engineers.</p>
        <p className="lead text-center">My enthusiasm for taking initiative extends to personal and team projects. In fact, I've taken on solo projects such as developing this website and constructing a 3D-printed drone. I've also actively participated in hackathons, one of which resulted in a notable achievement. During this hackathon, our team developed a recycling lid equipped with AI to determine the material entering the container and then sort it appropriately. This innovative project not only showcased our problem-solving skills but also won us 2nd overall.</p>
        <p className="lead text-center">With a diverse skill set, curiosity, and an unwavering commitment to engineering excellence, I'm excited to continue my journey, making a meaningful impact on the world through technology and engineering solutions.</p>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;

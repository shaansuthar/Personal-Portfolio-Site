// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shaan",
  middleName: "",
  lastName: "Suthar",
  message: " Passionate about innovating to create a brighter tomorrow. ",
  icons: [
    {
      image: "fa-github",
      url: "https://www.github.com/shaansuthar",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shaan-suthar",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "config" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../config/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "config" directory
//     i.e resume: require("../config/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../config/shaansuthar.jpg"),
  imageSize: 375,
  message:
    `I'm Shaan Suthar, a 3rd year mechatronics engineering student at McMaster University in Canada. I'm incredibly passionate about using engineering to solve real-world problems and make a positive impact on people's lives. My ultimate goal is to harness this passion to drive innovation within the field of engineering. Outside of academics, I lead an active life. You can often find me in the gym, on the ultimate frisbee field, exploring new destinations, or tuning into scientific podcasts.`,
  resume: "https://drive.google.com/file/d/1JXLAKTW1MVO1XMSxV5Oy1MRn4vbLJjOC/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "shaansuthar",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    'My journey has contained many leadership opportunities, each contributing to my growth as both a leader and a team player. Highlights of these experiences can be seen below:<br><br>• Team Lead for MAC Formula Electric’s Suspension & Steering sub-team, leading a team of 12 members in designing, justifying, and manufacturing components for a 1/4 scale formula-style race car<br>• Microsoft Student Ambassador, organizing an event for 40 high school students to teach them how to create and host websites using various GitHub tools<br>• Panelist at McMaster\'s Leadership Development Conference and my high school\'s Computer Science Panel, sharing insights and expertise<br>• Founded and led my high school\'s inaugural team in a sumobot competition at Ontario Tech University, earning the "Best New Entry" award for our innovative use of the gyro sensor<br>• Co-captain and Head Driver of FRC Team 6110, guiding a team of 40 members after transferring due to funding cuts<br>• Head Driver and Mechanical/Electrical Lead of FIRST Robotics Team 5076, developing leadership and technical skills in a robotics context',
  images: [
    { 
      img: require("../assets/img/leadership/fsae_1.JPG"), 
      label: "FSAE Formula Electric 2023", 
      paragraph: "Michigan International Speedway" 
    },
    { 
      img: require("../assets/img/leadership/fsae_2.jpeg"), 
      label: "FSAE Formula Electric 2023", 
      paragraph: "Michigan International Speedway" 
    },
    { 
      img: require("../assets/img/leadership/fsae_3.jpg"), 
      label: "FSAE Formula Electric 2023", 
      paragraph: "Michigan International Speedway" 
    },
    { 
      img: require("../assets/img/leadership/cspanel_1.jpg"), 
      label: "Computer Science Panel 2022", 
      paragraph: "J. Clakre Richardson Collegiate" 
    },
    { 
      img: require("../assets/img/leadership/cspanel_2.jpg"), 
      label: "Computer Science Panel 2022", 
      paragraph: "J. Clarke Richardson Collegiate" 
    },
    { 
      img: require("../assets/img/leadership/ldc.jpg"), 
      label: "McMaster Leadership Development Conference 2023", 
      paragraph: "CIBC Hall" 
    },
    { 
      img: require("../assets/img/leadership/msftambassador.jpg"), 
      label: "Microsoft Student Ambassador Workshop 2023", 
      paragraph: "J. Clarke Richardson Collegiate" 
    },
    { 
      img: require("../assets/img/leadership/sumobots.jpg"), 
      label: "Ontario Tech University Sumobot Competition 2019", 
      paragraph: "Ontario Tech University" 
    },
    { 
      img: require("../assets/img/leadership/frc6110.jpg"), 
      label: "FIRST Robotics Competition 2020", 
      paragraph: "Ontario Tech University" 
    },
    { 
      img: require("../assets/img/leadership/frc5076.png"), 
      label: "FIRST Robotics Competition 2019", 
      paragraph: "J. Clarke Richardson Collegiate" 
    },
  ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  codingSkills: [
    { name: "Python", value: 80 },
    { name: "C / C++", value: 75 },
    { name: "C#", value: 80 },
    { name: "Java", value: 70 },
    { name: "JavaScript / TypeScript", value: 60 },
    { name: "HTML / CSS", value: 55 },
    { name: "SQL", value: 25 },
    { name: "Git", value: 70 },
  ],
  technicalSkills: [
    { name: "MatLab", value:65 },
    { name: "Solidworks", value: 75 },
    { name: "VS Code", value: 85 },
    { name: "Visual Studio", value: 75 },
    { name: "MS Word / Google Docs", value: 95 },
    { name: "MS Powerpoint / Google Slides", value: 95 },
    { name: "MS Excel / Google Sheets", value: 75 },
    { name: "Teams / Slack", value: 90 },
  ],
  softSkills: [
    { name: "Communication", value: 70 },
    { name: "Leadership", value: 90 },
    { name: "Teamwork", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Time Management", value: 65 },
    { name: "Adaptability", value: 90 },
    { name: "Empathy", value: 55 },
    { name: "Problem Solving", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering, Machine Learning, or Robotics internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "shaan.suthar@icloud.com",
};

const experiences = {
  show: true,
  heading: "Work Experience",
  data: [
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/microsoft.png'),
      date: 'May 2023 – August 2023',
    },
    {
      role: 'Explore Intern (SWE/PM)',
      companylogo: require('../assets/img/microsoft.png'),
      date: 'May 2022 – August 2022',
    },
    {
      role: 'Stock and Options Trader',
      companylogo: require('../assets/img/trading.png'),
      date: 'June 2020 – August 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

import {
  mobile,
  backend,
  creator,
  web,
  azure,
  c,
  cpp,
  csharp,
  css, 
  docker,
  firebase,
  flutter,
  gcp,
  git,
  github2,
  golang,
  html,
  javascript,
  ltspice,
  matlab,
  mysql,
  nodejs,
  postgresql,
  python,
  rails,
  reactjs,
  ruby,
  solidworks,
  simulink,
  tailwind,
  threejs,
  typescript,
  verilog,
  microsoft,
  shopify,
  trading,
  docbotics,
  ldc,
  macfe,
  mlsa,
  stormbots,
  sumobots,
  analogneuralnet,
  arcade,
  eyespy,
  foodsnaps,
  happyrecyclemore,
  laas,
  macfesim,
  pacemaker,
  quadcopter,
  scorbot,
  spincard,
  suspension,
  frc5076,
  frc6110,
  fsae2022,
  fsae2023,
  fsae2024,
  ldcevent,
  mlsaevent,
  panelist,
  sumobotsevent,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "#about",
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://docs.google.com/document/d/1iHPtnWTDYZVs9fw9IURX6EoB4Rk4FB6QEh6uqJbSeqA/edit?usp=sharing",
    target: "_blank",
  },
  {
    id: "experience",
    title: "Experience",
    link: "#experience",
  },
  {
    id: "leadership",
    title: "Leadership",
    link: "#leadership",
  },
  {
    id: "projects",
    title: "Projects",
    link: "#projects",
  },
  // {
  //   id: "skills",
  //   title: "Skills",
  //   link: "#skills",
  // },
  {
    id: "contact",
    title: "Contact",
    link: "#contact",
  },
];

const services = [
  {
    title: "Mechatronics Engineer",
    icon: web,
  },
  {
    title: "Systems Architect",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Leader, Collaborator, & Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "C",
  //   icon: c,
  // },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "Matlab",
  //   icon: matlab,
  // },
  // {
  //   name: "Simulink",
  //   icon: simulink,
  // },
  {
    name: "Verilog",
    icon: verilog,
  },
  // {
  //   name: "Flutter",
  //   icon: flutter,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  // {
  //   name: "GitHub",
  //   icon: github2,
  // },
  {
    name: "Azure",
    icon: azure,
  },
  // {
  //   name: "GCP",
  //   icon: gcp,
  // },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "Solidworks",
    icon: solidworks,
  },
  {
    name: "LTspice",
    icon: ltspice,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Shopify",
    location: "Toronto, ON, Canada",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Led webhook changes for a project enabling all Shopify merchants to refund specific shipping lines, improving flexibility for split-cart refunds through API and database modifications",
      "Refactored shared serializers to decouple REST and webhook logic, ensuring future-proofing as Shopify transitioned away from REST in favor of GraphQL, while maintaining backward compatibility",
      "Implemented support for accessing beta-flagged values, so developers can safely access and test values protected by API versioning",
      "Presented findings regularly on code optimization to a team of 50+ engineers, introducing a shared serializer structure that reduced repetitive code across multiple systems and improved long-term maintainability",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Microsoft",
    location: "Redmond, WA, USA",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Architected and deployed a diagnostic tool to automate the analysis of missing URLs in Bing’s 400 billion-document search index, eliminating the need for manual weekly reviews by the team",
      "Designed and implemented a distributed log-parsing system that transformed binary logs into a consolidated format, enabling real-time monitoring and reducing manual processing time from hours to seconds",
      "Developed an API to integrate the tool with an internal web portal, enabling non-technical teams to access URL history and troubleshoot without relying on engineering support, streamlining cross-team collaboration",
      "Created a custom indexing system that enhanced memory utilization and significantly improved log search performance, reducing query times and operational overhead across Bing’s distributed infrastructure",
    ],
  },
  {
    title: "Explore Intern (SWE/PM)",
    company_name: "Microsoft",
    location: "Toronto, ON, Canada",
    icon: microsoft,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Redesigned internal wiki for a big data analytics platform to reduce developer support requests, improving user self-service with a more intuitive UI and chatbot integration",
      "Led the product management for the wiki during the release phase, which included gathering user feedback and collaborating with stakeholders to prioritize features that addressed key pain points",
      "Developed the wiki using Docusaurus, integrating Azure AD authentication, personalized content, and custom search functionality to streamline the user experience",
      "Built a CI/CD pipeline using Azure DevOps for smooth deployment and iterative improvements based on feedback",
    ],
  },
  {
    title: "Stock and Options Trader",
    company_name: "Self-Employed",
    location: "Toronto, ON, Canada",
    icon: trading,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - Aug 2021",
    points: [
      "Grew portfolio by 50% by analyzing trends and price action of stocks in the NYSE, NASDAQ, Russell 2000s, and Dow Jones",
      "Bought and sold puts, calls, and spreads to generate profit while managing risk and following strategies learned in courses",
      "Coded indicators in Thinkscript for ThinkOrSwim and Pine Script for TradingView to identify when specific strategies occurred and automated sending a signal for it in each trading platform",
    ],
  },
];

const leadership = [
  {
    title: "Software Simulation Team Lead",
    team_name: "MAC Formula Electric",
    icon: macfe,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Leading the design and development of a full car simulator, combining mechanical and software knowledge to enable data-driven decision-making and resource allocation for the race car team",
      "Developing a simulator to help drivers familiarize with the track prior to competition and optimize car performance"
    ],
  },
  {
    title: "Suspension & Steering Team Lead",
    team_name: "MAC Formula Electric",
    icon: macfe,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2024",
    points: [
      "Led a team of 15 to design and manufacture the suspension and steering system for a 1/4 scale electric F1-style race car",
      "Collaborated with sub-teams to optimize the system for performance and manufacturability, ensuring seamless integration with other components"
    ],
    image: fsae2024,
  },
  {
    title: "Student Ambassador",
    team_name: "Microsoft Learn",
    icon: mlsa,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Aug 2024",
    points: [
      "Organized and led an event for 40 high school students, teaching them to create and host websites using GitHub tools",
      "Mentored students on coding and deployment, fostering their technical growth in web development"
    ],
    image: mlsaevent,
  },
  {
    title: "Suspension & Steering Sub-Team Member",
    team_name: "MAC Formula Electric",
    icon: macfe,
    iconBg: "#383E56",
    date: "Jun 2022 - Jun 2023",
    points: [
      "Collaborated with others to calculate ideal spring rate and travel for the suspension system using Excel",
      "Optimized four-bar suspension arm dimensions using MatLab and validated design through FEA simulations in Solidworks"
    ],
    image: fsae2023,
  },
  {
    title: "Panelist",
    team_name: "McMaster Leadership Development Conference & J. Clarke Richardson Collegiate CS Panel",
    icon: ldc,
    iconBg: "#000022",
    date: "Various Dates",
    points: [
      "Shared insights on leadership and my coop journey, discussing challenges, strategies, and key takeaways from my experiences at Microsoft",
      "Engaged in discussions about technical leadership, career development, and navigating early career opportunities"
    ],
    image: panelist,
  },
  {
    title: "Chassis & Ergonomics Sub-Team Member",
    team_name: "MAC Formula Electric",
    icon: macfe,
    iconBg: "#383E56",
    date: "Oct 2021 - Jun 2022",
    points: [
      "Manufactured carbon fiber panels and monocoque for a 1/4 scale electric formula-style race car",
      "Created CAD parts for the chassis, seat, and steering wheel, and collaborated with other sub-teams to integrate their components into the final product"
    ],
    image: fsae2022,
  },
  {
    title: "Team Founder & Captain",
    team_name: "Sumobot Competition - Ontario Tech University",
    icon: sumobots,
    iconBg: "#FFFFFF",
    date: "Jan 2020",
    points: [
      "Founded and led the inaugural team to compete in a sumobot competition, earning the 'Best New Entry' award for innovative gyro sensor integration",
      "Directed team strategy, robot design, and sensor programming to achieve optimal performance in competition"
    ],
    image: sumobotsevent,
  },
  {
    title: "Co-Captain & Head Driver",
    team_name: "FIRST Robotics Team 6110",
    icon: docbotics,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Jun 2021",
    points: [
      "Guided a team of 40 members, managing team dynamics and project execution after transferring due to funding cuts",
      "Led both mechanical and electrical subsystems, ensuring seamless robot performance in competition"
    ],
    image: frc6110,
  },
  {
    title: "Head Driver & Mechanical/Electrical Lead",
    team_name: "FIRST Robotics Team 5076",
    icon: stormbots,
    iconBg: "#000000",
    date: "Jan 2019 - Jun 2020",
    points: [
      "Developed leadership and technical skills by managing the mechanical and electrical components of the robot",
      "Mentored younger students, providing guidance on both technical and leadership development"
    ],
    image: frc5076,
  },
];

const skills = [
  {
    category: "Frontend Development",
    skillsList: ["React", "React Native", "JavaScript", "HTML", "CSS", "Docusaurus"],
  },
  {
    category: "Backend Development",
    skillsList: ["Go", "Node.js", "GraphQL", "REST", "PostgreSQL", "MySQL"],
  },
  {
    category: "Embedded Systems & IoT",
    skillsList: ["Arduino", "STM32", "C/C++", "PID Control", "Embedded C"],
  },
  {
    category: "AI & Machine Learning",
    skillsList: ["Python", "TensorFlow", "OpenCV", "PySerial", "ML Algorithms"],
  },
  {
    category: "DevOps & Cloud",
    skillsList: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Tools & Platforms",
    skillsList: ["Git", "SolidWorks", "Fusion 360", "Matlab", "Simulink"],
  },
];

const projects = [
  {
    name: "Analog Neural Network (WIP)",
    description:
      "Capstone project building a configurable neural network that uses analog signal processing for all computations to reduce energy consumption and computation time.",
    tags: [
      {
        name: "circuitdesign",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "pcb",
        color: "pink-text-gradient",
      },
      {
        name: "capstone",
        color: "orange-text-gradient",
      }
    ],
    image: analogneuralnet,
    source_code_link: "https://github.com/analog-neural-net",
  },
  {
    name: "Spincard (WIP)",
    description:
      "Serverless microservice-based banking platform for groups to easily pool and spend money together using Go.",
    tags: [
      {
        name: "go",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "encore",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "orange-text-gradient",
      },
    ],
    image: spincard,
    source_code_link: "https://github.com/spin-card/",
  },
  {
    name: "Full Car Simulator for MAC Formula Electric (WIP)",
    description:
      "Building a modular full car driver-in-the-loop and software-in-the-loop simulator for a 1/4 scale electric F1-style race car (FSAE competition).",
    tags: [
      {
        name: "ros2",
        color: "blue-text-gradient",
      },
      {
        name: "go",
        color: "green-text-gradient",
      },
      {
        name: "c/c++",
        color: "pink-text-gradient",
      },
      {
        name: "unity",
        color: "orange-text-gradient",
      },
    ],
    image: macfesim,
    source_code_link: "https://github.com/macformula/simulator",
  },
  {
    name: "Suspension & Steering System for MAC Formula Electric",
    description:
      "Designed, built, and validated a custom suspension and steering system for a 1/4 scale electric F1-style race car (FSAE competition).",
    tags: [
      {
        name: "mechanical",
        color: "blue-text-gradient",
      },
      {
        name: "solidworks",
        color: "green-text-gradient",
      },
      {
        name: "fea",
        color: "pink-text-gradient",
      },
      {
        name: "projectmanagement",
        color: "orange-text-gradient",
      },
    ],
    image: suspension,
    project_link: "https://drive.google.com/file/d/1pbQk1McYBHq2bjd8SI_qow9tguKWZtmW/view?usp=sharing",
  },
  {
    name: "LaaS (Locker as a Service)",
    description:
      "A temperature-controlled locker service allowing merchants to sell goods contactless, winning 3rd place at Deltahacks X.",
    tags: [
      {
        name: "iot",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "raspberrypi",
        color: "pink-text-gradient",
      },
      {
        name: "hackathonwinner",
        color: "orange-text-gradient",
      },
    ],
    image: laas,
    project_link: "https://devpost.com/software/laas",
  },
  {
    name: "Pace++",
    description:
      "Created a Software-in-the-Loop and Hardware-in-the-Loop pacemaker to visually and functionally represent modern pacemakers.",
    tags: [
      {
        name: "i2c",
        color: "blue-text-gradient",
      },
      {
        name: "hil",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "simulink",
        color: "orange-text-gradient",
      }
    ],
    image: pacemaker,
    source_code_link: "https://github.com/PacePlusPlus/PacePlusPlus",
  },
  {
    name: "AR.cade",
    description:
      "An arcade game library controlled by body movements tracked via webcam using OpenCV and ML, enabling gesture-based gameplay.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "hackathonwinner",
        color: "orange-text-gradient",
      },
    ],
    image: arcade,
    project_link: "https://devpost.com/software/ar-cade",
  },
  {
    name: "Happy Recyclemore",
    description:
      "A smart recycling lid that classifies and sorts items based on material using a Tensorflow model and OpenCV.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "hardware",
        color: "pink-text-gradient",
      },
      {
        name: "hackathonwinner",
        color: "orange-text-gradient",
      },
    ],
    image: happyrecyclemore,
    project_link: "https://devpost.com/software/happy-recyclemore",
  },
  {
    name: "FoodSnaps",
    description:
      "A mobile app using React Native that provides recipe recommendations based on pictures of ingredients.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "spoonacular",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "hackathon",
        color: "orange-text-gradient",
      }
    ],
    image: foodsnaps,
    project_link: "https://devpost.com/software/foodsnaps",
  },
  {
    name: "EYEs.py",
    description:
      "An eye-tracking system that records focus points on a webpage or advertisement using Adhawk's Mindlink glasses.",
    tags: [
      {
        name: "eyetracking",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "hackathon",
        color: "orange-text-gradient",
      }
    ],
    image: eyespy,
    project_link: "https://devpost.com/software/eyes-py",
  },
  {
    name: "3D Printed Arduino Quadcopter",
    description:
      "Designed and built a custom quadcopter with 3D-printed frame, using Arduino microcontrollers for flight control and IMU sensor tuning.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "3dprinting",
        color: "green-text-gradient",
      },
      {
        name: "pidcontrol",
        color: "pink-text-gradient",
      },
    ],
    image: quadcopter,
    project_link: "https://drive.google.com/file/d/1-GiYaabQrA09tqiAAeo9hTZEQMCLHcFP/view?usp=sharing",
  },
  {
    name: "Scorbot ER-III Robotic Arm Restoration",
    description:
      "Restored a $20,000 robotic arm from the 1990s to working condition and figured out how to use it with modern computers.",
    tags: [
      {
        name: "robotics",
        color: "blue-text-gradient",
      },
      {
        name: "documentation",
        color: "green-text-gradient",
      },
      {
        name: "debugging",
        color: "pink-text-gradient",
      },
      {
        name: "diagnostics",
        color: "orange-text-gradient",
      },
    ],
    image: scorbot,
    project_link: "https://drive.google.com/file/d/1dG9DYNn99fANQIbrrpWIgA24rOs6lcqz/view?usp=sharing",
  }
];

export { services, technologies, experiences, leadership, skills, projects };

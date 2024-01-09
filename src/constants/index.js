import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Artwork2",
    title: "Adventures",
  },
  {
    id: "contact",
    title: "Subscribe",
  },
];

const services = [
  {
    title: "Love",
    icon: web,
  },
  {
    title: "Purity",
    icon: web,
  },
  {
    title: "Truth",
    icon: creator,
  },
  {
    title: "Soul",
    icon: web,
  },
  {
    title: "Compassion",
    icon: backend,
  },
  {
    title: "Vibration",
    icon: mobile,
  },
  {
    title: "Connection",
    icon: web,
  },
  {
    title: "Human",
    icon: web,
  },
];

const technologies = [
  {
    name: "Java",
    icon: "Java.png",
  },
  {
    name: ".Net",
    icon: "net.png",
  },
  {
    name: "Python",
    icon: "Python.png",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: "Angular.png",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: "PostgreSQL.png",
  },
  {
    name: "SQLite",
    icon: "SQLite.png",
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Driver",
    company_name: "Uber",
    icon: "/uber.png",
    iconBg: "#E6DEDD",
    date: "December 2018 - Current",
    points: [
      "Utilize Uber’s software platform to coordinate, communicate, and transport passengers on over 7000 rides while proudly maintaining a 4.97-star rating out of 5 stars",
      "Demonstrate a strong work ethic and reliability in meeting daily targets and goals by remaining self-motivated and responsible.",
      "Effortlessly communicate with passengers from diverse cultural backgrounds by fluently speaking multiple languages.",
      "Flexible and adaptable, willing to work extended hours and weekends to accommodate passengers’ needs and demands.",    
    ],
  },
  {
    title: "Production Designer",
    company_name: "Imprint Events Group",
    icon: "/imprint.png",
    iconBg: "#E6DEDD",
    date: "February 2021 - December 2021",
    points: [
      "Prepared and rehearsed show content between clients and the tech team.",
      "Stylishly edited multiple takes of pre-recorded video into seamless footage to air during live fundraisers for various charity organizations.",
      "Adapted run-of-show to incorporate tech cues and visual prompts prior to live streaming.",
      "Show-Caller of live broadcast productions.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "J2 Roofing",
    icon: "/house.png",
    iconBg: "#E6DEDD",
    date: "July 2017 - December 2018",
    points: [
      "Mobilized multiple teams simultaneously by accurately translating  job requirements and specifications from English to Spanish.",
      "Evaluated each location and maintained daily progress reports.",
      "Harmonized city inspections with estimated job completion to maximize team scheduling.",
    ],
  },
  {
    title: "Floor Manager & Table Games Dealer",
    company_name: "Bear River Casino & Resort",
    icon: "/bearRiver.png",
    iconBg: "#E6DEDD",
    date: "August 2013 - February 2017",
    points: [
      "Oversaw and managed daily operations of the table games department, ensuring smooth and efficient gameplay.",
      "Monitored table games activities to ensure compliance with gaming regulations, policies, and procedures.",
      "Professionally resolved customer disputes or concerns in a diplomatic manner, ensuring high levels of customer satisfaction.",
      "Demonstrated exceptional customer service skills by providing a welcoming and engaging atmosphere for all players at the table game.",
      "Accurately, efficiently, and securely handled high volumes of cash and chip exchanges.",
      "Monitored player behavior and reported any suspicious or fraudulent activity to the table games supervisor or casino security team.",
    ],
  },
  {
    title: "Warehouse Manager",
    company_name: "Action Industries",
    icon: "/Action.png",
    iconBg: "#E6DEDD",
    date: "June 2009 - March 2012",
    points: [
      "Oversaw all aspects of warehouse operations, including receiving, storage, inventory management, order fulfillment, and shipping, ensuring optimal efficiency and accuracy.",
      "Developed and implemented warehouse processes and procedures to streamline operations, improve productivity, and reduce costs.",
      "Managed a team of warehouse assistants, providing leadership, training, and guidance to ensure a high level of performance, teamwork, and employee morale.",
      "Utilized warehouse management systems to monitor inventory levels and conduct regular audits to ensure accurate stock counts and minimize discrepancies.",
      "Collaborated with cross-functional teams, including purchasing, production, and customer service, to align warehouse activities with overall business objectives and customer requirements.",
      "Evaluated and optimized warehouse layout and storage configurations to maximize space utilization and facilitate efficient picking and packing processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kyle is a great team member. He's constantly thinking and asking questions. I think where he shines on a team, is keeping spirits up and encouraging every team member.",
    name: "Luke Smith",
    designation: "Data Scientist",
    company: "NASA",
    image: "https://ca.slack-edge.com/T019E7FNWLV-U04F8E6G93Q-114b5a84d210-512",
  },
  {
    testimonial:
      "Along with his technical and analytical strengths, Kyle has demonstrated a tremendous willingness to help others.",
    name: "Ben Langhinrichs",
    designation: "Instructor",
    company: "Tech Elevator",
    image: "https://ca.slack-edge.com/T019E7FNWLV-U02QSGF40Q5-19ff64e15ec0-512",
  },
  {
    testimonial: "Kyle goes from 0 to 100, real quick",
    name: "Drake",
    designation: "Rap Superstar",
    company: "Young Money Entertainment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetH6P1Fiakfox1EyyirfeS3qTz3qdfOljmA&usqp=CAU",
  },
];

const projects = [
  {
    name: "Beat Lab",
    description:
      "Web-based application built using C#, .NET, Vue.js, and SQLite, which allows users to play sample sets of various sounds with reactive animations from select instruments to record in real time.",
    tags: [
      {
        name: "Vuetify",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: "/beatLab.png",
    source_code_link: "https://github.com/kyleloudin/drum-machine",
  },
  {
    name: "Card-Shark",
    description:
      "Web application where players can choose the number of decks to play with, keep a record of their win/loss percentage, and measure their card counting accuracy while playing blackjack against an animated virtual dealer.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: "/cardShark.png",
    source_code_link: "https://github.com/kyleloudin/card-shark",
  },
  {
    name: "Pet Play-date",
    description:
      "Using Java, Vue.js, SQL, and RESTful API’s, four programmers and I developed a dynamic web application where users can view pet and user profiles based on the characteristics of their choosing. They then can view pet-friendly locations in their areas and securely communicate between themselves to create and schedule a playdate for their favorite animals.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: "/petPlaydate.png",
    source_code_link: "https://github.com/kyleloudin/pet-playdate",
  },
];

export { services, technologies, experiences, testimonials, projects };

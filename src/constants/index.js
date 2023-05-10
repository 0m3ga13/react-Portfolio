import {
  developer,
  logo,
  engineer,
  design,
  content,
  web,
  github,
  menu,
  close,
  vic,
  cloudview,
  cosider,
  portfolio,
  ecommerce,
  bicyx,
  cominox,
  facereco,
  thisportfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Designer",
    icon: design,
  },
  {
    title: "Polytechnic Engineer",
    icon: engineer,
  },
  {
    title: "Content Creator",
    icon: content,
  },
];



const experiences = [
  {
    title: "Content Operations Specialitst",
    company_name: "CloudView",
    icon: cloudview,
    iconBg: "#ffff",
    date: "March 2022 - April 2023",
    points: [
      "Monitoring breaking news and trending topics, sending daily push notications based on user behavior and location, and working in both Algerian and Egyptian markets to ensure timely and relevant updates.",
      "Providing continuous feedback on UX/UI to improve Phoenix Browser, with over 105 feedback submissions and feature suggestions.",
      "Sourcing, editing, and publishing high-quality articles to enhance the user experience of Phoenix Browser.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Engineer Intern",
    company_name: "Cosider Carrieres",
    icon: cosider,
    iconBg: "#ffff",
    date: "March 2020 - November 2020",
    points: [
      "Conducted a comprehensive study on mining systems, with a focus on analyzing various parameters and identifying optimal techniques and technological processes.",
      "Developed a project plan and scope for the extraction of granitic blocks from the Tesnou1 deposit, taking into account the geological conditions of the area..",
      "Estimated all necessary resources and costs to ensure project success.",
      "Demonstrated prociency in project management, research, and analysis, as well as an understanding of mining systems and related technologies.",
    ],
  },

  {
    title: "Head of Trainings Department",
    company_name: "El Maarifa Scientic Association",
    icon: vic,
    iconBg: "#ffff",
    date: "December 2018 - January 2020",
    points: [
      "Established and trained a new department structure.",
      "Led a team of 30+ members to organize 20+ successful trainings in less than a year.",
      "Contributed to dening annual projects plan, club charter, and vision at the committee board level.",
    ],
  },

 
];

const Certifications = [
  {
    Certificate: "Green Digital SKills",
    name: "Inco Academy",
    date: "May 2023",
    link: "https://drive.google.com/file/d/1GaR-CJ8OXFe4sPWjxGUg1Ztr0RzlCxDN/view",
    image: "https://media.licdn.com/dms/image/C4D0BAQFMt84PE2XTZQ/company-logo_100_100/0/1632400265497?e=1691625600&v=beta&t=5t55NYl8pmI7gr-o6GZS1R5uSGJcBcTTWjM-0au9kOQ",
  },
  {
    Certificate: "MongoDB CRUD Operations in Node.js",
    name: "MongoDB",
    date: "Feb 2023",
    link: "https://learn.mongodb.com/c/WqJcVWwYR6myENF1Ldjwlw",
    image: "https://media.licdn.com/dms/image/C4D0BAQFKe8PwqzyHyA/company-logo_100_100/0/1635171226731?e=1691625600&v=beta&t=-fzlqJNxC9xq3APXdGZiU6WBu3A8UGckNWFTh8jQy-8",
  },
  {
    Certificate: "Engineer Data in Google Cloud",
    name: "Google",
    date: "Nov 2021",
    link: "https://www.cloudskillsboost.google/public_profiles/97bd06de-1b77-4092-bca1-761de2051cef/badges/1547971",
    image: "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1691625600&v=beta&t=ojOlRYJ5Vr9-mUwtTZESChd4QFw4Mu6EkTNPkfCvSXg",
  },
  {
    Certificate: "Neural Networks and Deep Learning",
    name: "Coursera",
    date: "Oct 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/AW3VG2GBU3AV",
    image: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1691625600&v=beta&t=wn0qr7AHO97oXKDx-DyyNcdnUJHzGcOgQtR6qU9f55Q",
  },
  {
    Certificate: "Initiating and Planning Projects",
    name: "Coursera",
    date: "Aug 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/5EKE5VQY88MC",
    image: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1691625600&v=beta&t=wn0qr7AHO97oXKDx-DyyNcdnUJHzGcOgQtR6qU9f55Q",
  },
  {
    Certificate: "Short Term Mine Planning",
    name: "Afrimine",
    date: "Aug 2020",
    link: "https://drive.google.com/file/d/1l04_q8Jtj6XJDlzlNCgJmy1ldr_9EFZG/view",
    image: "https://media.licdn.com/dms/image/C4E0BAQGLsnVD_VQqcw/company-logo_100_100/0/1638391643154?e=1691625600&v=beta&t=5OiVrzQP_bpPXnMlyf94fiEEWuzwwS9mUCbfTAaCyo8",
  },




];

const projects = [
  {
    name: "Ecommerce website",
    description:
      "I created a responsive eCommerce website using Vue.js and Tailwind CSS, with a dark mode and dynamic animations, showcasing my front-end development skills.",
    tags: [
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/0m3ga13/Ecommerce-Website",
  },
  {
    name: "Bicy-x",
    description:
      "I developed a bicycle purchasing website using React and Three.js. The website's interface is user-friendly, and Three.js was utilized for 3D implementation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bicyx,
    source_code_link: "https://github.com/0m3ga13/Bicy-x",
  },
  {
    name: "Company Website",
    description:
      "I built a dynamic company website with MEVN stack and REST API, utilizing interactive front-end design and secure data storage with Mongoose.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
    ],
    image: cominox,
    source_code_link: "https://github.com/0m3ga13/cominox/",
  },
  {
    name: "Vue.JS Portfolio",
    description:
      "I created a portfolio website utilizing Vue.js and Tailwind CSS, demonstrating my proficiency in front-end web development and design. ",
    tags: [
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "Taiwlind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/0m3ga13/My-Portfolio",
  },
  {
    name: "Video Face Recognition",
    description:
      "I developed a Python application using OpenCV and face recognition to extract and store faces found in a video. OpenCV was used to analyze frames and detect face.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: facereco,
    source_code_link: "https://github.com/0m3ga13/Face-recognition",
  },
  {
    name: "React Portfolio",
    description:
      "I created a motion-rich website with React and Tailwind CSS, showcasing my front-end skills with responsive design and intuitive interface.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: thisportfolio,
    source_code_link: "https://github.com/0m3ga13/",
  },
];

export { services, experiences, Certifications, projects };

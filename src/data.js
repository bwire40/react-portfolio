/* eslint-disable import/no-anonymous-default-export */
import IMG1 from "./assets/rps.png";
import IMG7 from "./assets/gemini clone.png";
import IMG2 from "./assets/cms.png";
import IMG3 from "./assets/response.png";
import IMG4 from "./assets/meme.png";
import IMG5 from "./assets/travel.png";
import IMG6 from "./assets/weather.png";
import IMG8 from "./assets/petshop.png";
import IMG9 from "./assets/movieland.png";
import IMG10 from "./assets/portfolio.png";
import karimi from "./assets/karimi.png";
import Wanyama from "./assets/kevin.png";
import Kevin from "./assets/kevin1.jpg";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";
const data = {
  skillsFront: [
    {
      id: 1,
      title: "HTML/CSS",
      status: "Experienced",
    },
    {
      id: 2,
      title: "JavaScript",
      status: "Intermediate",
    },
    {
      id: 3,
      title: "React",
      status: "Intermediate",
    },
    {
      id: 4,
      title: "Bootstrap",
      status: "Experienced",
    },
    {
      id: 5,
      title: "Tailwind",
      status: "Intermediate",
    },
  ],
  skillsBack: [
    {
      id: 1,
      title: "PHP",
      status: "Intermediate",
    },

    {
      id: 2,
      title: "Node JS",
      status: "Intermediate",
    },
    {
      id: 3,
      title: "Firebase",
      status: "Intermediate",
    },
    {
      id: 4,
      title: "MySQL",
      status: "Intermediate",
    },
    {
      id: 5,
      title: "Mongo DB",
      status: "Intermediate",
    },
    {
      id: 6,
      title: "Laravel",
      status: "Intermediate",
    },
  ],
  experience: [
    {
      id: 1,
      icon: <BsAward className="about--icon" />,
      title: "Experience",
      detail: "4+ working and learning years",
    },
    {
      id: 2,
      icon: <FiUsers className="about--icon" />,
      title: "Clients",
      detail: "10+ clients",
    },
    {
      id: 3,
      icon: <MdOutlineFolderSpecial className="about--icon" />,
      title: "Projects",
      detail: "15+ Projects on my Github",
    },
  ],
  services: [
    {
      id: 1,
      service: "Web Design",
      details:
        "I offer web development services. From the Design phase to the development of the website and the hosting.",
    },
    {
      id: 2,
      service: "UX/UI design",
      details:
        "I offer UX/UI design for your projects improving user experience, productivity and profits. ",
    },
    {
      id: 3,
      service: "Digital Marketing",
      details:
        "I also offer you an opportunity to market your products digitally",
    },
  ],
  projects: [
    {
      id: 10,
      image: IMG10,
      title: "Modern Portfolio",
      description:
        "Using the latest technologies, the above portfolio website is in development, to be completed soon.",
      gitLink: "#",
      demoLink: "https://www.emmanuelbwire.uk/",
    },
    {
      id: 9,
      image: IMG9,
      title: "MovieLand",
      description:
        "Movies websites using a movies API and react. The idea behind it is to showcase the simple yet elegant design.",
      gitLink: "https://github.com/bwire40/pet-shop-laravel",
      demoLink: "https://movieland-five-xi.vercel.app/",
    },
    {
      id: 8,
      image: IMG8,
      title: "PetMe Shop App",
      description:
        "Created a fullstack ecommerce PetShop using Laravel and MySQL.",
      gitLink: "https://github.com/bwire40/pet-shop-laravel",
      demoLink: "#",
    },
    {
      id: 7,
      image: IMG7,
      title: "Gemini Clone Web-app",
      description:
        "Using an gemini API from gogle AI, this application is able to display similar features and functions of the original Gemini App.",
      gitLink: "https://github.com/bwire40/gemini-clone-app",
      demoLink: "https://gemini-clone-green-xi.vercel.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Weather App",
      description:
        "Using an API from weatherapi, this application is able to display weather information at from a searched location.",
      gitLink: "https://github.com/bwire40/weather-app",
      demoLink: "https://myweather-api-app.vercel.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "Travel Journal React",
      description: "A Basic React Application with Tailwind CSS.",
      gitLink: "https://github.com/bwire40/my-travel-journal-app",
      demoLink: "http://my-travel-journal-app.vercel.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Meme generator App",
      description:
        "I was able to try out this react meme generator application using an external API.",
      gitLink: "https://github.com/bwire40/meme-generator-app",
      demoLink: "https://meme-generator-app-two.vercel.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Web Tempate",
      description:
        "This template has been created using React and CSS3. It is a full-fledged application ready to use for commercial purposes. The application showcases the mastery of React Js fundamentals together with CSS3 and Tailwind CSS. The web template is also responsive, hence can be used on any device.",
      gitLink: "https://github.com/bwire40/Responsive-React-app",
      demoLink: "https://responsive-react-app-roan.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "CMS Blog",
      description:
        "This CMS blog was created using PHP and MySQL. The application has user previlleges with the admin as the super-user. Users have the ability to comment on posts posted by the admin.",
      gitLink: "https://github.com/bwire40/cms-blog",
      demoLink: "#",
    },
    {
      id: 1,
      image: IMG1,
      title: "Simple RPS Game",
      description:
        "This is a simple Rock Paper Scissors games implemented using HTML CSS and JavaScript.",
      gitLink: "https://github.com/bwire40/RPS-GAME",
      demoLink: "https://rps-game-vert.vercel.app/",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Karimi",
      image: karimi,
      testimony: "I particularly loved his design on my portfolio.",
    },
    {
      id: 2,
      name: "Wanyama Njoli",
      image: Wanyama,
      testimony: "Work well done. Services were timely and efficient.",
    },
    {
      id: 3,
      name: "Kevin",
      image: Kevin,
      testimony:
        "Worked fast, the result was outstanding. The design is simple but very attractive.",
    },
  ],
  contacts: [
    {
      id: 1,
      title: "Email",
      detail: "emmanuelbwire80@gmail.com",
      icon: <MdEmail />,
      link: "mailto:emmanuelbwire80@gmail.com",
    },
    {
      id: 2,
      title: "Whatsapp",
      detail: "+254742923458",
      icon: <BsWhatsapp />,
      link: "https://api.whatsapp.com/send?phone+254742923458",
    },
  ],
};

export default data;

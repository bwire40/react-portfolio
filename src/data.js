/* eslint-disable import/no-anonymous-default-export */
import IMG1 from "./assets/rps.png";
import IMG2 from "./assets/cms.jpg";
import IMG3 from "./assets/response.png";
import IMG4 from "./assets/meme.jpg";
import IMG5 from "./assets/travel.png";
import karimi from "./assets/karimi.png";
import Wanyama from "./assets/kevin.png";
import Kevin from "./assets/kevin1.jpg";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";
const data = {
  experience: [
    {
      id: 1,
      icon: <BsAward className="about--icon" />,
      title: "Experience",
      detail: "3+ working years",
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
      detail: "15+ Projects",
    },
  ],
  services: [
    {
      id: 1,
      service: "Web Design",
      details:
        "I offer web development services. From the development of the website to the hosting.",
    },
    {
      id: 2,
      service: "UX/UI design",
      details:
        "I offer UX/UI design for your projects increasing productivity and profits. ",
    },
    {
      id: 1,
      service: "Digital Marketing",
      details:
        "I also offer you an opportunity to market your products digitally",
    },
  ],
  projects: [
    {
      id: 1,
      image: IMG1,
      title: "Simple RPS Game",
      gitLink: "https://github.com/bwire40/RPS-GAME",
      demoLink: "https://rps-game-vert.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "CMS Blog",
      gitLink: "https://github.com/bwire40/cms-blog",
      demoLink: "#",
    },
    {
      id: 3,
      image: IMG3,
      title: "React resposive App",
      gitLink: "https://github.com/bwire40/Responsive-React-app",
      demoLink: "https://responsive-react-app-roan.vercel.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Meme generator App",
      gitLink: "https://github.com/bwire40/meme-generator-app",
      demoLink: "https://meme-generator-app-two.vercel.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "Travel Journal React",
      gitLink: "https://github.com/bwire40/my-travel-journal-app",
      demoLink: "http://my-travel-journal-app.vercel.app/",
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

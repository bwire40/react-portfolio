/* eslint-disable import/no-anonymous-default-export */
import IMG1 from "./assets/me.jpeg";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const data = {
  projects: [
    {
      id: 1,
      image: IMG1,
      title: "React resposive App",
      gitLink: "https://github.com",
      demoLink: "#",
    },
    {
      id: 2,
      image: IMG1,
      title: "React resposive App",
      gitLink: "#",
      demoLink: "#",
    },
    {
      id: 3,
      image: IMG1,
      title: "React resposive App",
      gitLink: "#",
      demoLink: "#",
    },
    {
      id: 4,
      image: IMG1,
      title: "React resposive App",
      gitLink: "#",
      demoLink: "#",
    },
    {
      id: 5,
      image: IMG1,
      title: "React resposive App",
      gitLink: "#",
      demoLink: "#",
    },
    {
      id: 6,
      image: IMG1,
      title: "React resposive App",
      gitLink: "#",
      demoLink: "#",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "client_name",
      image: IMG1,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet lacinia felis, a maximus augue. Proin dapibus bibendum turpis, a aliquam lacus feugiat id",
    },
    {
      id: 2,
      name: "client_name",
      image: IMG1,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet lacinia felis, a maximus augue. Proin dapibus bibendum turpis, a aliquam lacus feugiat id",
    },
    {
      id: 3,
      name: "client_name",
      image: IMG1,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet lacinia felis, a maximus augue. Proin dapibus bibendum turpis, a aliquam lacus feugiat id",
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

import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

  export const Navigation = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Tags", link: "/tags" }
  ];

  export const SocialMediaLinks = [
    {
      label: "instagram",
      link: "https://www.instagram.com/peresramosmarcos",
      SocialIcon: FaInstagram
    },
    { label: "github", link: "https://github.com/prmarcos", SocialIcon: FaGithub },
    { label: "email", link: "mailto:marcosperes.contato@gmail.com", SocialIcon: CiMail },
  ];

  export const homePage_WelcomeMessage = {
    headline:"Seja Bem vindo!",
    message:"Me chamo Marcos e o objetivo desse projeto é documentar e compartilhar meu processo de crescimento na área de programação. Você encontrará uma série de projetos pessoais, exercícios e artigos que refletem minha evolução e as técnicas que venho aprimorando, com foco especial no back-end utilizando Node.js."
  }


  export const layout_footerMessage = `${new Date().getFullYear()} © Marcos Peres Ramos. Todos os direitos reservados.`
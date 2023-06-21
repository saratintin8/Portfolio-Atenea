import chakraImage from "../../Images/Techs/chakra.png";
import reactBootstrapImage from "../../Images/Techs/react-bootstrap.png";
import reactRouterdomImage from "../../Images/Techs/react-router-dom.png";
import sassImage from "../../Images/Techs/sass.png";
import reactImage from "../../Images/Techs/react.png";
import semanticImage from "../../Images/Techs/semantic.png";
import styledImage from "../../Images/Techs/styled-logo.png";
import viteImage from "../../Images/Techs/vite.png";
import cssImage from "../../Images/Techs/css.png";
import simpsonProject from "../../Images/Projects/simpson.jpeg";
import dynamicFormProject from "../../Images/Projects/dynamic.jpeg";
import gasolineraProject from "../../Images/Projects/gasolinera.jpeg";
import marvelProject from "../../Images/Projects/marvel.jpeg";
import rickMorty from "../../Images/Projects/rick-morty.jpeg";
import tareasProject from "../../Images/Projects/todo.jpeg";

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            { name: "React", src: reactImage },
            { name: "CSS", src: cssImage },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Todo list",
        image: tareasProject,
        techs: [
            { name: "React", src: reactImage },
            { name: "Semantic UI React", src: semanticImage },
        ],
        description: "Application created with React JS and to make a list of tasks where you can add or remove it.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            { name: "React JS", src: reactImage },
            { name: "Styled Components", src: styledImage },
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            { name: "React", src: reactImage },
            { name: "React Router", src: reactRouterdomImage },
            { name: "Sass", src: sassImage },
            { name: "Semantic", src: semanticImage },
        ],
        description: "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            { name: "React JS", src: reactImage },
            { name: "React Bootstrap", src: reactBootstrapImage },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "Chakra", src: chakraImage },
            { name: "React Router DOM", src: reactRouterdomImage },
        ],
        description: "Application created with Vite where you can save the information and see it on a summary.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website: "#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },

];
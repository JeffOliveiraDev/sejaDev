import kenzieBurguer from "../../../../../assets/projects/burguerkenzie2.png";
import kenzieHub from "../../../../../assets/projects/kenziehub.png";
import portfolio from "../../../../../assets/projects/portfólio.png";

export const myProjects = [
  {
    name: "Portfólio",
    description:
      "Meu primeiro Portfólio criado no segundo módulo do curso, utilizei TypeScript e StyledComponents, possui várias animações",
    link: "https://jeff-dev-portfolio.vercel.app",
    image: portfolio,
    linguagem: "TypeScript",
  },
  {
    name: "Kenzie Burguer",
    description:
      "Projeto da Kenzie Burguer feito no início do curso visando treinar alguns conceitos, esse projeto emula uma loja de hambúrgueres com página de cadastro e login, utilizando API.",
    link: "https://kenzieburguertypescript.vercel.app",
    image: kenzieBurguer,
    linguagem: "TypeScript",
  },
  {
    name: "Kenzie Hub",
    description:
      "Projeto feito com react, esse projeto emula um contexto de usuário onde é possível adicionar e remover quais conhecimentos o usuário possui com página de cadastro e login, utilizando API.",
    link: "https://kenziehub-seven-beta.vercel.app",
    image: kenzieHub,
    linguagem: "React",
  },
];

// <li className={observed === true ? styles.card : styles.boxHidden}>
//             <Image src={burguer} alt="burguer" />
//             <div className={styles.cardTextBtn}>
//               <h3>Kenzie Burguer</h3>
//               <p>
//                 Projeto da Kenzie Burguer, refeito com TypeScript e refatorado,
//                 esse projeto emula uma loja de hambúrgueres com página de
//                 cadastro e login, utilizando API.
//               </p>
//             </div>
//             <button>Visitar</button>
//           </li>

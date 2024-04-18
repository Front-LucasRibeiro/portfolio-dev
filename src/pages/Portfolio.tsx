import { useEffect, useState } from "react";
import Filtro from "../components/Filtro";
import ListCards from "../components/ListCards";
import { Projeto } from "../components/Shared/IProjeto";

type ListaProjetos = Projeto[];

const skills: string[] = [
  'CSS',
  'HTML',
  'Javascript',
  'JQuery',
  'ReactJS',
  'Sass',
  'NodeJS',
  'API',
  'MySQL',
  'Nginx',
  'PHP',
  'Wordpress',
  'WooCommerce',
  'GulpJS',
  'Typescript',
  'Tailwind',
  'Vite',
  'Webpack',
  'Vanilla JavaScript',
  'VueJS'
];

const projetos: Projeto[] = [
  {
    nome: "Portfólio Dev",
    descricao: "Portfólio para mostrar os meus projetos pessoais",
    tags: ['Vite', 'ReactJS', 'Sass/scss', 'Tailwind', 'Typescript'],
    github: "https://github.com/Front-LucasRibeiro/portfolio-dev",
    private: false,
    linkProjeto: "https://portfolio-dev-drab.vercel.app/",
    data: "17/04/2024",
    imagem: "/portfolio.jpg"
  },
  {
    nome: "Agendar Aqui",
    descricao: "Sistema de Agendamento com banco de dados em MySql, Back-end em NodeJS",
    tags: ['ReactJS', 'Sass/scss', 'NodeJS', 'API', 'MySql', 'Nginx', 'VPS', 'Nodemailer'],
    github: "https://github.com/Front-LucasRibeiro/barber-shop",
    private: true,
    linkProjeto: "https://admin.agendaraqui.com.br/",
    data: "04/04/2024",
    imagem: "/agendar-aqui.jpg"
  },
  {
    nome: "Página de Categoria",
    descricao: "Simulando o desenvolvimento de filtro e página de categoria de um e-commerce.",
    tags: ['GulpJS', 'Sass/scss', 'Typescript', 'Webpack', 'HTML', 'Javascript', 'Vanilla JavaScript', 'API'],
    github: "https://github.com/Front-LucasRibeiro/desenvolvedor-cadastra",
    private: false,
    linkProjeto: "https://front-lucasribeiro.github.io/page-category/dist/index.html",
    data: "22/03/2024",
    imagem: "/category-page.jpg"
  },
  {
    nome: "Home Page",
    descricao: "Simulando home page de um e-commerce.",
    tags: ['GulpJS', 'Sass/scss', 'HTML', 'Javascript', 'JQuery'],
    github: "https://github.com/Front-LucasRibeiro/teste-maeztra-lucas-maranho",
    private: false,
    linkProjeto: "https://front-lucasribeiro.github.io/teste-maeztra-lucas-maranho/",
    data: "13/03/2024",
    imagem: "/home-page.jpg"
  },
  {
    nome: "Sistema de Cadastro",
    descricao: "Sistema de Cadastro de produtos e associação de produtos aos clientes.",
    tags: ['VueJS', 'Sass/scss'],
    github: "https://github.com/Front-LucasRibeiro/cadastro-data-stone",
    private: false,
    linkProjeto: "https://cadastro-data-stone.vercel.app/cadastro-clientes",
    data: "04/03/2024",
    imagem: "/sistema-cadastro.jpg"
  },
  {
    nome: "Camisetas Mix",
    descricao: "Loja virtual utilizando Wordpress e plugin WooCommerce",
    tags: ['PHP', 'WooCommerce', 'Wordpress', 'Sass/Scss', 'Javascript', 'JQuery', 'GulpJS'],
    github: "https://github.com/Front-LucasRibeiro/camisetas-mix",
    private: true,
    linkProjeto: "https://camisetasmix.com.br/",
    data: "01/02/2024",
    imagem: "/camisetas-mix.jpg"
  },

];

const Portfolio: React.FC = () => {
  const [listaProjetos, setListaProjetos] = useState<ListaProjetos>(projetos);
  const [term, setTerm] = useState<string>('');


  // Função de retorno de chamada para receber os dados do filho
  const termoFilter = (dados: string): void => {
    setTerm(dados);
  };

  useEffect(() => {

    const listaFitered = projetos.map(item => {
      const termoLowerCase = term.toLowerCase();
      if (item.tags.some(tag => tag.toLowerCase().includes(termoLowerCase))) {
        return item;
      } else {
        return null;
      }
    }).filter(Boolean) as Projeto[]; // removendo os elementos nulos da lista

    // se tiver tags correspondentes mostra lista filtrada, se não mostra original 
    if (listaFitered.length > 0) {
      setListaProjetos(listaFitered);
    } else {
      setListaProjetos(projetos);
    }

  }, [term])

  return (
    <>
      <Filtro skills={skills} termoFilter={termoFilter} />
      <ListCards projetos={listaProjetos} />
    </>
  )
}

export default Portfolio;
import { Link } from 'react-router-dom';
import s from './styles.module.scss';

export const ListCards = () => {

  interface Projeto {
    nome: string;
    descricao: string;
    tags: string[];
    github: string;
    linkProjeto: string;
    private: boolean;
    data: string;
    imagem: string;
  }

  const projetos: Projeto[] = [
    {
      nome: "Agendar Aqui",
      descricao: "Sistema de Agendamento com banco de dados em MySql, Back-end em NodeJS",
      tags: ['ReactJS', 'Sass/scss', 'NodeJS', 'Api', 'MySql', 'Nginx', 'VPS', 'Nodemailer'],
      github: "https://github.com/Front-LucasRibeiro/barber-shop",
      private: true,
      linkProjeto: "https://admin.agendaraqui.com.br/",
      data: "04/04/2024",
      imagem: "/agendar-aqui.jpg"
    },
    {
      nome: "Camisetas Mix",
      descricao: "Loja virtual utilizando Wordpress e plugin WooCommerce",
      tags: ['PHP', 'WooCommerce', 'Wordpress', 'Sass/Scss', 'Javascript', 'JQuery', 'GulpJS'],
      github: "https://github.com/Front-LucasRibeiro/camisetas-mix",
      private: false,
      linkProjeto: "https://camisetasmix.com.br/",
      data: "01/02/2024",
      imagem: "/camisetas-mix.jpg"
    },
  ];


  return (
    <ul className={`${s.card} mt-12 grid gap-12 mb-14`}>
      {projetos.map((projeto, index) => {
        return (
          <li key={index} className="w-[98%] rounded overflow-hidden shadow-lg gap-10">
            <picture className={s.imageProject}>
              <img className="w-full h-[100px]" src={projeto.imagem} alt="Sunset in the mountains" />
            </picture>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{projeto.nome}</div>
              <p className="text-gray-700 text-base h-[67px]">
                <time>
                  {projeto.descricao}
                </time>
              </p>
              <p className="text-gray-700 text-base mt-4">{projeto.data}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {
                projeto.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tag}
                    </span>
                  )
                })
              }
            </div>

            {
              projeto.private &&
              <Link to={projeto.github} target="_blank" rel="noopener noreferrer" className={`flex align-center justify-center w-11/12 block m-auto mb-4 mt-4 bg-transparent hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded ${s.btn}`}>
                <span className={`${s.icon} bg-[url('/github.png')] bg-no-repeat`}></span>
                GitHub Privado
              </Link>
            } 

            {/* se github não for privado:  */}
            {
              !projeto.private &&
              <Link to={projeto.github} target="_blank" rel="noopener noreferrer" className={`flex align-center justify-center w-11/12 block m-auto mb-4 mt-4 bg-transparent hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded ${s.btn}`}>
                <span className={`${s.icon} bg-[url('/github.png')] bg-no-repeat`}></span>
                GitHub
              </Link>
            }


            <Link to={projeto.linkProjeto} target="_blank" rel="noopener noreferrer" className={`flex align-center justify-center w-11/12 block m-auto mb-4 mt-4 bg-transparent hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded ${s.btn}`}>
              <span className={`${s.icon} bg-[url('/deploy.png')] bg-no-repeat`}></span> Ver Projeto
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListCards;
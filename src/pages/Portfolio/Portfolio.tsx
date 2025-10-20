import { useEffect, useState } from "react";
import Filtro from "../../components/Filtro";
import ListCards from "../../components/ListCards";
import { Projeto } from "../../components/Shared/IProjeto";
import { projetos } from "./data";
import { skills } from "./dataSkills";

type ListaProjetos = Projeto[];

const Portfolio: React.FC = () => {
  const [listaProjetos, setListaProjetos] = useState<ListaProjetos>(projetos);
  const [term, setTerm] = useState<string>("");

  // Função de retorno de chamada para receber os dados do filho
  const termoFilter = (dados: string): void => {
    setTerm(dados);
  };

  useEffect(() => {
    const listaFitered = projetos
      .map((item) => {
        const termoLowerCase = term.toLowerCase();
        if (
          item.tags.some((tag) => tag.toLowerCase().includes(termoLowerCase))
        ) {
          return item;
        } else {
          return null;
        }
      })
      .filter(Boolean) as Projeto[]; // removendo os elementos nulos da lista

    // se tiver tags correspondentes mostra lista filtrada, se não mostra original
    if (listaFitered.length > 0) {
      setListaProjetos(listaFitered);
    } else {
      setListaProjetos(projetos);
    }
  }, [term]);

  return (
    <>
      <Filtro skills={skills} termoFilter={termoFilter} />
      <ListCards projetos={listaProjetos} />
    </>
  );
};

export default Portfolio;

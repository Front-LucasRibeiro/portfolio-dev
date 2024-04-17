
import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';

interface FiltroProps {
  skills: string[];
  termoFilter: (dados: string) => void;
}


const Filtro:React.FC<FiltroProps> = ({skills, termoFilter}) => {
  
  const skillsOrdenadas = skills.sort((a, b) => a.localeCompare(b));

  const filter = (e:React.ChangeEvent<HTMLSelectElement>): void => {
    termoFilter(e.target.value)
  }

  return(
    <section>
      <form className="max-w-sm m-auto flex flex-col mt-10">
        <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-1">Filtrar por Habilidades Técnicas:</label>
        <select id="skills" name="skills" className={`bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-300 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300 ${s.selectFilter}`} onChange={(e) => filter(e)}>
          <option value="">Todos</option>
          {
            skillsOrdenadas.map((skill, index) => {
              return <option key={index} value={skill}>{skill}</option>
            })
          }
        </select>
      </form>
    </section>
  )
}

export default Filtro;
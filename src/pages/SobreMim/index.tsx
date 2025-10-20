import s from "./styles.module.scss";

const AboutMe = () => {
  return (
    <section>
      <div className={s.topo}>
        <div className={s.topo__foto}>
          <img src="/lucas-maranho-276.jpg" alt="Lucas Lima Ribeiro Maranho" />
        </div>
        <div className={s.topo__sobre}>
          <h1>Desenvolvedor Full Stack | Especialista em E-commerce, React.js, Typescript, Node.js & WordPress</h1>

          <h2>Lucas Maranho</h2>

          <p>
            Desenvolvedor web, trabalho com desenvolvimento desde 2017, tenho me
            especializado na criação de sistemas, aplicativos mobile, lojas
            virtuais e blogs dinâmicos. Experiência em frameworks como WordPress
            e plataformas de e-commerce Tray, TrayCorp FBits/Wake, NuvemShop,
            Jet, VTEX, LINX, WooCommerce. Comprometido com a excelência e
            atualizado com as últimas tendências tecnológicas.
          </p>

          <h2>Habilidades técnicas</h2>

          <div className={s.skillsContainer}>
            <div className={s.skillsCategory}>
              <h3>Front-end</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>AngularJS</li>
                <li>Bootstrap</li>
                <li>ShadCn UI</li>
                <li>Chakra UI</li>
                <li>Tailwind</li>
                <li>Material UI</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className={s.skillsCategory}>
              <h3>Back-end</h3>
              <ul>
                <li>NodeJS</li>
                <li>PHP</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Rest API's</li>
              </ul>
            </div>
            <div className={s.skillsCategory}>
              <h3>DevOps</h3>
              <ul>
                <li>AWS</li>
                <li>Docker</li>
                <li>Nginx</li>
                <li>Gulp</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div className={s.skillsCategory}>
              <h3>Design</h3>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
            <div className={s.skillsCategory}>
              <h3>Testes e Qualidade</h3>
              <ul>
                <li>Jest</li>
                <li>Jasmine</li>
              </ul>
            </div>
          </div>

          <h2>Contato</h2>

          <ul className={s.contato}>
            <li className={s.contato__email}>
              <a href="mailto:lksribeiro2014@gmail.com" target="_blank">
                lksribeiro2014@gmail.com
              </a>
            </li>
            <li className={s.contato__linkedin}>
              <a
                href="https://www.linkedin.com/in/devlucasribeiro/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className={s.contato__whatsapp}>
              <a
                href="https://api.whatsapp.com/send?phone=5511964914546"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li className={s.contato__github}>
              <a href="https://github.com/Front-LucasRibeiro" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

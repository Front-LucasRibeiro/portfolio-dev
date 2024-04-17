import s from './styles.module.scss';

const SobreMim = () => {
  return (
    <section>
      <div className={s.topo}>
        <div className={s.topo__foto}>
          <img src="/lucas-maranho.jpg" alt="Lucas Lima Ribeiro Maranho" />
        </div>
        <div className={s.topo__sobre}>
          <h1>Desenvolvedor</h1>

          <h2>Lucas Maranho</h2>

          <p>
            Desenvolvedor web, trabalho com desenvolvimento desde 2016, tenho me especializado na criação de sistemas, aplicativos mobile, lojas virtuais e blogs dinâmicos. Experiência em frameworks como WordPress e plataformas de e-commerce Tray, TrayCorp FBits/Wake, NuvemShop, Jet, VTEX, LINX, WooCommerce. Comprometido com a excelência e atualizado com as últimas tendências tecnológicas.
          </p>

          <h2>Habilidades técnicas</h2>

          <ul className={s.listaSkills}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>PHP</li>
            <li>JQuery</li>
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>WordPress</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>AngularJS</li>
            <li>Git</li>
            <li>Github</li>
            <li>Git Flow</li>
            <li>SVN</li>
            <li>BitBucket</li>
            <li>GitLab</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Foundation</li>
            <li>Material Ul</li>
            <li>Photoshop</li>
            <li>XNView</li>
            <li>Figma</li>
            <li>Illustrator</li>
            <li>Sass</li>
            <li>Handlebars</li>
            <li>Pug</li>
            <li>Marko</li>
            <li>EJS</li>
            <li>API's</li>
            <li>JSON</li>
            <li>XML</li>
            <li>SEO</li>
            <li>Email Marketing</li>
            <li>NodeJS</li>
            <li>Gulp</li>
            <li>Webpack</li>
            <li>Express</li>
            <li>Agile</li>
            <li>GTM</li>
            <li>e-commerce</li>
            <li>DevOps</li>
            <li>NextJS</li>
            <li>Jasmine</li>
            <li>Jest</li>
            <li>AWS</li>
            <li>Google Cloud</li>
            <li>Azure</li>
            <li>Nginx</li>
            <li>Tailwind</li>
          </ul>


          <h2>Contato</h2>

          <ul className={s.contato}>
            <li className={s.contato__email}>
              <a href="mailto:lksribeiro2014@gmail.com" target='_blank'>lksribeiro2014@gmail.com</a>
            </li>
            <li className={s.contato__linkedin}><a href="https://www.linkedin.com/in/devlucasribeiro/" target='_blank'>LinkedIn</a></li>
            <li className={s.contato__whatsapp}><a href="https://api.whatsapp.com/send?phone=5511964914546" target='_blank'>WhatsApp</a></li>
            <li className={s.contato__github}><a href="https://github.com/Front-LucasRibeiro" target='_blank'>GitHub</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SobreMim;
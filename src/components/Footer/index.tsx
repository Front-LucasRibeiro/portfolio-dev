import s from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>Lucas Maranho - CNPJ: 37.810.374/0001-82 - Todos os direitos reservados.</p>
      <ul className={s.contato}>
        <li className={s.contato__email}>
          <a href="mailto:lksribeiro2014@gmail.com" target='_blank'>lksribeiro2014@gmail.com</a>
        </li>
        <li className={s.contato__linkedin}><a href="https://www.linkedin.com/in/devlucasribeiro/" target='_blank'>LinkedIn</a></li>
        <li className={s.contato__whatsapp}><a href="https://api.whatsapp.com/send?phone=5511964914546" target='_blank'>WhatsApp</a></li>
        <li className={s.contato__github}><a href="https://github.com/Front-LucasRibeiro" target='_blank'>GitHub</a></li>
      </ul>
    </footer>
  )
}

export default Footer;
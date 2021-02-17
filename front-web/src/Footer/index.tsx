import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as GitHubIcon } from './github.svg';

function Footer(){
  return(
    <footer className="main-footer">
      App developed during the 2º edition of DevSuperior week
      <div className="footer-icons">
        <a href="https://www.youtube.com" target="_new">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com" target="_new">
          <InstagramIcon />
        </a>
        <a href="https://github.com/opapito/dsdeliver-sds2" target="_new">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  )
}
export default Footer;
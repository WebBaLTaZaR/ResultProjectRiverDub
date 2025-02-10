import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="maxContent">
        <p className="copyright">© Все права защищены!</p>
        <Link to="https://t.me/RIVERDUB">
          <img className="imgTelegram" src="./img/telegram.svg" alt="telegram" />
        </Link>
        <Link to="https://www.youtube.com/@RIVERDUB">
          <img src="./img/youtube.svg" alt="youtube" className="imgYouTube" />
        </Link>
      </footer>
    </>
  );
}

export default Footer;

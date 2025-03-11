import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function AutorizationPage() {
  return (
    <>
      <div className="contentWrap">
        <Header />
        <div className="autorizationPrompt">
			<h3 className="autorizationTitle">Авторизация</h3>
          <div>Электронная почта</div>
          <input
            type="email"
            id="email"
            pattern=".+@example\.com"
            size="30"
            required
			placeholder="example@mail.ru"
          />
          <div>Введите пароль</div>
          <input
		  placeholder="password"
            type="password"
            id="inputPass"
            name="password"
            minlength="8"
            required
          />
          <Link to={"/"} className="fogotPass">Забыли пароль?</Link>
          <div className="lognWrap">
            <button className="button butLogin">Войти</button>
            <button className="button butSignin">Регистрация</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AutorizationPage;

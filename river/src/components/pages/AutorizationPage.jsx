import Footer from "../Footer";
import Header from "../Header";

function AutorizationPage() {
	return ( <>
	<div className="contentWrap">
		<Header/>
		<div className="autorizationPrompt">
			<div>Авторизоваться или войти</div>
		</div>
		<Footer/>
	</div>
	</> );
}

export default AutorizationPage;
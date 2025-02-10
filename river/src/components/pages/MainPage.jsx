import Footer from "../Footer";
import Header from "../Header";
import MainContent from "../MainContent";

function MainPage() {
  return (
    <>
      <div className="contentWrap">
        <Header />
        <MainContent/>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

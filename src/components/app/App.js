import './app.scss';

import Header from "../header/header";
import Banner from "../banner/banner";
import Advantages from "../advantages/advantages";
import LeadBlock from "../leadBlock/leadBlock";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Advantages />
      <LeadBlock />
      <Footer />
    </div>
  );
}

export default App;

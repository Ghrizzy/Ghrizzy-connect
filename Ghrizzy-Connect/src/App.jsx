import Header from "./Header/Header";
import Homepage from "./Home/Homepage";
import AllEvent from "./AllEvent/AllEvent";
import AutoSlider from "./AutoSlider/Autoslider";
import "./App.css";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer/Footer";

function App() {
  const { Eventinfo } = data;

  return (
    <>
      <div>
        <Header />
        <Homepage Eventinfo={Eventinfo} />
        <AutoSlider Eventinfo={Eventinfo} />
        <AllEvent Eventinfo={Eventinfo} />
        <Footer/>
      </div>
    </>
  );
}

export default App;

import Header from "./Header";
import BannerPart from "./sec_banner_part";
import CtaPart from "./sec_cta_part";
import ServicePart from "./sec_service_part";
import AboutPart from "./sec_about_part";
import OurLatestWork from "./sec_our_latest_work";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <BannerPart />
      <CtaPart />
      <ServicePart />
      <AboutPart />
      <OurLatestWork />
      <Footer />
    </div>
  );
}

export default App;

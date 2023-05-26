import './App.css';

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Banner from './BannerComponent/Banner';
import Content from './ContentComponent/Content';
import Footer from './FooterComponent/Footer';
function App() {
  return (
    <div>
      
      <Header/>

      <Nav/>

      <Banner/>

      <Routes>
        <Route path="/" element={<Content/>} ></Route>
      </Routes>

      <Footer/>


    {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default App;

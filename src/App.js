import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import ContactUsPage from './Components/ContactUsPage';
import PricingPlans from './Components/PricingPlans';
import Footer from './Components/Footer';
import InsightsPage from './Components/InsightsPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<AboutPage></AboutPage>}></Route>
        <Route path='/contactus' element={<ContactUsPage></ContactUsPage>}></Route>
        <Route path='/pricing' element={<PricingPlans></PricingPlans>}></Route>
        <Route path='/insights' element={<InsightsPage></InsightsPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

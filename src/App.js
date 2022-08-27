import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import RewardCard from './Components/Rewardcard/RewardCard';


import Footer from './Components/Footer/Footer';
import FeaturedOffers from './Components/HomepageStatic/FeaturedOffers'
import Options from './Components/HomepageStatic/Options';
import Section1 from './Components/HomepageStatic/Section1'
import Hero from './Components/Hero';

//  import { Routes } from './Routes/Routes';



function App() {
  return (
    <div className="class1" >
      <Navbar />
      <Hero/>

      <div style={{
        margin: 'auto',
        // border:"2px solid red",
        height: '350px',
        width: "100%",
        marginTop: "30px",

      }}>
        <img style={{
          margin: 'auto',
          // border:"2px solid red",
          height: '100%',
          width: "100%",

        }} src='https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh'>
        </img>

      </div>




      <Section1/>
      <Options/>
      <FeaturedOffers/>


      <RewardCard />

      <Footer />





    </div>
  );
}

export default App;

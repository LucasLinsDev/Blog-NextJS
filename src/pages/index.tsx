import React from 'react';
import Banner from '../components/Banner';
import Colunistas from '../components/Colunistas';
import Destaques from '../components/Destaques';
import Footer from '../components/Footer/footer';
import Header from '../components/Header';
import MaisRecentes from '../components/MaisRecents';
import Newsteller from '../components/Newsteller';
import Noticias from '../components/Notifcias';
const Home=()=>{
  return(
    <React.Fragment>
      <Header/>
      <Banner/>
      <Destaques/>
      <MaisRecentes/>
      <Colunistas/>
      <Newsteller/>
      <Noticias/>
      <Footer/>
    </React.Fragment>
  )
}

export default Home;
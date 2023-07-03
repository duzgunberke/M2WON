import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, Clients, Videos } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Forwarder from "./components/Forwarder";
import Update from "./components/Update";

const App = () =>{

  
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/649de8f594cf5d49dc609c3f/1h44dc0nl';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();

  return (

  <Router>
<Routes>

 <Route path="/" element={<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Videos />
        <CTA />
        <Footer />
        <Forwarder/>

        
      </div>
    </div>
  </div>
  }/>

<Route path="/login" element={<Login />}/>
<Route path="/update" element={<Update />}/>

  </Routes>
 </Router>
  )}

export default App;

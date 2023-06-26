import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, Clients, Videos } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Forwarder from "./components/Forwarder";
import Update from "./components/Update";

const App = () =>{  return (

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

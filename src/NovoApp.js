import React from 'react';
import PersonCallToAction from './CallToAction'
import Person from './person/person'
import About from './About'
import Experiences from './Experiences'
import Portfolio from './Portfolio'
import Contato from './Contato';
import Footer from './Footer';


const app = () => {
    const [portifolioState, setPortifolioState] = useState({
        jobs: []
      });
      
      return (
        <div>
            <Person></Person>
            <Header></Header>
            <About></About>
            <Experiences></Experiences>
            <Portfolio></Portfolio>
            <Contato></Contato>
            <Footer></Footer>
        </div> 
    )
}


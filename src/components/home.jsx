import React from 'react';
import Footer from './footer';
import SimpleSlider from './simpleSlider';
import '../index.css';
import '../styles/style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (  
    <React.Fragment>

        <SimpleSlider />

     {/* <img className="carousel-img" src="/images/carousel1.jpeg" /> */}
     
    <div className="jumbotron">
    <p style={{textAlign: "center"}}>Let's hear a word from some of the people who had great benefits by using BeMyTutor App.....</p> 
    
       <div className="row">
           <div className="col-3">
           <img src="/images/img_avatar2.png" className="people-img mx-auto d-block rounded-circle" />
           <h6>Linda Simpson - Web Developer</h6>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, 
               veritatis neque ipsa adipisci maiores sequi voluptates quis quia
           </p>
           </div>
           <div className="col-3">
           <img src="/images/img_avatar1.png" className="people-img mx-auto d-block rounded-circle" />
           <h6>Joey Simons - Co-founder of Itech</h6>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, 
               veritatis neque ipsa adipisci maiores sequi voluptates quis quia
           </p>
           </div>
           <div className="col-3">
           <img src="/images/img_avatar3.png" className="people-img mx-auto d-block rounded-circle" />
           <h6>John Finn - Software Engineer</h6>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, 
               veritatis neque ipsa adipisci maiores sequi voluptates quis quia
           </p>
           </div>
           <div className="col-3">
           <img src="/images/img_avatar5.png" className="people-img mx-auto d-block rounded-circle" />
           <h6>Jill Philips - Employee at Google</h6>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, 
               veritatis neque ipsa adipisci maiores sequi voluptates quis quia
           </p>
           </div>
       </div>
   </div>

    <Footer />

    </React.Fragment>
        );
}
 
export default Home;

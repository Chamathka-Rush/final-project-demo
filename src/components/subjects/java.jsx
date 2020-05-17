import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './videoPlayer';
import './subjects-style.css';
import './videoPlayer.css';


const Java = () => {
    return ( 
        <React.Fragment>
            <div className="flex-container-top">
                <div className="row">
                    <div className="col-lg-4">
                    <img className="book-icon-img" src="/images/books/icon-img.jpg" />
                    </div>

                    <div className="col-lg-5">
                    <em style={{ marginTop: '20px', textAlign: 'center', fontSize: '2.5rem' }}>---Learn Java---</em>
                    <br/>
                    <em style={{ textAlign: 'center' }}>Here are some best e-book picks for java learners...
                    Just click on the book name and the book is yours.</em>
                    </div>
                    <div className="col-lg-3">
                        <Link to="/subjects" style={{ marginLeft: '50px'}} className="btn btn-outline-success">Back</Link>
                    </div>
                </div>
            
            
           
            </div>
       
        <div className="row">
            <div className="flex-container">
                <div><img className="flex-img" src="/images/books/java1.gif"/>
                <div className="book-link">
                <a href="http://www.oreilly.com/programming/free/introducing-java-8.csp">Java 8</a> 
                <p className="text-secondary">Raoul-Gabriel Urma</p></div>
                </div>

                <div><img className="flex-img" src="/images/books/java2.gif"/>
                <div className="book-link">
                <a href="http://www.oreilly.com/programming/free/object-oriented-vs-functional-programming.csp">OOP vs Functional</a>
                <p className="text-secondary">Richard Warburton</p></div>
                </div>

                <div><img className="flex-img" src="/images/books/java3.gif"/>
                <div className="book-link">
                <a href="http://www.oreilly.com/programming/free/java-the-legend.csp">The Legend</a>
                <p className="text-secondary">Benjamin Evans</p></div>
                </div>

                <div><img className="flex-img" src="/images/books/java4.gif"/>
                <div className="book-link">
                <a href="http://www.mindview.net/Books/TIJ/">Thinking in Java</a> 
                <p className="text-secondary">Bruce Eckel</p></div>
                </div>

                <div><img className="flex-img" src="/images/books/java5.jpg"/>
                <div className="book-link">
                <a href="http://javalinuxbook.com/">Java Application on Linux</a>
                <p className="text-secondary">Carl Albing and Michael Schwarz</p></div>
                </div>

            </div>
            
        </div>
        <hr/>

        <div className="container">
            <h1>Start Learning Java</h1>

        <div className="video-panel">
        <div className="row">
            <div className="col-4">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=mAtkPQO1FcA"/>
            </div>
            <div className="col-2">
            <h5 style={{marginTop: "60px"}}>[1] Java in 5 Mins</h5>
            <h6>By Henry David</h6>
            </div>
            <div className="col-4">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=7XIduOKTaM0&t=57s" />
            </div>
            <div className="col-2">
            <h5 style={{marginTop: "60px"}}>[2] Java Projects</h5>
            <h6>By Tim Burton</h6>
            </div>
            </div>

            <div className="row">
            <div className="col-4">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=rSFraftR4I4" />
            </div>
            <div className="col-2">
            <h5 style={{marginTop: "60px"}}>[3] How to Setup Eclipse</h5>
            <h6>By Henry David</h6>
            </div>
            <div className="col-4">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=pa3X5fTnBGA" />
            </div>
            <div className="col-2">
            <h5 style={{marginTop: "60px"}}>[4] Java Classes</h5>
            <h6>By Alex Williams</h6>
            </div>
            </div>

            <div className="row">
            <div className="col-4">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=rSFraftR4I4" />
            </div>
            <div className="col-2">
            <h5 style={{marginTop: "60px"}}>Java Fundamentals</h5>
            <h6>By Liam Neeson</h6>
            </div>
            <div className="col-4">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=7XIduOKTaM0&t=57s" />
            </div>
            <div className="col-2">
            <h5 style={{marginTop: "60px"}}>Java Fundamentals</h5>
            <h6>By Liam Neeson</h6>
            </div>
            </div>
        </div>
            
        </div>


        </React.Fragment>
        
     );
}
 
export default Java;


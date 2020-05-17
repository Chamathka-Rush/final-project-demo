import React from 'react';
import { Link } from 'react-router-dom';
import './subjects-style.css';

const Python = () => {
    return ( 
        <React.Fragment>
            <div className="flex-container-top">
                <div className="row">
                    <div className="col-lg-4">
                    <img className="book-icon-img" src="/images/books/icon-img.jpg" />
                    </div>

                    <div className="col-lg-5">
                    <em style={{ marginTop: '20px', textAlign: 'center', fontSize: '2.5rem' }}>
                        ---Learn Python---</em>
                    <br/>
                    <em style={{ textAlign: 'center' }}>Here are some best e-book picks for python learners...
                    Just click on the book name and the book is yours.</em>
                    </div>

                    <div className="col-lg-3">
                        <Link to="/subjects" style={{ marginLeft: '50px'}} className="btn btn-outline-success">Back</Link>
                    </div>
                </div>
            
                </div>
           
            
       
        <div className="row">
            <div className="flex-container">
                <div><img className="flex-img" src="/images/books/python1.jpeg"/>
                <div className="book-link">
                <a href="http://py4e.com/book.php">Python for Everybody</a>
                <p className="text-secondary">Charles Severance</p>
                </div>
                </div>

                <div><img className="flex-img" src="/images/books/python2.jpg"/>
                <div className="book-link">
                <a href="http://chimera.labs.oreilly.com/books/1230000000393">Python Cookbook</a>
                <p className="text-secondary">David Beazley</p>
                </div>
                </div>

                <div><img className="flex-img" src="/images/books/python3.gif"/>
                <div className="book-link">
                <a href="http://www.oreilly.com/programming/free/hadoop-with-python.csp">Hadoop with Python</a>
                <p className="text-secondary">Zachary Radtka</p>
                </div>
                </div>

                <div><img className="flex-img" src="/images/books/python4-11th.gif"/>
                <div className="book-link">
                <a href="http://www.oreilly.com/web-platform/free/python-web-frameworks.csp">Python Web Frameworks</a>  
                <p className="text-secondary">Carlos De La Guardia</p>
                </div>
                </div>

                <div><img className="flex-img" src="/images/books/python5.gif"/>
                <div className="book-link">
                <a href="http://www.oreilly.com/programming/free/functional-programming-python.csp">Functional Programming</a>
                <p className="text-secondary">David Mertz</p>
                </div>
                </div>

            </div>
            
        </div>

        <div className="container-fluid">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Natus blanditiis nulla deserunt sed dolores necessitatibus 
                atque ex asperiores neque consequatur.</h1>
        </div>


        </React.Fragment>
        
     );
}
 
export default Python;


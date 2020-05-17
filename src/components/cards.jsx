import React, { Component } from 'react';
import CardUI from './cardsUI';


 class Cards extends Component {
     
     render() { 
         return (  
             <div className="container-fluid d-flex justify-content-center">
                 <div className="row">
                     <div className="col-md-4">
                         <CardUI
                         page="java"
                         imgsrc="/images/javaa.jpg"
                         title="Java"
                         text="Java is a general-purpose programming language that is class-based, 
                         object-oriented, and designed to have as few implementation dependencies as possible."
                         />
                     </div>
                     <div className="col-md-4">
                          <CardUI
                          page="python"
                          imgsrc="/images/python.jpg"
                          title="Python"
                         text="Python is an interpreted, high-level, general-purpose programming language created by Guido van Rossum 
                         and Python's design philosophy emphasizes code readability with its notable use of significant whitespace."    
                          />
                     </div>
                     <div className="col-md-4">
                          <CardUI 
                          imgsrc="/images/jscript.jpg"
                          title="JavaScript"
                         text="JS is a programming language that conforms to the ECMAScript specification. 
                         JavaScript is high-level, often just-in-time compiled, and multi-paradigm."
                          />
                     </div>
                     <div className="col-md-4" style={{marginTop: '20px'}}>
                          <CardUI 
                          imgsrc="/images/cplus.jpg"
                          title="C++"
                          text="C++ is a high-level, general-purpose programming language created by 
                          Bjarne Stroustrup as an extension of the C programming language, or C with Classes."
                          />
                     </div>
                     <div className="col-md-4" style={{marginTop: '20px'}}>
                          <CardUI 
                          imgsrc="/images/csharp.jpg"
                          title="C#"
                         text="C# is a general-purpose, multi-paradigm programming language encompassing strong 
                         typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
                          />
                     </div>
                     <div className="col-md-4" style={{marginTop: '20px'}}>
                          <CardUI 
                          imgsrc="/images/sql.jpg"
                          title="SQL"
                          text="SQL is a domain-specific language used in programming and designed for managing data held
                           in a relational database management system or for stream processing in a relational data stream management system." 
                          />
                     </div>
                 </div>
                 <div className="row">
                     
                 </div>
             </div>
         );
     }
 }
  
 export default Cards;
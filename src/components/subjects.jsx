import React, { Component } from 'react';
import Cards from './cards';

class Subjects extends Component {
    state = {  }
    render() { 
        return (
        <div style={{ textAlign: 'center'}}>
            <em style={{ fontSize: '1.9rem'}}>Happy Coding!</em>
            <br/>
            <em>Click the button on your favorite programming language
            and master programming.</em>
           <Cards />
        </div>  );
    }
}
 
export default Subjects;
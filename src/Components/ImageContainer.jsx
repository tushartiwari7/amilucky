import React from 'react';

import { Route,Switch } from 'react-router-dom'; 
import '../graphics/image.css';
import birthday from '../graphics/birthday.svg';
import lucky from '../graphics/lucky.svg';
import unlucky from '../graphics/unlucky.svg';
const ImageContainer = () => {

    
    return (
    <>
    <Switch>
        <Route path="/" exact >
            <img style={{width: "400px"}} className="hero-image" src={birthday} alt="" />
        </Route>
        <Route path="/lucky" >
            <img style={{width: "400px",marginBottom: '30px'}} className="hero-image" src={lucky} alt="" />
            <h1>Yes, You are lucky!</h1>
        </Route>
        <Route path="/unlucky"  >
            <img style={{width: "400px",marginBottom: '30px'}} className="hero-image" src={unlucky} alt="" />
            <h3>Oops, This number isn't Lucky for you. Try again with a different number!</h3>
        </Route>
    </Switch>
    </>
    )
}
export default ImageContainer;
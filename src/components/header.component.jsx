import React from 'react';
import Icon from "../assets/symbol-defs.svg";


export default function Header() {

    
  return (
    <header>
        <div className="text-box">
            <h1 className="header-primary">
                <span className="header-primary-main">Wouff</span>
                <span className="header-primary-sub">Where we love your dogs like you do</span>
            </h1>
            <a href="#about" className="btn btn-white">Getting Started</a>
        </div>
        
    </header>
  );
}


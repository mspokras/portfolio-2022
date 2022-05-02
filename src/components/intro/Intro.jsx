import React, { useEffect, useRef } from 'react';
import './Intro.scss'
import { init } from 'ityped'

function Intro(props) {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Front-End Developer', 'React Developer' ] 
            })
    }, [])
    
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/avatar-square.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Mykhailo Pokras</h1>
                    <h3>Future <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="images/down.png" alt="arrow-down" />
                </a>
            </div>
        </div>
    );
}

export default Intro;
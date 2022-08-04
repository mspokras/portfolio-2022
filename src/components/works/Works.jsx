import React, { useState } from 'react';
import './Works.scss'

function Works(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          icon: "./images/mobile.png",
          title: "Aztec E-commerce Website",
          desc:
            `E-commerce project with cool sliders and functionality. Unfinished, but ready to be tested.`,
          advice: "*Try adding products to cart from the homepage, then check your total price in the right corner :)",
          img:
            "./images/min-aztec-cart.jpg",
          link: 'https://e-commerce-aztec.netlify.app/'
        },
        {
          id: "2",
          icon: "./images/globe.png",
          title: "Easy Travel",
          desc:
            "My first project from scratch in Vanilla JS.",
          advice: "*Try picking two countries: one of your origin and another where you want to travel. Enjoy!",
          img:
            "./images/min-easy-travel-2.jpg",
          link: 'https://easy-travel-js.netlify.app/'
        },
        {
          id: "3",
          icon: "./images/writing.png",
          title: "TRVL Agency",
          desc:
            "The website in React.js, which is pretty attractive visually, although the functionality is basic.",
          advice: "*Try scrolling down the homepage and clicking on different tabs.",
          img:
          "./images/min-trvl.jpg",
          link: 'https://trvl-draft.netlify.app/products'
        },
        {
          id: "4",
          icon: "./images/bank-icon.png",
          title: "Bankist App",
          desc:
            "The earliest one in the slider, finished in 2021 while taking the Jonas Schmedtmann course on Udemy.",
          advice: "*Try logging in by using the following credentials: login: js, password: 1111. Then transfer money to jd/request a loan and hit enter.",
          img:
          "./images/min-bankist-account.jpg",
          link: 'https://bankist-account-js.netlify.app'
        },        
        {
          id: "5",
          icon: "./images/headphones-icon.png",
          title: "Rayes E-commerce One-page Website",
          desc:
            "Extremely simple, created by tutorial, but yet nice enough to check out.",
          advice: "*Try moving the mouse over any headphones.",
          img:
          "./images/min-rayes.jpg",
          link: 'https://headphones-plp.netlify.app/'
        },
      ];

    const handleClick = (way) => {
        way === 'left' ? 
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>( 
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="mobile" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>{d.advice}</span>
                                <a href={d.link} target="_blank" rel="noreferrer">See the whole project</a>
                            </div>
                        </div>
                        <div className="right">
                        <img
                            src={d.img}
                            alt=""
                            />
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <img src="images/arrow.png" alt="arrow" className='arrow left' onClick={()=>{handleClick("left")}}/>
            <img src="images/arrow.png" alt="arrow" className='arrow right' onClick={()=>{handleClick("right")}}/>
        </div>
    );
}

export default Works;
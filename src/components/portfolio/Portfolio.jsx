import { React, useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss'
import { reactProjPortfolio, simpleReactProjPortfolio, vanillaJSPortfolio, htmlCssPortfolio } from '../../data'

function Portfolio(props) {
    const [selected, setSelected] = useState("reactProj");
    const [data, setData] = useState([]);
    const list = [
        {
          id: "reactProj",
          title: "React Projects",
        },
        {
          id: "simpleReactProj",
          title: "Simple React Projects",
        },
        {
          id: "vanillaJS",
          title: "Vanilla JS Projects",
        },
        {
          id: "htmlCss",
          title: "HTML & CSS Websites",
        },
    ];
    useEffect(()=>{
        switch(selected) {
            case "reactProj":
                setData(reactProjPortfolio);
                break;
            case "simpleReactProj":
                setData(simpleReactProjPortfolio);
                break;
            case "vanillaJS":
                setData(vanillaJSPortfolio);
                break;
            case "htmlCss":
                setData(htmlCssPortfolio);
                break;
            default: 
                setData(reactProjPortfolio);    
        }
    }, [selected])
    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <h5><i>It is strongly advised to test the apps using the instructions in the section below, as some functionality may not be finished yet.</i></h5>
            <div className="container">
                {data.map(element=>(
                    <div className={element.classNames} onClick={()=> window.open(element.link, "_blank")}>
                        <img src={element.img} alt={element.title} />
                        <h3>{element.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Portfolio for Dr.Jyotirmay Hegde",
    github: "https://github.com/hushahadat/client-Ecommerce",
    demo: "https://jyotirmayhegde.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "CryptoPulse to track  information and data",
    github: "https://github.com/hushahadat/coin-market",
    demo: "https://crypto-coin-002v.onrender.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dashboard UI for user details web apps",
    github: "https://github.com/hushahadat/To-Do",
    
  }
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio_container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} style={{height:'16rem'}}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                 { demo && <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
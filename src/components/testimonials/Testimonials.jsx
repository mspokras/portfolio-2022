import React from 'react';
import './Testimonials.scss'

function Testimonials(props) {
    const data = [
        {
          id: 1,
          name: "Tom Jones",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "images/twitter.png",
          desc:
            "Testimonials are yet to be added. If you want to give feedback, contact me via e-mail.",
        },
        {
          id: 2,
          name: "Alexandra Sapinski",
          title: "Co-Founder of AZTEC",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "images/youtube.png",
          desc:
            "Testimonials are yet to be added. If you want to give feedback, contact me via e-mail.",
          featured: true,
        },
        {
          id: 3,
          name: "Jim Johnson",
          title: "Product Owner",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "images/linkedin.png",
          desc:
            "Testimonials are yet to be added. If you want to give feedback, contact me via e-mail.",
        },
      ];
    return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="images/right-arrow.png" className="left" alt="" />
                            <img src={d.img} className="user" alt="" />
                            <img src={d.icon} className="right" alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
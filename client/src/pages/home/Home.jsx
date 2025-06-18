import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBY from '../../components/trustedBy/TrustedBY';
import Slide from '../../components/slide/Slide';
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from '../../data';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      {/* <TrustedBY /> */}

      {/* ✅ Swiper-based slide for category cards */}
      <Slide slidesToShow={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>Find the right freelancer to begin working on your project within minutes.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>Find high-quality services at every price point.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.</p>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            {[
              { src: "graphics-design.d32a2f8.svg", label: "Graphics & Design" },
              { src: "online-marketing.74e221b.svg", label: "Digital Marketing" },
              { src: "writing-translation.32ebe2e.svg", label: "Writing & Translation" },
              { src: "video-animation.f0d9d71.svg", label: "Video & Animation" },
              { src: "music-audio.320af20.svg", label: "Music & Audio" },
              { src: "programming.9362366.svg", label: "Programming & Tech" },
              { src: "business.bbdf319.svg", label: "Business" },
              { src: "lifestyle.745b575.svg", label: "Lifestyle" },
              { src: "data.718910f.svg", label: "Data" },
              { src: "photography.01cf943.svg", label: "Photography" }
            ].map(({ src, label }) => (
              <div className="item" key={label}>
                <img
                  src={`https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/${src}`}
                  alt={label}
                />
                <div className="line"></div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Swiper-based slide for project cards */}
      <Slide slidesToShow={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;

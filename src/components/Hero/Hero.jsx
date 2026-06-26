import { useState } from "react";
import "./Hero.css";

import cubeIcon from "../../assets/svg/cube-16-solid.svg";
import trendIcon from "../../assets/svg/arrow-trending-up.svg";
import chartIcon from "../../assets/svg/chart-pie.svg";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid"></div>

        <div className="container hero-wrapper">

          {/* Left Content */}
          <div className="hero-content">

            <span className="hero-badge">
              <i className="bi bi-stars"></i>
              AI Powered Automation
            </span>

            <h1>
              Power your
              <span> Future with AI</span>
            </h1>

            <p>
              Intelligent automation for teams that build, scale and operate AI
              workflows with speed.
            </p>

            <div className="hero-buttons">

              <button className="btn-primary">
                Get Started
              </button>

              <button
                className="btn-secondary"
                onClick={() => setShowVideo(true)}
              >
                <i className="bi bi-play-circle"></i>
                Watch Demo
              </button>

            </div>

            <div className="hero-stats">

              <div>
                <h3>25K+</h3>
                <span>Users</span>
              </div>

              <div>
                <h3>98%</h3>
                <span>Automation</span>
              </div>

              <div>
                <h3>150+</h3>
                <span>Integrations</span>
              </div>

            </div>

          </div>

          {/* Right Visual */}

          <div className="hero-visual">

            <div className="ai-orb">

              <div className="orb-ring ring-one"></div>

              <div className="orb-ring ring-two"></div>

              <div className="orb-core">
                <img src={cubeIcon} alt="" aria-hidden="true" />
                <span>AI</span>
              </div>

            </div>

            <div className="visual-card card-top">
              <img src={trendIcon} alt="" aria-hidden="true" />

              <div>
                <strong>98%</strong>
                <span>Automation Accuracy</span>
              </div>
            </div>

            <div className="visual-card card-bottom">
              <img src={chartIcon} alt="" aria-hidden="true" />

              <div>
                <strong>150+</strong>
                <span>Connected Workflows</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {showVideo && (
        <div className="video-modal">

          <button
            className="video-close"
            onClick={() => setShowVideo(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <video
            className="demo-video"
            controls
            autoPlay
          >
            <source src="/demo.mp4" type="video/mp4" />
          </video>

        </div>
      )}
    </>
  );
}

export default Hero;
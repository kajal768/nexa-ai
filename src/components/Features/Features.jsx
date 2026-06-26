import { useEffect, useRef, useState } from "react";
import { featuresData } from "../../data/featuresData";
import "./Features.css";

const MOBILE_BREAKPOINT = 768;

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  const activeIndexRef = useRef(0);

  const updateActiveIndex = (index) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const nextIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;

      setIsMobile((prevIsMobile) => {
        if (prevIsMobile !== nextIsMobile) {
          setActiveIndex(activeIndexRef.current);
        }

        return nextIsMobile;
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="features-section"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="container reveal-on-scroll">
        <div className="section-heading">
          <span className="section-kicker">
            <i className="bi bi-grid-1x2-fill"></i>
            Core Features
          </span>

          <h2 id="features-title">
            Automation tools that feel fast, focused, and intelligent.
          </h2>

          <p>
            A responsive bento interface that becomes a smooth accordion on
            mobile.
          </p>
        </div>

        {!isMobile ? (
          <div className="bento-grid" aria-label="AI automation features">
            {featuresData.map((feature, index) => (
              <article
  className={`bento-card bento-card-${index + 1} ${
  activeIndex === index ? "active" : ""
}`}
                key={feature.title}
                onMouseEnter={() => updateActiveIndex(index)}
                onFocus={() => updateActiveIndex(index)}
                tabIndex="0"
              >
                <span className="feature-icon">
                  <img src={feature.icon} alt="" aria-hidden="true" />
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div
            className="feature-accordion"
            aria-label="AI automation features accordion"
          >
            {featuresData.map((feature, index) => (
              <article className="accordion-item" key={feature.title}>
                <button
                  className="accordion-trigger"
                  onClick={() => updateActiveIndex(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>
                    <img src={feature.icon} alt="" aria-hidden="true" />
                    {feature.title}
                  </span>

                  <i className="bi bi-chevron-down"></i>
                </button>

                <div
                  className={`accordion-panel ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;

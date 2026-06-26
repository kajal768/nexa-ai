import "./Testimonials.css";

const testimonials = [
  { name: "Sarah Johnson", role: "Product Manager", company: "TechFlow", review: "We automated 70% of workflows in two weeks." },
  { name: "David Miller", role: "CTO", company: "Nova AI", review: "Fast, clean, and incredibly useful for our team." },
  { name: "Emily Carter", role: "Operations Lead", company: "CloudSync", review: "Beautiful UI with powerful automation features." },
  { name: "Michael Brown", role: "Founder", company: "Rocket Labs", review: "Saved hundreds of hours every month." },
  { name: "Sophia Wilson", role: "CEO", company: "FutureStack", review: "Enterprise security with simple workflows." },
  { name: "James Anderson", role: "Engineering Manager", company: "ByteWorks", review: "Everything feels smooth and responsive." },
];

const loopItems = [...testimonials, ...testimonials];

function Testimonials() {
  return (
   <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-heading center-heading">
          <span className="section-kicker">
            <i className="bi bi-chat-heart-fill"></i>
            Testimonials
          </span>
          <h2 id="testimonials-title">Loved by automation teams.</h2>
          <p>Real feedback from teams using NexaAI every day.</p>
        </div>
      </div>

      <div className="testimonial-marquee" aria-label="Customer testimonials carousel">
        <div className="testimonial-row">
          {loopItems.map((item, index) => (
           <article className="small-testimonial-card reveal-on-scroll">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>

              <p>"{item.review}"</p>

              <div className="author">
                <div className="avatar">{item.name[0]}</div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role} • {item.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

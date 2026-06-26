import { memo } from "react";
import PriceText from "./PriceText";

const PriceCard = memo(function PriceCard({ tier, billing, currency, suffix }) {
  return (
 <article className={`price-card reveal-on-scroll ${tier.popular ? "popular reveal-delay-2" : ""}`}>
      {tier.popular && <span className="popular-badge">Most Popular</span>}

      <h3>{tier.name}</h3>
      <p>{tier.description}</p>

      <div className="price-line">
        <PriceText
          baseRate={tier.baseRate}
          billing={billing}
          currency={currency}
        />
        <small>{suffix}</small>
      </div>

      <ul>
        {tier.features.map((feature) => (
          <li key={feature}>
            <i className="bi bi-check2-circle"></i>
            {feature}
          </li>
        ))}
      </ul>

      <button>Choose Plan</button>
    </article>
  );
});

export default PriceCard;

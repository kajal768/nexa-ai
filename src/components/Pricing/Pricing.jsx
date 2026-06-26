import { useState } from "react";
import { pricingMatrix } from "../../data/pricingMatrix";
import BillingToggle from "./BillingToggle";
import CurrencySwitcher from "./CurrencySwitcher";
import PriceCard from "./PriceCard";
import "./Pricing.css";

function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="pricing-top">
          <div className="section-heading">
            <span className="section-kicker">
              <i className="bi bi-credit-card-2-front-fill"></i>
              Pricing Matrix
            </span>

           <h2 id="pricing-title">Plans that calculate themselves across regions.</h2>

            <p>
              Prices are generated dynamically through base rates, annual
              discount, and regional currency variables.
            </p>
          </div>

          <div className="pricing-controls">
            <BillingToggle billing={billing} onChange={setBilling} />
            <CurrencySwitcher currency={currency} onChange={setCurrency} />
          </div>
        </div>

        <div className="pricing-grid">
          {pricingMatrix.tiers.map((tier) => (
            <PriceCard
              key={tier.id}
              tier={tier}
              billing={billing}
              currency={currency}
              suffix={pricingMatrix.billing[billing].suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
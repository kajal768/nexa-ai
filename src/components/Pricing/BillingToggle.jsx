function BillingToggle({ billing, onChange }) {
  return (
    <div className="billing-toggle" aria-label="Billing cycle">
      <button
        className={billing === "monthly" ? "active" : ""}
        onClick={() => onChange("monthly")}
      >
        Monthly
      </button>

      <button
        className={billing === "annual" ? "active" : ""}
        onClick={() => onChange("annual")}
      >
        Annual <span>20% off</span>
      </button>
    </div>
  );
}

export default BillingToggle;
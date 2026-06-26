import { memo, useEffect, useRef } from "react";
import { calculatePrice } from "../../utils/pricingUtils";
import { pricingMatrix } from "../../data/pricingMatrix";

const PriceText = memo(function PriceText({ baseRate, billing, currency }) {
  const priceRef = useRef(null);

  useEffect(() => {
    if (!priceRef.current) return;

    priceRef.current.textContent = calculatePrice(
      baseRate,
      billing,
      currency,
      pricingMatrix
    );
  }, [baseRate, billing, currency]);

  return (
    <span ref={priceRef} className="price-value" aria-live="polite">
      {calculatePrice(baseRate, billing, currency, pricingMatrix)}
    </span>
  );
});

export default PriceText;
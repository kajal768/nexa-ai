import { useState } from "react";

function CurrencySwitcher({ currency, onChange }) {
  const [open, setOpen] = useState(false);

  const currencies = [
    { value: "USD", label: "USD", symbol: "$" },
    { value: "INR", label: "INR", symbol: "₹" },
    { value: "EUR", label: "EUR", symbol: "€" },
  ];

  const selected = currencies.find((c) => c.value === currency);

  const chooseCurrency = (value) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="currency-switcher">
      <span>Currency</span>

      <button
        type="button"
        className="currency-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <strong>{selected.symbol}</strong>
        <em>{selected.label}</em>
        <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
      </button>

      {open && (
        <div className="currency-menu">
          {currencies.map((item) => (
            <button
              type="button"
              key={item.value}
              className={currency === item.value ? "active" : ""}
              onClick={() => chooseCurrency(item.value)}
            >
              <strong>{item.symbol}</strong>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencySwitcher;
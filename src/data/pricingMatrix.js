export const pricingMatrix = {
  billing: {
    monthly: {
      label: "Monthly",
      discount: 1,
      suffix: "/mo",
    },
    annual: {
      label: "Annual",
      discount: 0.8,
      suffix: "/mo",
    },
  },

  currencies: {
    USD: {
      symbol: "$",
      rate: 1,
      locale: "en-US",
    },
    INR: {
      symbol: "₹",
      rate: 84,
      locale: "en-IN",
    },
    EUR: {
      symbol: "€",
      rate: 0.92,
      locale: "de-DE",
    },
  },

  tiers: [
    {
      id: "starter",
      name: "Starter",
      baseRate: 19,
      description: "For solo builders and small automation teams.",
      features: ["5 workflows", "Basic AI actions", "Email support"],
    },
    {
      id: "growth",
      name: "Growth",
      baseRate: 49,
      description: "For growing teams running daily automation.",
      popular: true,
      features: ["Unlimited workflows", "Advanced AI routing", "Priority support"],
    },
    {
      id: "scale",
      name: "Scale",
      baseRate: 99,
      description: "For enterprises with secure AI operations.",
      features: ["Custom agents", "Audit logs", "Dedicated success manager"],
    },
  ],
};
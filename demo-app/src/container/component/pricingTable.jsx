
import React, { useState } from "react";
 
const PricingTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
 
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
 
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
 
  // State to hold search query
  const [searchQuery, setSearchQuery] = useState("");
 
  // Sample pricing data
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: 19,
      users: "1 User",
      storage: "10GB Storage",
      support: "Email Support",
    },
    {
      id: 2,
      name: "Standard",
      price: 39,
      users: "5 Users",
      storage: "50GB Storage",
      support: "Priority Support",
    },
    {
      id: 3,
      name: "Premium",
      price: 79,
      users: "Unlimited Users",
      storage: "200GB Storage",
      support: "24/7 Support",
    },
    {
      id: 4,
      name: "Basic",
      price: 209,
      users: "1 User",
      storage: "120GB Storage",
      support: "Email Support",
    },
    {
      id: 5,
      name: "Standard",
      price: 439,
      users: "5 Users",
      storage: "600GB Storage",
      support: "Priority Support",
    },
    {
      id: 6,
      name: "Premium",
      price: 909,
      users: "Unlimited Users",
      storage: "3TB Storage",
      support: "24/7 Support",
    },
  ];
 
  // Filter the pricing plans based on the search query
  const filteredPlans = pricingPlans.filter((plan) => {
    const query = searchQuery.toLowerCase();
 
    return (
      plan.name.toLowerCase().includes(query) ||
      plan.price.toString().includes(query)
    );
  });
 
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
 
  return (
    <div className="pricing-table-container">
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search pricing plans..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
 
      {/* Pricing table or list */}
      <div className="pricing-table">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-column ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p>${plan.price} / {plan.id > 3 ? "year":"month"}</p>
              </div>
              <ul className="features">
                <li>{plan.users}</li>
                <li>{plan.storage}</li>
                <li>{plan.support}</li>
              </ul>
              <button className="sign-up-btn">Sign Up</button>
            </div>
          ))
        ) : (
          <p>No plans found</p>
        )}
      </div>
    </div>
  );
};
 
export default PricingTable;
 
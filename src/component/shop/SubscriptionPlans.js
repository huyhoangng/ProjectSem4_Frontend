import React, { useState, useEffect } from "react";
import "../../assest/css/subscriptionPlan.css";

const SubscriptionPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dữ liệu tĩnh (fallback) cho giao diện
  const staticPlans = [
    {
      id: 1,
      name: "Basic",
      description: "A simple plan to get you started.",
      image: "https://via.placeholder.com/150",
      rating: 4,
      monthlyPrice: "$10",
      yearlyPrice: "$100",
    },
    {
      id: 2,
      name: "Standard",
      description: "Great for individuals and small teams.",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      monthlyPrice: "$20",
      yearlyPrice: "$200",
    },
    {
      id: 3,
      name: "Premium",
      description: "Full features for large teams and businesses.",
      image: "https://via.placeholder.com/150",
      rating: 5,
      monthlyPrice: "$30",
      yearlyPrice: "$300",
    },
  ];

  useEffect(() => {
    // Giả sử API trả về danh sách các gói đăng ký
    const fetchPlans = async () => {
      try {
        const response = await fetch("https://api.example.com/plans"); // Thay URL bằng API thực
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
        // Sử dụng dữ liệu tĩnh nếu API thất bại
        setPlans(staticPlans);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <div className="shop">
      <h1 className="title">Choose Your Plan</h1>
      <div className="billing-toggle">
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={billingCycle === "yearly" ? "active" : ""}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="plans-container">
        {isLoading ? (
          <p>Loading plans...</p>
        ) : (
          plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <img src={plan.image} alt={plan.name} className="plan-image" />
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-rating">{renderStars(plan.rating)}</div>
              <div className="plan-price">
                {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              </div>
              <button className="select-plan-button">Choose Plan</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlans;

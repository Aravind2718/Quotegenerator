import React from 'react';
import "../index.css";

const SubscriptionPage = () => {
  return (
    <div >
    <section id='subs' color='grey'>
        <div className="subscription-page">
      <h1 className="subscription-header">About our Quote Generator</h1>
      <p className="subscription-subheader">Life is like a Quote!!!</p>
      <p className="subscription-subheader">Grab It!!</p>
      <p className="subscription-subheader">Understand It!!!,Not Everyone deserves it!!!</p>
      <div className="subscription-plans">
        <div className="subscription-plan">
          <h2 className="subscription-plan-header">Basic Quotes</h2>
          <p className="subscription-plan-description">Access to a random quote once per day</p>
          <h2 className="subscription-plan-header"></h2>
          <button className="subscription-plan-button">Click here</button>
        </div>
        <div className="subscription-plan">
          <h2 className="subscription-plan-header">Premium Quotes</h2>
          <p className="subscription-plan-description">Access to a random quote three times per day</p>
          <h2 className="subscription-plan-header"></h2>
          <button className="subscription-plan-button">Click here</button>
        </div>
        <div className="subscription-plan">
          <h2 className="subscription-plan-header"></h2>
          <p className="subscription-plan-description">Know more...</p>
          <h2 className="subscription-plan-header"></h2>
          <button className="subscription-plan-button">Get Started</button>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
};

export default SubscriptionPage;

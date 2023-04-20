import React from 'react';
import "../index.css"
import SubscriptionPage from './Subscription';
import Contact from './Contact';
const HomePage = () => {
  return (
    <>
    <div className="home flex flex-col  items-center">
      <div style={{marginTop:'30vh'}}>
      <h1 className="text-4xl font-medium text-light text-center mt-8">Welcome to the Quote Generator!</h1>
      <p className="text-center text-light max-w-xl">This app generates motivational quotes to help inspire you throughout the day. Click the button below to generate a new quote!</p><br/>
      <a href='/quotes' className="mt-5 text-bg-success rounded-2 p-2">New Quote</a>
      </div>
      
    </div>
    <SubscriptionPage/>
    <Contact/>
    </>
  );
}

export default HomePage;

import React, { useState } from "react";
import Navbar from "./Navbar";
import background from "../images/background.png";
import masserati1 from "../images/masserati1.png";
import carIco from "../images/speed.png";
import operatorIco from "../images/call-center-operator.png";
import driveIco from "../images/old-car.png";
import promo from "../images/promo.png";
import diamond from "../images/diamond.png";
import coin from "../images/coin.png";
import piggy from "../images/piggy-bank.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import audi from "../images/audi.png";
import BookRide from "./BookRide";
import Vehicles from "./Vehicles";
import FooterM from "./FooterM";

export default function Main() {
  const [desc1, setDesc1] = useState(false);
  const [desc2, setDesc2] = useState(false);
  const [desc3, setDesc3] = useState(false);

  const handleClick = (e) => {
    if (e === 1 && desc1 === false) {
      setDesc1(true);
      setDesc2(false);
      setDesc3(false);
    } else if (desc1 === true) {
      setDesc1(false);
      setDesc2(false);
      setDesc3(false);
    }

    if (e === 2 && desc2 === false) {
      setDesc1(false);
      setDesc2(true);
      setDesc3(false);
    } else if (desc2 === true) {
      setDesc1(false);
      setDesc2(false);
      setDesc3(false);
    }

    if (e === 3 && desc3 === false) {
      setDesc1(false);
      setDesc2(false);
      setDesc3(true);
    } else if (desc3 === true) {
      setDesc1(false);
      setDesc2(false);
      setDesc3(false);
    }

    console.log(desc1);
  };
  return (
    <>
      <Navbar />

      <div className="main-page">
        <img
          src={background}
          className="background-main"
          alt="background image"
        />
        <img src={masserati1} className="main-car" alt="masserati image" />
        <div className="description">
          <h1>Rent the luxury. Own the thrill.​</h1>
          <span>
            From exotic sports cars to luxury sedans and SUVs, the Exotic Car
            Collection by Exclusive Car Rental offers an exceptional selection
            and the trusted, personalized service of Enterprise.
          </span>
          <div className="btns">
            <a href="#bookride">
              <button className="btn book-ride">Book ride</button>
            </a>
            <button className="btn learn-more">Learn more</button>
          </div>
        </div>
        <BookRide />
        <div className="trip-info">
          <h2>Plan your trip now</h2>
          <div className="boxes">
            <div className="box">
              <img src={carIco} alt="car icon" />
              <h3>Select your car</h3>
              <span>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </span>
            </div>
            <div className="box">
              <img src={operatorIco} alt="operator icon" />
              <h3>Contact Operator</h3>
              <span>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </span>
            </div>
            <div className="box">
              <img src={driveIco} alt="drive icon" />
              <h3>Let's Drive</h3>
              <span>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </span>
            </div>
          </div>
        </div>
        <Vehicles />
        <div className="promo">
          <div className="title">
            <h2>Drive in comfort and style</h2>
            <span>
              Why it is profitable to rent premium cars in Exclusive Car Rental?
              As owners of cars, we can afford to offer for rent convertibles,
              supercars and executive sedans at the best market prices with
              delivery to anywhere in Europe in a short time.
            </span>
          </div>
          <img src={promo} alt="promotion" />
          <div className="offer-container">
            <div className="left">
              <h3>Why choose us?</h3>
              <h1>Best valued deals you will ever find</h1>
              <span>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </span>
              <button>Find out more</button>
            </div>
            <div className="right">
              <div className="box">
                <div className="image">
                  <img src={diamond} alt="diamond icon" />
                </div>
                <div className="offer-description">
                  <h3>Luxury Drive</h3>
                  <span>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your exclusive adventures.
                  </span>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src={coin} alt="coin icon" />
                </div>
                <div className="offer-description">
                  <h3>All Inclusive Pricing</h3>
                  <span>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </span>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src={piggy} alt="piggy icon" />
                </div>
                <div className="offer-description">
                  <h3>No Hidden Charges</h3>
                  <span>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="opinons-container">
            <div className="opinions-title">
              <h2>Client's Testimonials</h2>
              <span>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </span>
            </div>
            <div className="opinions">
              <div className="opinion">
                <span>
                  "I couldn't have asked for a better car rental experience.
                  Everything was perfect - from the beautiful and clean car to
                  the exceptionally friendly and helpful customer service."
                </span>
                <div className="clients">
                  <div className="client">
                    <img src={avatar1} alt="avatar" />
                    <span>John Wick</span>
                  </div>
                </div>
              </div>
              <div className="opinion">
                <span>
                  "Driving this car was an absolute pleasure. Not only did it
                  look great, but it had amazing performance as well. I highly
                  recommend this car rental company!"
                </span>
                <div className="clients">
                  <div className="client">
                    <img src={avatar2} alt="avatar" />
                    <span>Aragorn Dúnadan</span>
                  </div>
                </div>
              </div>
              <div className="opinion">
                <span>
                  "I couldn't believe how quickly and easily I was able to rent
                  this luxury car. The customer service was great, and the car
                  was exactly what I wanted.
                </span>
                <div className="clients">
                  <div className="client">
                    <img src={avatar3} alt="avatar" />
                    <span>Daenerys Targaryen</span>
                  </div>
                </div>
              </div>
              <div className="opinion">
                <span>
                  "Everything was perfectly organized from the moment of booking
                  until the return of the car. The staff was extremely courteous
                  and helpful, and the car was in impeccable condition."
                </span>
                <div className="clients">
                  <div className="client">
                    <img src={avatar4} alt="avatar" />
                    <span>Rubeus Hagrid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-container">
            <div className="faq-title">
              <h2>FAQ's</h2>
              <span>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </span>
            </div>
            <div className="slider-container">
              <div className="slider-title" onClick={() => handleClick(1)}>
                1. What documents are required to rent a car from our rental
                company?
              </div>
              <div className="slider-content hide">
                {desc1
                  ? `To rent a luxury car from our rental company, we require
                specific documents for verification and security purposes. A
                valid driver's license is the most important document that we
                need to see. It should be valid for the duration of the rental
                period, and it must be issued in your name. For non-citizen
                renters, we require a passport, and for local residents, we
                accept an ID card as an alternative to a passport. It's also
                essential to have a credit card in your name to cover the rental
                fees, insurance, and any additional charges that may occur
                during the rental period. In some cases, we may also require
                additional documentation, such as proof of address or an
                international driver's license, especially if you plan on
                driving outside of the country.`
                  : ""}
              </div>
              <div className="slider-title" onClick={() => handleClick(2)}>
                2. Do I need my own car insurance?
              </div>
              <div className="slider-content">
                {desc2
                  ? `At our rental company, we offer car insurance as an optional
                  coverage during the rental process. However, you can also
                  provide your insurance policy. If you choose to use your
                  insurance policy, you must show us proof of insurance before
                  renting a car. You will also need to sign an agreement stating
                  that you agree to use your insurance policy to cover any damages
                  that may occur while the rental car is in your possession. Keep
                  in mind that if you decide to use your insurance, you will still
                  be responsible for the rental car's deductible, which is the
                  amount that you would have to pay before your insurance coverage
                  kicks in.`
                  : ""}
              </div>
              <div className="slider-title" onClick={() => handleClick(3)}>
                3. What are the age restrictions for renting luxury cars from
                our rental company?
              </div>
              <div className="slider-content hide">
                {desc3
                  ? `Our rental company has specific age restrictions when it comes
                  to renting luxury cars. To rent a car from us, you must be at
                  least 25 years old. For renters with an international driver's
                  license, the minimum age requirement is 28 years old. These age
                  requirements are due to the high value of our cars and the
                  increased risk of damage that comes with driving high-end
                  vehicles. We want to ensure that our rental cars are in safe
                  hands, and our age restrictions are in place to minimize the
                  risk of accidents and damages.`
                  : ""}
              </div>
              <img src={audi} alt="audi image" />
            </div>
          </div>
        </div>
        <FooterM />
      </div>
    </>
  );
}

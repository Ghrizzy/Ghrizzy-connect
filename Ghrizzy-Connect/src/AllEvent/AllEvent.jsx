import React from 'react'
import "./AllEvent.css"
import { GrLocationPin } from "react-icons/gr";
import { ImPriceTag } from "react-icons/im";

const AllEvent = ({Eventinfo}) => {
  return (
    <div>
        <div className='all-event-heading'>

        <h1>Popular Event</h1>
        </div>
      <div className="all-event-box">
        {Eventinfo.map((item, index) => (
          <div
            className="all-event-container"
            key={index}
          >
            <img src={item.image} alt="carousel image" />
            <div className="all-event-date">
              <p>
                12th <br /> oct
              </p>
            </div>
            <div className="all-event-info">
              <p className="all-event-title">{item.title}</p>
              <p className="all-event-location">
                <GrLocationPin />
                {item.location}
              </p>
              <p className="all-event-price">
                <ImPriceTag /> starts at <b>#3,000</b>
              </p>
              <button>Buy Ticket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllEvent

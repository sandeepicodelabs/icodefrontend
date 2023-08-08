import React from "react";
import "./subscribe.scss";

export default function SubscribeCard() {
  return (
    <>
      <div className="subscribe-box-wrap">
        <div className="subscribe-card-box">
          <h3>Subscribe</h3>
          <p>To get latest posts update</p>
          <div className="subscribe-input-box">
            <input type="text" placeholder="Email address" />
          </div>
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </>
  );
}

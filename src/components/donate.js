import React from "react";

export default function Donate() {
  return (
    <>
      <section className="donate" id="donate">
        <div className="box-container">
          <div className="box">
            <i className="fa fa-users" />
            <h3>1000+</h3>
            <p>volunteers involved</p>
          </div>
          <div className="box">
            <i className="fa fa-tree" />
            <h3>4500+</h3>
            <p>trees planted</p>
          </div>
          <div className="box">
            <i className="fa fa-paw" />
            <h3>420+</h3>
            <p>animals saved</p>
          </div>
          <div className="box">
            <i className="fa fa-solar-panel" />
            <h3>730+</h3>
            <p>solar panels</p>
          </div>
        </div>
        <div className="donate-box">
          <h3>donation amount</h3>
          <div className="amount">
            <input className="active" type="button" defaultValue="$5" />
            <input type="button" defaultValue="$10" />
            <input type="button" defaultValue="$20" />
            <input type="button" defaultValue="$25" />
            <input type="button" defaultValue="$50" />
            <input type="button" defaultValue="$100" />
            <input type="button" defaultValue="$500" />
            <input type="text" placeholder="$ other" />
          </div>
          <a href="#" className="btn">
            donate now
          </a>
        </div>
      </section>
    </>
  );
}

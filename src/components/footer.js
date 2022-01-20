import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
            Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth. —Henry David Thoreau
            </p>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">project</a>
            <a href="#">donate</a>
            <a href="#">team</a>
            <a href="#">testimonial</a>
            <a href="#">events</a>
          </div>
          <div className="box">
            <h3>contact us</h3>
            <p>
              {" "}
              <i className="fa fa-phone" /> +123-456-7890.{" "}
            </p>
            <p>
              {" "}
              <i className="fa fa-envelope" />ecovahelp@gmail.com{" "}
            </p>
            <p>
              {" "}
              <i className="fa fa-map-marker-alt" /> mumbai, india - 400104{" "}
            </p>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">youtube</a>
            <a href="#">linkedin</a>
          </div>
        </div>
        <h1 className="credit">
          {" "}
          created by <a href="#"> Hritik Singh </a> | all rights reserved!{" "}
        </h1>
      </div>
    </>
  );
}

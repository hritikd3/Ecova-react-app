import React from "react";

export default function Navbar() {
  return (
    <>
      <header>
        <a href="#" className="logo">
          eco
          <span className="fa fa-globe" />
          va
        </a>
        <div id="menu" className="fa fa-bars" />
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#project">project</a>
          <a href="#donate">donate</a>
          <a href="#team">team</a>
          <a href="#testimonial">testimonial</a>
          <a href="#events">events</a>
        </nav>
      </header>
    </>
  );
}

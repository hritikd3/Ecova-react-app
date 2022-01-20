import React from "react";

export default function Project() {
  return (
    <>
      <section className="project" id="project">
        <h1 className="heading">our projects</h1>
        <div className="box-container">
          <div className="box">
            <img src={"./images/project-1.jpg"} />
            <h3 className="title">planting tress</h3>
            <div className="info">
              <h3>planting tress</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis sint aliquam velit in autem doloribus nam optio
                laboriosam ducimus harum.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div className="box">
            <img src={"./images/project-2.jpg"} />
            <h3 className="title">wind energy</h3>
            <div className="info">
              <h3>wind energy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis sint aliquam velit in autem doloribus nam optio
                laboriosam ducimus harum.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div className="box">
            <img src={"./images/project-3.jpg"} />
            <h3 className="title">saving animals</h3>
            <div className="info">
              <h3>saving animals</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis sint aliquam velit in autem doloribus nam optio
                laboriosam ducimus harum.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div className="box">
            <img src={"./images/project-4.jpg"} />
            <h3 className="title">recyling waste</h3>
            <div className="info">
              <h3>recyling waste</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis sint aliquam velit in autem doloribus nam optio
                laboriosam ducimus harum.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

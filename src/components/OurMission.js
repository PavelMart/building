import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
// import RegisterBtn from "./UI/RegisterBtn";

const OurMission = () => {
  const [active, setActive] = useState(0);
  const [tabWidth, setTabWidth] = useState(null);
  const nodeRef = useRef(null);
  const {
    data: {
      sections: { ourMission },
    },
  } = useSelector((state) => state.data);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (nodeRef) setTabWidth(nodeRef.current.clientWidth);
    });
    if (nodeRef) setTabWidth(nodeRef.current.clientWidth);
  }, [nodeRef]);

  return (
    <>
      <section id="our-mission" className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-12">
              <h3 className="section-title text-center">{ourMission.title}</h3>
              <div className="row our-mission__header mb-4">
                {ourMission.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={["col-12", "col-lg-4", "our-mission__header-tab", active === activity.id ? "active" : ""].join(" ")}
                    onClick={() => setActive(activity.id)}
                  >
                    {activity.title}
                  </div>
                ))}
              </div>
              <div className=" col-12 our-mission__content-wrap" ref={nodeRef}>
                <div className="our-mission__content row" style={{ transform: `translateX(-${tabWidth * active}px)` }}>
                  {ourMission.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className={[
                        "col-12",
                        "py-3",
                        "justify-content-between",
                        "our-mission__content-tab",
                        active === activity.id ? "active" : "",
                      ].join(" ")}
                    >
                      <div className="our-mission__content-text">
                        <p>{activity.text}</p>
                      </div>
                      <div className="our-mission__content-image">
                        <img src={activity.imageSrc} alt="activity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;

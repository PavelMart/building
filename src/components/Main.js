import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Features from "./Features";
import OurMission from "./OurMission";

const Main = () => {
    return (
        <>
            <AboutUs />
            <div className="divider"></div>
            <OurMission />
            <div className="divider"></div>
            <Features />
            <div className="divider"></div>
            <ContactUs />
        </>
    );
};

export default Main;

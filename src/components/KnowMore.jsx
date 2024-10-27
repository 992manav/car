import React from "react";
import CountUp from "react-countup";

const KnowMore = () => {
  const Counter = ({ target, duration, suffix, title }) => {
    return (
      <div className="cdhl_counter_wrapper">
        <div
          className="counter clearfix counter-style-5"
          style={{
            "--icon_color": "#db2d2e",
            "--separator_color": "#db2d2e",
            "--label_color": "#FFFFFF",
            "--counter_color": "#FFFFFF",
          }}
        >
          <div className="content">
            <CountUp end={target} duration={duration} suffix={suffix}>
              {({ countUpRef }) => (
                <span className="timer counter-animated" ref={countUpRef} />
              )}
            </CountUp>
            <h6 className="counter-title">{title}</h6>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="text-white relative">
      <img
        src="https://mrwallpaper.com/images/hd/full-hd-car-black-lamborghini-tahul7hyi0cfet43.jpg"
        alt="A black Lamborghini"
        className="w-full h-screen object-cover"
      />
      <div className="container mx-auto md:mx-10 top-10 absolute z-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-red-500 hover:bg-red-600 text-white font-bold py-8 px-6 md:px-16 rounded mt-4">
          <Counter
            target={3968}
            duration={10}
            suffix="k"
            title="Vehicles In Stock"
          />
          <Counter
            target={25}
            duration={1}
            suffix="+"
            title="Years Experience"
          />
          <Counter
            target={3999}
            duration={10}
            suffix="+"
            title="Satisfied Clients"
          />
          <Counter target={150} duration={1} suffix="+" title="Dealer Review" />
        </div>
        <h3 className="elementor-heading-title elementor-size-default text-2xl md:text-3xl font-bold text-white mb-6 mt-10 text-center">
          Want To Know More?
        </h3>
      </div>
    </div>
  );
};

export default KnowMore;

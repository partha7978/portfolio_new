import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "career", "project", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "313BAC" } : {}}
            aria-label={`${item}-navigation`}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;

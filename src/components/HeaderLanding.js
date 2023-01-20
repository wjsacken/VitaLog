import React, { useState, useEffect } from "react";


const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`site-header-one stricky  ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >

    </header>
  );
};

export default HeaderHome;

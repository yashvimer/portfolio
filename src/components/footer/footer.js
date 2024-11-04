"use client";
import React, { Fragment, useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
      <div className="footer">
        <p>Copyright {`© ${year}. All Rights Reserved.`}</p>
      </div>
    </Fragment>
  );
};

export default Footer;
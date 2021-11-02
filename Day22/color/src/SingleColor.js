import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, hex, index,setColor,color }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"}`}
        onClick={() => {
          navigator.clipboard.writeText(`#${hex}`);

          setAlert(true);
        }}
        style={{ background: `#${hex}` }}
      >
        <p className="percent-value">{`${weight}%`}</p>
        <p className="color-value">{`#${hex}`}</p>
        {alert && <p className="alert">Copied!</p>}
      </article>
    </>
  );
};

export default SingleColor;

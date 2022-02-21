import React from 'react'

export const Title = ({text,span}) => {
    return (
      <div className="title-container">
        <h1 className="title">
          {text}
          <span className="title-span">{span}</span>
        </h1>
        <p
          className="center"
          style={{
            gap: 8,
            marginTop: "auto",
            fontSize: "15px",
            color: "green",
            fontWeight: "300",
            fontFamily: "Arial",
          }}
        >
          View all{" "}
          <svg
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentcolor"
            opacity="0"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </p>
      </div>
    );
}

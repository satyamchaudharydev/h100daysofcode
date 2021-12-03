import React from "react";

const Result = ({
  id,
  company,
  logo,
  featured,
  position,
  newly,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  setfilterData,
  sortResult,
}) => {
  const tags = [role, level, ...languages, ...tools];
  return (
    <>
      <div
        className={newly && featured ? `both-rated result` : "no result"}
        key={id}
      >
        <div className="img-seciton">
          <img src={logo} alt="logo" />
        </div>

        <div className="desc">
          <div className="desc-header">
            <div className="company">{company}</div>
            <div className="newly">
              {newly && (
                <div className="new">
                  <p>NEW!</p>
                </div>
              )}
              {featured && (
                <div className="feat">
                  <p>FEATURED</p>
                </div>
              )}
            </div>
          </div>
          <div className="positon">{position}</div>
          <div className="desc-footer">
            <div className="time">{postedAt}</div>
            <div className="time">
              <span className="dot"></span>
              {contract}
            </div>
            <div className="time">
              <span className="dot"></span>
               {location}
            </div>
          </div>
        </div>

        <div className="tag-section">
          {tags.map((tag) => (
            <div className="tag" onClick={() => sortResult(tag)}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      {/* {console.log(id,company,logo,featured,position,role,level,postedAt,contract,location,languages,tools)} */}
    </>
  );
};
export default Result;

import React from "react";
import companyImg from "./assets/icon-company.svg";
import locationIcon from "./assets/icon-location.svg";
import twitter from "./assets/icon-twitter.svg";
import website from "./assets/icon-website.svg";

// import location from "./assets/icon-location.svg";
// import twitter from "./assets/icon-location.svg";
// import website from "./assets/website.svg";


const Result = ({
  login,
  bio,
  avatar_url,
  url,
  name,
  created_at,
  public_repos,
  public_gists,
  followers,
  following,
  twitter_username,
  location,
  blog,
  company
}) => {
  
  const returnText = (text) => {

  return !text ? "Not Available" : text;

  }
  return (
    <>
      <div className="img-section">
        <img className="logo" src={avatar_url} alt="" />
      </div>
      <div className="desc-section">
        <div className="desc">
          <div className="title">{name}</div>
          <div className="date">{created_at}</div>

          <div className="user">{login}</div>
          <div className="info" style={{ color: bio && "light-text" }}>
            {bio ? bio : "This profile has no bio"}
          </div>
        </div>
        <div className="stat">
          <div className="repo">
            <h3>Repos</h3>
            <p>{public_repos}</p>
          </div>
          <div className="follower">
            <h3>Followers</h3>
            <p>{followers}</p>
          </div>
          <div className="following">
            <h3>Following</h3>
            <p>{following}</p>
          </div>
        </div>
        <div className="contact">
          <div className="location each-contact">
            <img src={locationIcon} alt="" srcset="" />
            <div className="loc">{returnText(location)}</div>
          </div>
          <div className="twitter each-contact">
            <img src={twitter} alt="" srcset="" />
            <div className="twitt">{returnText(twitter_username)}</div>
          </div>
          <div className="link each-contact">
            <img src={website} alt="" srcset="" />
            <div className="link">{returnText(blog)}</div>
          </div>

          <div className="company each-contact">
            <img src={companyImg} alt="" srcset="" />
            <div className="comp">{returnText(company)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result
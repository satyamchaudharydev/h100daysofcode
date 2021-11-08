import React from "react";
import company from "./assets/icon-company.svg";
import locationIcon from "./assets/icon-location.svg";
import twitter from "./assets/icon-twitter.svg";
import website from "./assets/icon-company.svg";

// import location from "./assets/icon-location.svg";
// import twitter from "./assets/icon-location.svg";
// import website from "./assets/website.svg";


const Result = ({
  login,
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
}) => {
  console.log(login);
  return (
    <>
      <div className="main">
        <div className="img-section">
          <img className="logo" src={avatar_url} alt="" />
        </div>

        <div className="desc">
          <div className="title">{name}</div>
          <div className="user">{login}</div>
          <div className="info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </div>
        </div>
        <div className="date">{created_at}</div>
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
        <div className="location">
          <img src={locationIcon} alt="" srcset="" />
          <div className="loc">{location}</div>
        </div>
        <div className="twitter">
          <img src={twitter} alt="" srcset="" />
          <div className="twitt">{!twitter_username && 'No found'}</div>
        </div>
        <div className="link">
          <img src={website} alt="" srcset="" />
          <div className="link">{blog}</div>
        </div>

        <div className="company">
          <img src={company} alt="" srcset="" />
          <div className="comp"></div>
        </div>
      </div>
    </>
  );
};

export default Result
import React from "react";
import "./footer.css";

import SourceSprint from "../../assets/svg/footer-svg/sourcesprint-logo.png";
import FacebookIcon from "../../assets/svg/footer-svg/facebook.svg";
import LinkedInIcon from "../../assets/svg/footer-svg/linkedIn.svg";
import GitHubIcon from "../../assets/svg/footer-svg/github.svg";
import InstagramIcon from "../../assets/svg/footer-svg/instagram.svg";
import TwitterIcon from "../../assets/svg/footer-svg/twitter.svg";

import LinkImage from "../LinkImage/LinkImage";

const facebook_link = "#";
const instagram_link = "#";
const github_link = "https://github.com";
const twitter_link = "#";
const linkedin_link = "#";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={SourceSprint} alt="SourceSprint" className="footer-logo" />

        <div className="footer-social-section">
          <h2 className="footer-heading">CONNECT WITH US</h2>
          <div className="footer-social-icons">
            <LinkImage
              link={linkedin_link}
              img={LinkedInIcon}
              link_class="footer-social-link"
              img_class="footer-social-icon"
            />
            <LinkImage
              link={twitter_link}
              img={TwitterIcon}
              link_class="footer-social-link"
              img_class="footer-social-icon"
            />
            <LinkImage
              link={facebook_link}
              img={FacebookIcon}
              link_class="footer-social-link"
              img_class="footer-social-icon"
            />
            <LinkImage
              link={instagram_link}
              img={InstagramIcon}
              link_class="footer-social-link"
              img_class="footer-social-icon"
            />
            <LinkImage
              link={github_link}
              img={GitHubIcon}
              link_class="footer-social-link"
              img_class="footer-social-icon"
            />
          </div>
        </div>

        <div className="footer-copyright">
          Copyright © 2026 SourceSprint. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

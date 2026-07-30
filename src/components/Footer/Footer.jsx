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

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-1-container">
        <div className="footer-1">
          <h1 className="footer-1-heading">SOURCESPRINT</h1>
          <p className="footer-1-subtext">
            A premier open-source event designed to bridge the gap between hobbyist developers
            and active contributors. Master the tools, connect with the community, and jumpstart
            your open-source journey.
          </p>
        </div>
      </div>

      <div className="footer-2-container-lg">
        <div className="footer-2-lg-grid2">
          <h1 className="footer-2-heading">CONTACT US</h1>
          <div className="footer-2-icons">
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
          <div className="footer-2-subtext">Copyright © 2026 SourceSprint. All rights reserved.</div>
        </div>

        <LinkImage
          link={""}
          img={SourceSprint}
          link_class={""}
          img_class={"footer-2-lg-grid3"}
        />
      </div>

      <div className="footer-2-container-sm">
        <div className="footer-2-sm-grid1">
          <LinkImage
            link={""}
            img={SourceSprint}
            link_class={"footer-link"}
            img_class={"footer-2-sm-img footer-2-sm-img1"}
          />
        </div>

        <div className="footer-2-sm-grid2">
          <h1 className="footer-2-heading">CONTACT US</h1>
          <div className="footer-2-icons">
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
          <div className="footer-2-subtext">Copyright © 2026 SourceSprint. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

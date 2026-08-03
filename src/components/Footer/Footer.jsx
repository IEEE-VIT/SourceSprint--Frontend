import React from "react";
import "./footer.css";

import IEEELogo from "../../assets/svg/footer-svg/IEEELoog-Black.svg";
import FacebookIcon from "../../assets/svg/footer-svg/facebook.svg";
import LinkedInIcon from "../../assets/svg/footer-svg/linkedIn.svg";
import GitHubIcon from "../../assets/svg/footer-svg/github.svg";
import InstagramIcon from "../../assets/svg/footer-svg/instagram.svg";
import TwitterIcon from "../../assets/svg/footer-svg/twitter.svg";

import LinkImage from "../LinkImage/LinkImage";

const facebook_link = "https://www.facebook.com/share/1DRPSCxJye/";
const instagram_link = "https://www.instagram.com/ieeevitvellore/";
const github_link = "https://github.com/IEEE-VIT";
const twitter_link = "https://x.com/ieeevitvellore";
const linkedin_link = "https://www.linkedin.com/company/ieee-vit-vellore/posts/?feedView=all";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={IEEELogo} alt="IEEE VIT Vellore" className="footer-logo" />

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

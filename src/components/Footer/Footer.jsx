import React from "react";

import "./footer.css";

import IEEELogo from "../../assets/svg/footer-svg/IEEELoog-Black.svg";
import SourceSprint from "../../assets/svg/footer-svg/sourcesprint-logo.png";
import FacebookIcon from "../../assets/svg/footer-svg/facebook.svg";
import LinkedInIcon from "../../assets/svg/footer-svg/linkedIn.svg";
import GitHubIcon from "../../assets/svg/footer-svg/github.svg";
import InstagramIcon from "../../assets/svg/footer-svg/instagram.svg";
import TwitterIcon from "../../assets/svg/footer-svg/twitter.svg";

import LinkImage from "../LinkImage/LinkImage";
// import Button3 from "../Button/button-3";

const facebook_link = "https://www.facebook.com/IEEEVIT/";
const instagram_link = "https://www.instagram.com/ieeevitvellore/?hl=en";
const github_link = "https://github.com/IEEE-VIT";
const twitter_link = "https://twitter.com/ieeevitvellore";
const linkedin_link = "https://in.linkedin.com/company/ieee-vit-vellore";
const ieee_link = "https://ieeevit.org/";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-1-container">
        <div className="footer-1">
          <h1 className="footer-1-heading">IEEE-VIT SB</h1>
          <p className="footer-1-subtext">
            IEEE VIT is one of the most active student chapters inside Region 10
            of IEEE International. We're a diverse group of tech enthusiasts,
            developers and designers who live with the motto "Advancing
            Technology for Humanity".
          </p>
          <a href={ieee_link} target="_blank" rel="noreferrer">
            {" "}
            {/* <Button3>VISIT WEBSITE</Button3> */}
            {/* <button></button> */}
          </a>
        </div>
      </div>

      <div className="footer-2-container-lg">
        <LinkImage
          link={"https://ieeevit.org/"}
          img={IEEELogo}
          link_class={"footer-link"}
          img_class={"footer-2-lg-grid1"}
        />

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
          <div className="footer-2-subtext">Copyright © 2023 IEEE-VIT. All rights reserved.</div>
        </div>

        <LinkImage
          link={""}
          img={SourceSprint}
          link_class={""}
          img_class={"footer-2-lg-grid3"}
        />
      </div>

      {/* lkdfajdlfajkd-----------------------------------------------------------dj;saf */}

      <div className="footer-2-container-sm">
        <div className="footer-2-sm-grid1">
          <LinkImage
            link={"https://ieeevit.org/"}
            img={IEEELogo}
            link_class={"footer-link"}
            img_class={"footer-2-sm-img footer-2-sm-img2"}
          />
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
          <div className="footer-2-subtext">Copyright © 2023 IEEE-VIT. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

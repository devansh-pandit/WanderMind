import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 0',
  backgroundColor: '#fff',
  borderTop: '1px solid #d1d1d1',
};

const socialIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  marginTop: '0.5rem',
};

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '2vh',
};

const Footer = () => {
  const socialIcons = [
    { name: "GitHub", icon: <AiFillGithub />, link: "https://github.com/devansh-pandit" },
    { name: "Linkedin", icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/devanshpandit18/" },
    { name: "Mail", icon: <AiFillMail />, link: "mailto:devanshpandit18@gmail.com" },
    { name: "Twitter", icon: <AiFillTwitterCircle />, link: "https://x.com/pandit_dev33638" },
  ];

  return (
    <div style={mainContainerStyle} className="p-8">
      {/* Other components */}
      <div style={{ marginTop: 'auto' }}>
        <hr style={{ width: '100%', borderTop: '1px solid #d1d1d1' }} />
        <div style={footerStyle}>
          <p style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#4a4a4a' }}>
            Made by Devansh Pandit
          </p>
          <div style={socialIconStyle}>
            {socialIcons.map((item, index) => (
              <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

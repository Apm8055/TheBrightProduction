import React from "react";
import "./FloatingContact.css";

const FloatingContact = () => {
  const contactOptions = [
    {
      id: "whatsapp",
      icon: "ri-whatsapp-fill",
      link: "https://wa.me/919335928986?text=I'm%20interested%20in%20your%20service",
      label: "WhatsApp",
      color: "#25D366",
    },
    {
      id: "phone",
      icon: "ri-phone-fill",
      link: "tel:+919335928986",
      label: "Call",
      color: "#FF6B6B",
    },
    {
      id: "email",
      icon: "ri-mail-fill",
      link: "mailto:thebrightproductiontbp@gmail.com",
      label: "Email",
      color: "#FF9800",
    },
  ];

  return (
    <div className="floating-contact-container">
      <div className="contact-options">
        {contactOptions.map((option) => {
          const linkProps = {
            key: option.id,
            href: option.link,
            className: "contact-option",
            style: { "--option-color": option.color },
            title: option.label,
          };

          // Only add target and rel for external links (WhatsApp)
          if (option.id === "whatsapp") {
            linkProps.target = "_blank";
            linkProps.rel = "noopener noreferrer";
          }

          return (
            <a {...linkProps}>
              <i className={option.icon}></i>
              <span className="option-label">{option.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingContact;

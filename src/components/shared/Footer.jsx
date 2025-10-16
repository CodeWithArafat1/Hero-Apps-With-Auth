import React, { memo } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerData = {
  brand: {
    name: "HERO.IO",
    description:
      "Your one-stop marketplace for the latest and greatest mobile applications.",
  },
  linkColumns: [
    {
      title: "Quick Links",
      links: [
        { text: "Home", href: "#" },
        { text: "Categories", href: "#" },
        { text: "Trending", href: "#" },
        { text: "About Us", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "FAQ", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
      ],
    },
  ],
  socials: {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "https://www.facebook.com/ArafatNill69", Icon: Facebook },
      { name: "Twitter", href: "#", Icon: Twitter },
      { name: "Instagram", href: "#", Icon: Instagram },
      { name: "Linkedin", href: "#", Icon: Linkedin },
    ],
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              {footerData.brand.name}
            </h3>
            <p className="text-sm">{footerData.brand.description}</p>
          </div>

          {footerData.linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-white mb-4">
              {footerData.socials.title}
            </h4>
            <div className="flex space-x-4">
              {footerData.socials.links.map((social) => {
                const { Icon } = social;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm">
        <p>
          &copy; {currentYear} {footerData.brand.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
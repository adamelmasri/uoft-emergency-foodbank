import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <footer>
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
              &nbsp;{name}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

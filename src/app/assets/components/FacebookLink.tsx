// FacebookIconLink.tsx
import React from "react";

interface FacebookIconLinkProps {
  href: string;
  size?: number;
}

const FacebookIconLink: React.FC<FacebookIconLinkProps> = ({
  href,
  size = 64,
}) => {
  return (
    
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Facebook page"
      className="fb-icon-link"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size * 0.8}
        height={size * 0.8}
        className="fb-icon-svg"
      >
        <path d="M22 12.06C22 6.53 17.52 2.04 12 2.04S2 6.53 2 12.06c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.89h-2.34v6.99C18.34 21.19 22 17.06 22 12.06z" />
      </svg>

      <style jsx>{`
        .fb-icon-svg {
          fill: #9ca3af; /* gray */
          transition: fill 0.2s ease;
        }
        .fb-icon-link:hover .fb-icon-svg {
          fill: #ffffff; /* white on hover */
        }
      `}</style>
    </a>
  );
};

export default FacebookIconLink;
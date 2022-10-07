import { socials } from "@configs/socials";
import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-10">
        <li>
          <a
            href={socials.facebook.link}
            aria-label={socials.facebook.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href={socials.instagram.link}
            aria-label={socials.instagram.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href={socials.youtube.link}
            aria-label={socials.youtube.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href={socials.spotify.link}
            aria-label={socials.spotify.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaSpotify />
          </a>
        </li>
      </ul>
    </Tag>
  );
}

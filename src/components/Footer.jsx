import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer'>
      <hr className='border-border/80' />

      <div className='footer-container'>
        <p className='text-text-muted'>
          © 2024 <strong>Kyle Jeremiah Govender</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => {
            const isExternal = /^https?:\/\//.test(link.link);

            return (
              <a
                key={link.name}
                href={link.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className='w-10 h-10 rounded-panel border border-border/35 bg-bg/70 flex items-center justify-center transition-all duration-300 ease-premium hover:border-accent/70 hover:shadow-glow-accent'
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-5 h-5 object-contain'
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

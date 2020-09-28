import React from 'react';
import footer from './../sass/modules/footer.module.scss';

function Footer() {
  return (
    <div className = {footer.footer}>
        <footer>
            <span className = {footer.logo}>SN</span>
        </footer>
    </div>
  );
}

export default Footer;
import Payments from '../Payments/Payments';
import Contacts from '../Contacts/Contacts';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <p className="footer__column footer__copy">
          © 2018 «LOREMIPSUM.NET» Все права защищены.
        </p>

        <Payments className="footer__column" />
        <Contacts className="footer__column" />
      </div>
    </footer>
  );
}

export default Footer;

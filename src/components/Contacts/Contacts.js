import './Contacts.scss';

// eslint-disable-next-line react/prop-types
function Contacts({ className }) {
  return (
    <nav className={`contacts ${className}`}>
      <ul className="contacts__list">
        <li className="contacts__item">
          <a className="contacts__link" href="mailto:info@ipsum228.com">
            <div
              className="
              contacts__icon
              contacts__icon_image_mail"
            ></div>
            info@ipsum228.com
          </a>
        </li>
        <li className="contacts__item">
          <a className="contacts__link" href="#">
            <div
              className="
              contacts__icon
              contacts__icon_image_vk"
            ></div>
            Мы вконтакте
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Contacts;

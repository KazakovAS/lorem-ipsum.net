import paymentSystems from '../../images/payment-systems.svg';

import './Payments.scss';

// eslint-disable-next-line react/prop-types
function Payments({ className }) {
  return (
    <div className={`payments ${className}`}>
      <svg
        className="payments__image"
        width="100"
        height="20"
        viewBox="0 0 100 20"
        role="img"
        aria-label="Qiwi"
      >
        <use xlinkHref={`${paymentSystems}#qiwi`}></use>
      </svg>

      <svg
        className="payments__image"
        width="116"
        height="20"
        viewBox="0 0 116 20"
        role="img"
        aria-label="Yandex Money"
      >
        <use xlinkHref={`${paymentSystems}#y-money`}></use>
      </svg>

      <svg
        className="payments__image"
        width="102"
        height="20"
        viewBox="0 0 102 20"
        role="img"
        aria-label="Webmoney"
      >
        <use xlinkHref={`${paymentSystems}#webmoney`}></use>
      </svg>
    </div>
  );
}

export default Payments;

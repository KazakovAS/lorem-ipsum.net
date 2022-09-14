import './WorkScheme.scss';

// eslint-disable-next-line react/prop-types
function WorkScheme({ className }) {
  return (
    <ol className={`work-scheme ${className}`} id="work-scheme">
      <li className="work-scheme__item">
        <div
          className="
            work-scheme__item-icon
            work-scheme__item-icon_image_search"
        ></div>
        <p className="work-scheme__item-title">Lorem ipsum dolor sit amet</p>
      </li>
      <li className="work-scheme__item">
        <div
          className="
            work-scheme__item-icon
            work-scheme__item-icon_image_sale"
        ></div>
        <p className="work-scheme__item-title">Сonsecteturadipiscing elit</p>
      </li>
      <li className="work-scheme__item">
        <div
          className="
            work-scheme__item-icon
            work-scheme__item-icon_image_document"
        ></div>
        <p className="work-scheme__item-title">Sed do eiusmod tempor</p>
      </li>
      <li className="work-scheme__item">
        <div
          className="
            work-scheme__item-icon
            work-scheme__item-icon_image_mail"
        ></div>
        <p className="work-scheme__item-title">Esse cillum dolore eu fugiat</p>
      </li>
      <li className="work-scheme__item">
        <div
          className="
            work-scheme__item-icon
            work-scheme__item-icon_image_money"
        ></div>
        <p className="work-scheme__item-title">
          Excepteur sint occaecat cupidatat non proident
        </p>
      </li>
    </ol>
  );
}

export default WorkScheme;

import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__title">
            {/* eslint-disable-next-line max-len */}
            <span className="color-accent">Lorem ipsum </span> dolor sit
            ametconsectetur <span className="color-accent">adipiscing</span>
          </h1>

          {/* Тут хрен поймешь о чем оно, так шо семантика может хромать */}
          <div className="hero__description">
            <p className="hero__text">
              At vero eos et accusamus et iusto odio dignissimos ducimus!
            </p>
            <ul className="hero__list">
              <li className="hero__list-item">Totam rem aperiam eaque ipsa</li>
              <li className="hero__list-item">
                Sit voluptatem accusantium doloremque laudantium
              </li>
              <li className="hero__list-item">
                Sed ut perspiciatis, unde omnis iste natus error
              </li>
            </ul>

            <a
              href="#form"
              className="
                button
                button_accent
                hero__button"
            >
              заказать
            </a>

            <a
              href="#work-scheme"
              className="
                button
                hero__button"
            >
              подробнее
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import WorkScheme from '../WorkScheme/WorkScheme';
import Form from '../Form/Form';
import './Order.scss';

function Order() {
  return (
    <section className="order">
      <div className="container order__wrapper">
        <div className="order__heading">
          <h2 className="order__title">
            Оформление <span className="color-accent">Заказа</span>
          </h2>
          <p className="order__subtitle">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>
        </div>

        <WorkScheme className="order__work-scheme" />

        <Form className="order__form" />
      </div>
    </section>
  );
}

export default Order;

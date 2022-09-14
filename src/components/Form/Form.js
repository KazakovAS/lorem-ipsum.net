import { useState } from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import './Form.scss';

// eslint-disable-next-line react/prop-types
function Form({ className }) {
  const [selectValue, setSelectValue] = useState('');

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <form className={`form ${className}`} action="" method="POST">
      <div className="form__fields">
        <label className="form__item">
          <Select
            value={selectValue}
            name="some"
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Выберите тип системы' }}
            MenuProps={{
              disableScrollLock: true,
            }}
            defaultValue="none"
          >
            <MenuItem value="" disabled>
              Выберите тип системы
            </MenuItem>
            <MenuItem value={'Sed ut perspiciatis'}>
              Sed ut perspiciatis
            </MenuItem>
            <MenuItem value={'Nemo enim ipsam'}>Nemo enim ipsam</MenuItem>
            <MenuItem value={'Et harum quidem'}>Et harum quidem</MenuItem>
            <MenuItem value={'Temporibus autem'}>Temporibus autem</MenuItem>
            <MenuItem value={'Itaque earum rerum'}>Itaque earum rerum</MenuItem>
            <MenuItem value={'Sed ut perspiciatis'}>
              Sed ut perspiciatis
            </MenuItem>
            <MenuItem value={'Sed ut perspiciatis'}>
              Sed ut perspiciatis
            </MenuItem>
            <MenuItem value={'Nemo enim ipsam'}>Nemo enim ipsam</MenuItem>
            <MenuItem value={'Et harum quidem'}>Et harum quidem</MenuItem>
            <MenuItem value={'Temporibus autem'}>Temporibus autem</MenuItem>
            <MenuItem value={'Itaque earum rerum'}>Itaque earum rerum</MenuItem>
            <MenuItem value={'Sed ut perspiciatis'}>
              Sed ut perspiciatis
            </MenuItem>
          </Select>
        </label>
        <label className="form__item">
          <input
            className="form__field"
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            required
          />
        </label>
        <label className="form__item">
          <input
            className="form__field"
            name="name"
            placeholder="Ваше имя"
            required
          />
        </label>
        <label className="form__item form__item_name_range">
          <span className="form__label">
            Sed ut perspiciatis, unde omnis iste natus
            <span className="form__label-value">75%</span>
          </span>
          <input className="form__field" type="range" name="range" />
        </label>
        <label className="form__item form__item_type_file">
          <span className="button form__label">Прикрепить файл</span>
          <input
            className="form__field visually-hidden"
            type="file"
            name="file"
            required
          />
        </label>
      </div>
      <button className="button button_accent form__submit">Отправить</button>
    </form>
  );
}

export default Form;

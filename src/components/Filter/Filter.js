import PropTypes from 'prop-types';
import styles from './filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.div}>
      <label className={styles.label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          className={styles.input}
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/contactsSlice';
import styles from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={styles.div}>
      <label className={styles.label}>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={event => dispatch(updateFilter(event.target.value.trim()))}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

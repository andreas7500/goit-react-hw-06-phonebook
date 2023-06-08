import PropTypes from 'prop-types';
import styles from './container.module.css';

export const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

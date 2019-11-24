import PropTypes from 'prop-types';

const { shape, string } = PropTypes;

export default shape({
  _id: string.isRequired,
  name: string.isRequired,
});

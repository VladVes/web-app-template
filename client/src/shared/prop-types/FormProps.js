import PropTypes from 'prop-types';

const SelectValue = PropTypes.shape({ value: PropTypes.string, label: PropTypes.string });
const SelectOptions = PropTypes.arrayOf(SelectValue);
const File = PropTypes.shape({
  lastModified: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
});

export default {
  SelectValue,
  SelectOptions,
  File,
};

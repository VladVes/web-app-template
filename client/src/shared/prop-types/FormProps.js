import PropTypes from 'prop-types';

// usualy, you would like to use SelectValue as string or object, not as { value, label }
const SelectValue = PropTypes.shape({ value: PropTypes.string, label: PropTypes.string });
const SelectOption = PropTypes.shape({ value: PropTypes.string, label: PropTypes.string });
const SelectOptions = PropTypes.arrayOf(SelectOption);
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

import React from 'react';
import PropTypes from 'prop-types';

const FileProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

const adaptFileEventToValue = delegate => e => delegate(e.target.files);

const formatFileNames = files => Object.values(files).map(file => file.name).join(', ');

const FileInput = ({
  onChange,
  value,
  id,
  ...props
}) => (
  <div>
    <label htmlFor={id} className="btn btn-primary">
      Browse
      <input
        {...props}
        type="file"
        id={id}
        onChange={adaptFileEventToValue(onChange)}
        hidden
      />
    </label>
    {value ? formatFileNames(value) : 'Not selected'}
  </div>
);

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    // eslint-disable-next-line no-consoles
    PropTypes.string, // redux-form bug - is not set init value or set it to null, component get ''
    PropTypes.objectOf(FileProps),
  ]),
  id: PropTypes.string.isRequired,
};

FileInput.defaultProps = {
  value: null,
};

export default FileInput;

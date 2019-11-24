import { connect } from 'react-redux';
import moment from 'moment';
import FormMain from '../components/ReduxFormsComponents';

const initialValues = {
  DatePicker: moment(),
  Select: { value: 'DE', label: 'Delaware' },
  MyFileList: [],
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  initialValues: {
    ...initialValues,
    ...(state.form.componentsForm || {}).values,
    MyFileList: state.example.files.list,
  },
});

// todo: clean this useless mess
export default connect(mapStateToProps)(FormMain);

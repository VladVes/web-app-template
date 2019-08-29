# This folder contains pre-defined main components to be used with redux-form

## All of this components are expected to be used with CustomField

### CustomField
Wrapped redux-form "Field" with custom behaviour, including:
* Labling - label prop to add "name" for field (supports customization)
* Error - for validation (supports customization)+
* Other - rest of props passed down to redux-form Field as usual.

### Captcha

Main captcha implementation, comes with correct back-end validation

### DatePicker

react-datepicker component wrapped to be used withing CustomField

### DatePicker

DatePicker from react-datepicker package. Comes with default css import and moment.js

### Select

Select component based on react-select v2 beta6 with searching ability.

### Common issues
#### Lots of warnings about propTypes
Most of components are based on packages that require some custom behaviour, keep that in mind when building your app.
Most common issues - defaultValue. By default, reduxForm Field provides empty string ('') as default value which is not acceptable by most of component packages (ex. DatePicker, DropZone, Select). Leaving value field empty (for ex. as null from back-end or undefined as usual) would result in warnings in console, because, for example File couldn`t be string in terms of react-dropzone. To avoid this - dont forget to setup initialValues (see example implementation in ExampleContainer/containers/ReduxFormsComponents/index.jsx)

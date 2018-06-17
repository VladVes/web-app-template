## MODALS USAGE GUIDE

Main modals wrapper and core acitons located in _client/src/shared/modal_
For modal rendering we are using react-modal with custom wrapper.
To open/hide modal use actions from shared/modal/redux
For internal modal logic - use own actions (see examples for more info)

### Examples
#### Futher routes would be from _client/src/containers/ExampleContainer/_
_./index.js_ is entry point with two modals (open buttons)
_./containers/ExampleModal_ contains example of modals related to page.
1) _./containers/ExampleModal/components/SimpleModal_ - custom modal with default overlay and wrapper styles. Should be enough for most cases, no extra coding required.
2) _./containers/ExampleModal_/components/CustomModal_ - example of modal with full override of styles for MainModal container, including positioning and overlay

### Rich custom styles API
// todo: fill with info
Check MainModal code and CustomModal example for understanding custom styling.
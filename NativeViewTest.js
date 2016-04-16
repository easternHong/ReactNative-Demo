'use-strict'


var React = require('react-native');

var {
    requireNativeComponent,
    PropTypes
} = React;


var { requireNativeComponent, PropTypes } = require('react-native');

var iface = {
    name: 'NativeViewTest',
    propTypes: {
        src: PropTypes.string,
        borderRadius: PropTypes.number,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
    },
};

module.exports = requireNativeComponent('NativeViewTest', iface);
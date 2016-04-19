
'use-strict'

import React, {
    requireNativeComponent,
    PropTypes
}from 'react-native';

var CameraViewProps = React.createClass({
    propTypes: {
        preview: PropTypes.bool,
    ...View.propTypes,
  },

render: function() {
    return;
}
})
var CameraSurfaceView = requireNativeComponent('NativeCameraView', CameraViewProps);
function VoxImplantPreview(props) {
    var { style, ...otherProps} = props;
    return (
        <View style={style}>
            <CameraSurfaceView
                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
                preview={true}
                />
        </View>
    );
}

module.exports = CameraSurfaceView;
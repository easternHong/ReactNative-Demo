



'use-stict'


import React, {
    AppRegistry,
    Component,
    View,
    PropTypes,
    Text,
    StyleSheet,
    requireNativeComponent,
    ToastAndroid,
    NativeModules
}from 'react-native';
var Button = require('react-native-button');
/////////////////////////////////////////////////////////////
//获取java的module
var nativeCameraModule = NativeModules.NativeCameraModule;
function initCamera() {
    nativeCameraModule.initCamera();
};
function startPreview() {
    nativeCameraModule.startPreview();
};
function stopPreview() {
    nativeCameraModule.stopPreview();
}
/////////////////////////////////////////////////////////////
//获取js导出的module
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
/////////////////////////////////////////////////////////////


class Living extends Component {

    render() {
        return (
            <View>
                <Text style={styles.cameraViewHolderStyle}>
                    what the hell!!!
                </Text>
                <Button onPress={this.press2Init}>
                    Init!
                </Button>
                <VoxImplantPreview style={styles.cameraSurfaceStyle}
                    preview={true}>
                </VoxImplantPreview>
            </View>
        );
    }

    press2Init() {
        ToastAndroid.show('Init', ToastAndroid.SHORT);
        initCamera();
    }
}
const styles = StyleSheet.create({
    cameraViewHolderStyle: {
        flex: 1,
    },
    cameraSurfaceStyle: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
        width: 300,
        height: 200,
        justifyContent: 'center'
    }
});


AppRegistry.registerComponent('Living', () => Living);
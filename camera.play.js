



'use-stict'


import React, {
    AppRegistry,
    Component,
    View,
    Text,
    StyleSheet,
    requireNativeComponent,
    ToastAndroid,
    NativeModules
}from 'react-native';
var Button = require('react-native-button');
var CameraSurfaceView = requireNativeComponent('./NativeCameraView');

/////////////////////////////////////////////////////////////
//NativeModules.NativeCameraModule，表示React引擎会加载对应的NativeCameraModule.java的字节码。
//获得java module 对象实例
var nativeCameraModule = NativeModules.NativeCameraModule;

function CameraModule() {
    nativeCameraModule.init();
    ToastAndroid.show('JsToast', ToastAndroid.SHORT);
}
/////////////////////////////////////////////////////////////

class Living extends Component {

    render() {
        var cameraPreview = CameraSurfaceView;
        return (
            <View>
                <Text style={styles.cameraViewHolderStyle}>
                    what the hell!!!
                </Text>
                <CameraSurfaceView style={styles.cameraSurfaceStyle}>
                </CameraSurfaceView>
                <Button onPress={this.press2Init}>
                    Init!
                </Button>
            </View>
        );
    }

    press2Init() {
        ToastAndroid.show('Init', ToastAndroid.SHORT);
        CameraModule();
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
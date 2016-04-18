



'use-stict'


import React, {
    AppRegistry,
    Component,
    View,
    Text,
    StyleSheet,
    requireNativeComponent,
    ToastAndroid
}from 'react-native';
var Button = require('react-native-button');
var CameraSurfaceView = requireNativeComponent('./NativeCameraView');


class Living extends Component {

    render() {
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
/**
 * 此类演示js回调java层的函数,CallJava.js
 * 
 */


'use strict'


import React, {
    NativeModules,
    requireNativeComponent,
    AppRegistry,
    Component,
    View,
    Text,
    StyleSheet
} from 'react-native';
var Button = require('react-native-button');
var NativeView = require('./NativeViewTest');
import JsCallModule from './CallJava';
import ToggleButton from './ToggleButton';

//类名必须和 export default xxx 一致,一个module的文件名必须一致
class InterCall extends Component {
    //construct
    InterCall() {

    };
    render() {
        return (
            <View>
                <Button style={styles.welcome} onPress={this.handlePressCallNoneParams}>
                    callNoneParams!
                </Button >
                <Button style={styles.welcome} onPress={this.handlePressCallStr}>
                    callNoneStr!
                </Button >
                <Button style={styles.welcome} onPress={this.handlePressCallInt}>
                    callNoneInt!
                </Button >
                <Button style={styles.welcome} onPress={this.handlePressCallLong}>
                    callNoneLong!
                </Button >
                <ToggleButton
                    onPress={() => this.switchMute() }
                    name="speaker"
                    style={[styles.icon, styles.keypad_icon]}
                    size={30}
                    color="#2B2B2B"
                    pressed={this.switchMute()} />
            </View>
        );
    }
    handlePressCallNoneParams() {
        JsCallModule.SDK.callJavaNone();
    };
    handlePressCallStr() {
        JsCallModule.SDK.callJavaStr('good Str called');
    };
    handlePressCallInt() {
        JsCallModule.SDK.callJavaInt(10);
    };
    handlePressCallLong() {
        JsCallModule.SDK.callJavaFloat(10.222);
    };
    switchMute() {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    phone_icon: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        borderColor: '#4CD964',
        backgroundColor: '#4CD964',
        marginHorizontal: 10
    },
    keypad_icon: {
        borderColor: '#2B2B2B',
        backgroundColor: '#000000',
        marginHorizontal: 10,
        borderWidth: 0.5
    },
});


AppRegistry.registerComponent('InterCall', () => InterCall);
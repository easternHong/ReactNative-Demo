/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    NativeModules,
    Image,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';

var HttpView = require('./http');
var Button = require('react-native-button');




class HelloWorld extends Component {
    configureScenceAndroid() {
        return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    renderSceneAndroid(route, navigator) {
        _navigator = navigator;
        if (route.id === 'main') {
            return (
                <View>
                    <Button style={styles.container} onPress={this.handlePress}>
                        callJavaMethod!
                    </Button >
                    <TouchableOpacity
                        onPress={() => _navigator.push({ title: 'Http', id: 'http' }) }
                        style={ styles.button}>
                        <Text  style={styles.welcome}>
                            push</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (route.id === 'http') {
            return (
                <HttpView navigator={navigator} route={route}/>
            );
        }
    }

    render() {
        var configureScence = this.configureScenceAndroid;
        var renderScene = this.renderSceneAndroid;
        return (
            <View>
                <Button style={styles.container} onPress={this.handlePress}>
                    callJavaMethod!
                </Button >
            </View>
        );
    }
    handlePress() {
        console.log('god,you');
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);




'use-strict'


import React, {
    Component,
    PropTypes,
    NativeModules
}from 'react-native';

/////////////////////////////////////////////////////////////

//NativeModules.NativeCameraModule，表示React引擎会加载对应的NativeCameraModule.java的字节码。
//获得java module 对象实例
var nativeCameraModule = NativeModules.NativeCameraModule;

/////////////////////////////////////////////////////////////

function CameraInterface() {
    this.initCamera() = function() {
        nativeCameraModule.initCamera();
    };
    this.startPreview() = function() {
        nativeCameraModule.startPreview();
    };
    this.stopPreview() = function() {
        nativeCameraModule.stopPreview();
    }
}



module.exports = CameraInterface;
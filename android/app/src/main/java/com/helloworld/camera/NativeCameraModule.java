package com.helloworld.camera;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by hunt on 16-4-15.
 * js 回调java.
 */
public class NativeCameraModule extends ReactContextBaseJavaModule implements CameraInterface {

    private static final String TAG = "NativeCameraModule";
    private Context context;

    public NativeCameraModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactProp(name = "preview")
    public void startPreview(NativeCameraView view, Boolean preview) {
        Log.d(TAG, "startPreview");
    }

    @ReactMethod
    public void init() {
        Log.d(TAG, "INIT");
    }

    @Override
    @ReactMethod
    public void initCamera() {
        Log.d(TAG, "initCamera");
    }

    @Override
    @ReactMethod
    public void startPreview() {
        Log.d(TAG, "startPreview");
    }

    @Override
    @ReactMethod
    public void stopPreview() {
        Log.d(TAG, "stopPreview");
    }
}

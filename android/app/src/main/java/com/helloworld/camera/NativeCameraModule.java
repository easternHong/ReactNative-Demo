package com.helloworld.camera;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by hunt on 16-4-15.
 * js 回调java.
 */
public class NativeCameraModule extends ReactContextBaseJavaModule {

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

    public void startPreview(NativeCameraView view) {

    }

    @ReactMethod
    public void init() {
        Log.d(TAG, "INIT");
    }
}
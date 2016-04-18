package com.helloworld.camera;

import android.util.Log;

import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by hunt on 16-4-15.
 */
public class NativeCameraManager extends SimpleViewManager<NativeCameraView> {
    private static final String TAG = "NativeCameraView";

    @Override
    public String getName() {
        return TAG;
    }

    @Override
    protected NativeCameraView createViewInstance(ThemedReactContext reactContext) {
        return new NativeCameraView(reactContext);
    }


}

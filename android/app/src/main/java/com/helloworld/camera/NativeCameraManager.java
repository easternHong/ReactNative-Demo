package com.helloworld.camera;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by hunt on 16-4-15.
 */
public class NativeCameraManager extends SimpleViewManager<NativeCameraView> {
    @Override
    public String getName() {
        return "NativeCameraView";
    }

    @Override
    protected NativeCameraView createViewInstance(ThemedReactContext reactContext) {
        return new NativeCameraView(reactContext);
    }
}

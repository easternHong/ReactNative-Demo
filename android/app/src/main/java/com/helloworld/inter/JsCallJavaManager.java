package com.helloworld.inter;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by hunt on 16-4-15.
 */
public class JsCallJavaManager extends SimpleViewManager<JsCallJavaView> {
    @Override
    public String getName() {
        return "JsCallJavaView";
    }

    @Override
    protected JsCallJavaView createViewInstance(ThemedReactContext reactContext) {
        return new JsCallJavaView(reactContext);
    }
}

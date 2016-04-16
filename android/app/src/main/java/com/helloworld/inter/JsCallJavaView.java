package com.helloworld.inter;

import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.widget.ImageView;

import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

/**
 * Created by hunt on 16-4-15.
 */
public class JsCallJavaView extends ImageView {
    public JsCallJavaView(Context context) {
        this(context, null);
    }

    public JsCallJavaView(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public JsCallJavaView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    private Boolean preview;
    private String callId;

    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, @Nullable String src) {
//        view.setSource(src);
        view.setSource(src, null);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }
}

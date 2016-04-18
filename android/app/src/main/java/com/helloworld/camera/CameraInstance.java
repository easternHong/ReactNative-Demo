package com.helloworld.camera;

import android.view.TextureView;

/**
 * Created by hunt on 16-4-18.
 */
public class CameraInstance {

    static CameraInstance instance;

    public static CameraInstance getInstance() {
        if (instance == null) {
            synchronized (CameraInstance.class) {
                if (instance == null) {
                    instance = new CameraInstance();
                }
            }
        }
        return instance;
    }

    public void setLocalRenderView(TextureView view) {

    }
}

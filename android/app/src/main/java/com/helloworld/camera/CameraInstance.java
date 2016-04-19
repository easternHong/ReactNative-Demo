package com.helloworld.camera;

import android.content.Context;
import android.hardware.Camera;
import android.util.Log;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import java.io.IOException;

/**
 * Created by hunt on 16-4-18.
 */
public class CameraInstance implements SurfaceHolder.Callback {

    static CameraInstance instance;
    private Context context;
    Camera camera;

    private CameraInstance() {
    }

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

    public void setLocalRenderView(SurfaceView view) {
        Log.d("CameraInstance", "setLocalRenderView");
        this.context = view.getContext();
        camera = Camera.open(1);
        SurfaceHolder surfaceHolder = view.getHolder();
        surfaceHolder.addCallback(this);
        Camera.Parameters param
                = camera.getParameters();
        param.setPreviewSize(352, 288);
        camera.setParameters(param);
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {
        Log.d("CameraInstance", "surfaceCreated");
        try {
            camera.setPreviewDisplay(holder);
        } catch (IOException e) {
            e.printStackTrace();
        }
        camera.startPreview();
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
        Log.d("CameraInstance", "surfaceChanged");
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        Log.d("CameraInstance", "surfaceDestroyed");
        releaseCamera();
    }

    private void releaseCamera() {
        if (camera != null) {
            camera.stopPreview();
            camera.release();
            camera = null;
        }
    }
}

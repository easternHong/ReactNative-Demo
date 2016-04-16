package com.helloworld.inter;

import android.content.Context;
import android.os.Handler;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by hunt on 16-4-15.
 * js 回调java.
 */
public class JsCallJavaModuleTest extends ReactContextBaseJavaModule {

    private static final String TAG = "JsCallJavaModuleTest";
    private Context context;

    public JsCallJavaModuleTest(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Override
    public String getName() {
        return "JsCallJavaModuleTest";
    }

    //重载尝试
    @ReactMethod
    public void onCallNoneParams() {
        Log.d(TAG, "onCallNoneParams: ThreadId: " + Thread.currentThread().getId());
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(context, "Android :onCallNoneParams", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @ReactMethod
    public void onCallStr(final String content) {
        Log.d(TAG, "onCallStr: : " + content);
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(context, "Android :onCallStr: " + content, Toast.LENGTH_SHORT).show();
            }
        });
    }

    @ReactMethod
    public void onCallInt(final int count) {
        Log.d(TAG, "onCallInt(int): " + count);
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(context, "Android :onCallInt: " + count, Toast.LENGTH_SHORT).show();
            }
        });
    }

    @ReactMethod
    public void onCallFloat(final float count) {
        Log.d(TAG, "onCallLong(int): " + count);
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(context, "Android :onCallFloat: " + count, Toast.LENGTH_SHORT).show();
            }
        });
    }
}

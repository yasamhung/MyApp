package com.myapp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import javax.annotation.Nonnull;

public class HelloWorldModule extends ReactContextBaseJavaModule {
    public HelloWorldModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "HelloWorld";
    }
    //一定要加@ReactMethod才可以被ReactNative認知

    /**
         *
         * @param errorCallback
         * @param successCallback
         */
    @ReactMethod
    public void sayHi(Callback errorCallback, Callback successCallback){
        try{
            System.out.print("Call Java");
            successCallback.invoke("Callback : Greetings  from Java", "You got Java");
        }catch (IllegalViewOperationException Ie){
            errorCallback.invoke(Ie.getMessage());
        }
    }

}

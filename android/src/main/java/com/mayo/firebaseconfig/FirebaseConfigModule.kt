package com.mayo.firebaseconfig

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import org.json.JSONObject

class FirebaseConfigModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "FirebaseConfigExtractor"
    }

    @ReactMethod
    fun extractFirebaseConfig(promise: Promise) {
        try {
            val context: Context = reactApplicationContext
            val assetManager = context.assets
            val inputStream = assetManager.open("google-services.json")
            val size = inputStream.available()
            val buffer = ByteArray(size)
            inputStream.read(buffer)
            inputStream.close()

            val jsonStr = String(buffer, Charsets.UTF_8)
            val jsonObject = JSONObject(jsonStr)

            val configData = parseFirebaseConfig(jsonObject)
            promise.resolve(configData.toString())
        } catch (e: Exception) {
            promise.reject("Firebase Config Error", e.message)
        }
    }

    private fun parseFirebaseConfig(jsonObject: JSONObject): JSONObject {
        val projectInfo = jsonObject.getJSONObject("project_info")
        val client = jsonObject.getJSONArray("client").getJSONObject(0)
        val apiKey = client.getJSONArray("api_key").getJSONObject(0).getString("current_key")
        val mobilesdkAppId = client.getJSONObject("client_info").getString("mobilesdk_app_id")

        val config = JSONObject()
        config.put("apiKey", apiKey)
        config.put("projectId", projectInfo.getString("project_id"))
        config.put("authDomain", "${projectInfo.getString("project_id")}.firebaseapp.com")
        config.put("storageBucket", projectInfo.getString("storage_bucket"))
        config.put("messagingSenderId", projectInfo.getString("project_number"))
        config.put("appId", mobilesdkAppId)

        // Add more fields if necessary

        return config
    }
}

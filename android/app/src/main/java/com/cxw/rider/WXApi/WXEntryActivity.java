package com.cxw.rider.WXApi;

import android.content.Intent;
import android.util.Log;

import com.umeng.socialize.UMShareAPI;
import com.umeng.socialize.weixin.view.WXCallbackActivity;
import com.umeng.socialize.UMAuthListener;
import com.umeng.socialize.bean.SHARE_MEDIA;
import java.util.Map;

public class WXEntryActivity extends WXCallbackActivity {


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
    }

}


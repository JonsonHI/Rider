/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import <CodePush/CodePush.h>
#import <React/RCTBridge.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <UMShare/UMShare.h>
#import <UMCommon/UMConfigure.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  [UMConfigure setLogEnabled:true];
    /* 设置友盟appkey */
    [UMConfigure initWithAppkey:@"5dd4a13e4ca357f635000273" channel:@"App Store"];
  
    /*
     * 关闭强制验证https，可允许http图片分享，但需要在info.plist设置安全域名
     */
    [UMSocialGlobal shareInstance].isUsingHttpsWhenShareContent = NO;
  
    /*
     设置微信的appKey和appSecret
     */
    [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_WechatSession appKey:@"wx7ba1f905c433f18d" appSecret:@"d6139e5985dea782129659b91406a911" redirectURL:nil];
  
  
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"Rider"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  BOOL result = [[UMSocialManager defaultManager] handleOpenURL:url];
  if (!result) {
    return [RCTLinkingManager application:app openURL:url options:options];
  }
  return YES;
}

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url
{
  BOOL result = [[UMSocialManager defaultManager] handleOpenURL:url];
  if (!result) {
    // 其他如支付等SDK的回调
   
  }
  return result;
}

 //支持所有iOS系统
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  //6.3的新的API调用，是为了兼容国外平台(例如:新版facebookSDK,VK等)的调用[如果用6.2的api调用会没有回调],对国内平台没有影响
  BOOL result = [[UMSocialManager defaultManager] handleOpenURL:url];
  if (!result) {
    // 其他如支付等SDK的回调
    return [RCTLinkingManager application:application openURL:url
                           sourceApplication:sourceApplication annotation:annotation];
  }
  return result;
}

@end

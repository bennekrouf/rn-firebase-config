#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(FirebaseConfigExtractor, NSObject)

RCT_EXTERN_METHOD(extractFirebaseConfig: (RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end




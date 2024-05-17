package expo.modules.sdk51repro.javamodule;

import expo.modules.kotlin.Promise;

public class JavaModule {
  public void promiseNullFromJava(Promise promise) {
    promise.resolve(null);
  }

  public void promiseBooleanFromJava(Promise promise) {
    promise.resolve(true);
  }
}

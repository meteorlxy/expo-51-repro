package expo.modules.sdk51repro

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import expo.modules.sdk51repro.javamodule.JavaModule

class Expo51ReproModule : Module() {
  private var javaModule: JavaModule? = null

  override fun definition() = ModuleDefinition {
    Name("Expo51Repro")

    OnCreate {
      javaModule = JavaModule()
    }

    AsyncFunction("promiseNullFromKotlin") { promise: Promise ->
      promise.resolve(null)
    }

    AsyncFunction("promiseNullFromJava") { promise: Promise ->
      javaModule?.promiseNullFromJava(promise)
    }

    AsyncFunction("promiseBooleanFromJava") { promise: Promise ->
      javaModule?.promiseBooleanFromJava(promise)
    }
  }
}

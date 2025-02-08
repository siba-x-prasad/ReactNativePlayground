# Common Error And solutions
- [Best Practice Structure](https://www.linkedin.com/pulse/building-solid-structure-best-practices-react-native-samer-abdalla)
-

## Setting Up the React Native Development Environment

- Step1 -> Install Node
- step2 -> install react native expo **npm install -g expo-cli**
- Step3 -> Next, install Yarn, the preferred package manager for Expo: **npm install -g yarn**

## we can use create-react-native-app or expo to create react native app

## Create App using expo command

- expo init appName
- npm start or yarn start
- to add api yarn add pokemon axios

## [Navigation](https://reactnative.dev/docs/navigation)

- npm install @react-navigation/native @react-navigation/native-stack
- For Expo
  - npx expo install react-native-screens react-native-safe-area-context
- For Cli
  - npm install react-native-screens react-native-safe-area-context

## error Looks like your iOS environment is not properly set

```
An error occurred while installing json (2.6.3), and Bundler cannot continue.
Make sure that `gem install json -v '2.6.3' --source 'https://rubygems.org/'`
succeeds before bundling.

In Gemfile:
  cocoapods was resolved to 1.13.0, which depends on
    cocoapods-core was resolved to 1.13.0, which depends on
      algoliasearch was resolved to 1.27.5, which depends on
        json
✖ Installing Ruby Gems
error Looks like your iOS environment is not properly set. Please go to https://reactnative.dev/docs/environment-setup?os=macos&platform=android and follow the React Native CLI QuickStart guide for macOS and iOS.
```

## Android app installation

```
export PATH=$PATH:/Users/sibaprasad/Library/Android/sdk/platform-tools
export PATH=$PATH:/Users/sibaprasad/Library/Android/sdk/tools

android PATH : /Users/sibaprasad/Library/Android/sdk

export ANDROID_HOME=/Users/sibaprasad/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## ANdroid error while running

```
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> Could not determine the dependencies of null.
   > SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/sibaprasad/Workspace/ReactNative/ReactNativePlayground/rnWorld/android/local.properties'.
```

- Solution
-

## Android Emulator

- emulator -list-avds
- To start your emulator
- emulator -avd name-of-your-emulator

## error Failed to launch emulator

- npm instal
- If ther are any error
```
  npm install --legacy-peer-deps 
```
- completely ignores all peerDependencies using the newest version without pinning on file package-lock.json

```
npm install --force 
```
- forces the use of the newest, pinning all the versions on package-lock.json

## Error 1
```
Starting: android
node:internal/modules/cjs/loader:1147
  throw err;
```
- npm cache clean --force

## Error 2
```
Error: Cannot find module '/Users/sibaprasad/Workspace/rn/SpendUtility/android'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```
## Error 3
```
Android project not found. Are you sure this is a React Native project? 

/Users/sibaprasad/.zprofile:3: /Library/Java/JavaVirtualMachines/jdk1.8.0_77.jdk/Contents/Home not found
/Users/sibaprasad/Workspace/rn/SpendUtility/node_modules/.generated/launchPackager.command ; exit;
/Users/sibaprasad/.zshrc:3: /Library/Java/JavaVirtualMachines/jdk1.8.0_77.jdk/Contents/Home not found
sibaprasad@sibaprasads-MBP ~ % /Users/sibaprasad/Workspace/rn/SpendUtility/node_modules/.generated/launchPackager.command ; exit;
warn Package react-native-sqlite-storage contains invalid configuration: "dependency.platforms.ios.project" is not allowed. Please verify it's properly linked using "npx react-native config" command and contact the package maintainers about this.
warn =================================================================================================
warn From React Native 0.73, your project's Metro config should extend '@react-native/metro-config'
warn or it will fail to build. Please copy the template at:
warn https://github.com/react-native-community/template/blob/main/template/metro.config.js
warn This warning will be removed in future (https://github.com/facebook/metro/issues/1018).
warn =================================================================================================
info Welcome to React Native v0.76
info Starting dev server on port 8081...

## Unable to run simctl:
- Error: xcrun simctl help exited with non-zero code: 72
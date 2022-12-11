# Problem Faced and Solutions in REACT NATIVE
- Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux

## Important Website for settup
- https://reactnative.dev/docs/environment-setup
- https://reactnative.dev/docs/getting-started

## How RN works internally
- https://www.reactnative.guide/3-react-native-internals/3.1-react-native-internals.html

## Style React Native
- https://reactnative.dev/docs/style
## Alert Dialog
- https://reactnative.dev/docs/alert
## Other design - RN ui components
- https://reactnativepaper.com/
## All React Native UI widgets
- https://reactnative.dev/docs/components-and-apis
## Database
- https://aboutreact.com/example-of-sqlite-database-in-react-native/

## Nested Component navigation
- https://reactnavigation.org/docs/connecting-navigation-prop/

## Create React. Native Project using CLI
```
    npx react-native init siba
    react-native init MyApp --package=com.organization.project.app
    npx react-native init rntypescriptplayground  --package=com.swasi.rntypescript --template react-native-template-typescript
    npx react-native init MyApp --template react-native-template-typescript
```
## Add Typescript to an existing project
- https://reactnative.dev/docs/typescript
- Command to add typescript to an existing project
```
    npm install typescript @types/react @types/react-native 
    @types/react-test-renderer @types/jest
    TypeScript Configuration
    tsc --init
```

## How to Run project in android
- npx  react-native run-android
- npx react-native run-android --no-jetifier
## TO Run in IOS
- npx  react-native run-ios
- Open iOS folder and click on the .xcworkspace file
- Then run in the Xcode

## Clear Cache
- rm -rf node_modules/ && 
- yarn cache clean &&
- yarn install && 
- yarn start -- --reset-cache

# Libraries

## Redux
```
    npm install react-redux
    npm install redux
    npm install redux
    npm install react-redux
    npm install --save-dev redux-devtools
    npm install --save redux-saga
    npm i redux-form
```
## SQLITE
```
    npm install react-native-sqlite-storage --save
```
## NAVIGATION
```
    npm install @react-navigation/native --save
    npm install @react-navigation/stack --save
```
## React Native Navigation
- npm install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native@^6.x @react-navigation/stack@^6.x


## Redux Toolkit
- https://redux-toolkit.js.org/tutorials/quick-start
- https://javascript.plainenglish.io/how-to-build-a-simple-todo-app-in-react-native-using-redux-toolkit-eb9ca5409a1d

## Install Axios network call
- npm i react-native-axios
## Navigation
- https://reactnavigation.org/docs/hello-react-navigation/
- https://reactnavigation.org/docs/getting-started/
```
    npm i @react-navigation/native
    npx install @react-navigation/native-stack
    npx install react-native-screens react-native-safe-area-context
```
## React Native with TypeScript
- https://reactnative.dev/docs/typescript

## DateTime Picker
- https://www.npmjs.com/package/react-native-reanimated-datepicker

# SET UP IN EXISTING PROJECT
- Redirect to the folder 
- npm install or nix install

## Errors you might get
- npm notice Beginning October 4, 2021, all connections to the npm registry - including for package installation - must use TLS 1.2 or higher
```
First Step: npm set registry=https://registry.npmjs.org/
Second Step: npm install -g https://tls-test.npmjs.com/tls-test-1.0.0.tgz
```
- Network Error
```
npm set registry=https://registry.npmjs.org/
npm cache clear --force
npm cache verify
npm install
```

## IOS
- Cd iOS
- Pod install


## COMMON ISSUES AND. THEIR SOLUTION
```
    npm config set strict-ssl false
    npm config rm proxy
    npm config rm https-proxy
    yarn config delete proxy
```
## ERROR  Invariant Violation: Module AppRegistry is not a registered callable module
- Solution 1
- npm start --reset-cache
- npm start android
- npm start ios

## Solution 2
- rm -rf node_modules
- npm i or yarn i
- TypeError: cli.init is not a function for react native
- npx react-native init ProjectName --version 0.68.2

- Error: Command failed: yarn add react-native --exact. 
- Error in. Network connection, retrying
- npm config set registry "https://registry.npmjs.org”. 

- getaddrinfo ENOTFOUND



npm WARN old lockfile
Multiple ways to solve this

1. npm install --package-lock-only
2. Down grade nom version
3. Ignore this warning




## IOS
```
pod install failed on macOS
step 1 
brew install cocoapods 
step 2 
sudo arch -x86_64 gem install ffi 
step 3 
arch -x86_64 pod install
[!] No `Podfile' found in the project directory.
```

## React Native android build failed. SDK location not found
```
* Go to the android/ directory of your react-native project
* Create a file called local.properties with this line:
sdk.dir = /Users/USERNAME/Library/Android/sdk (PATH OF THE SDK LOCATION)
```

## Project Folder Structure
- https://stackoverflow.com/questions/60647270/best-practice-to-make-project-structure-react-native
- https://learn.habilelabs.io/best-folder-structure-for-react-native-project-a46405bdba7

## Topics
1. How react Native works internally
2. Debugging React Native Application
3. Component - Functional, class bases
4. Props
5. State
6. Navigation
7. User Input
8. DESIGN, UI components
9. , Network Call
10. Notification
11. Access Native features - Camera, GPS etc
12. Redux



# ANDROID ISSUES
- error Android project not found. Are you sure this is a React Native project?
```
In the CMD Project root run react-native upgrade.
if you are still getting issues, make sure you have react-native in dependencies json in package.json, add it if not
if you are still getting issues, get the version of react native in cmd using react-native -v and check if the value returned in cmd and package.json are same. update the package.json with the value returned in cmd
```

- Could not determine the dependencies of task ':app:mergeDebugAssets'
```
./gradlew clean
npm install
```
## SDK location not found. Define location with an ANDROID_SDK_ROOT environment
- Step1: Check whether all your "SDK Platforms" and "SDK Tools" is installed and Updated"
- Step2: Create "local.properties" file in android folder and paste the following
- sdk.dir = /Users/si20055491/Library/Android/sdk
- THIS SHOULD SOLVE YOUR PROBLEMS

## Android -  Kotlin could not find the required JDK 
- Failed to query the value of task ':react-native-gradle-plugin:compileKotlin' property 'compilerRunner$kotlin_gradle_plugin'.
- Kotlin could not find the required JDK tools in the Java installation. Make sure Kotlin compilation is running on a JDK, not JRE.
```
export PATH=$PATH:/Applications/Android Studio.app/contents/jre/Contents/Home/bin/
export JAVA_HOME=/Applications/"Android Studio.app"/contents/jre/jdk/Contents/Home
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home
```
## Error: spawnSync adb ENOENT at Object.spawnSync
```
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home
export ANDROID_HOME=/Users/si20055491/Library/Android/sdk
export PATH=$ANDROID_HOME/emulator:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/tools/bin:$PATH
Android development environment set up: https://reactnative.dev/docs/environment-setup
```
## TypeError: Cannot read properties of undefined (reading 'configurations')

## Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
- SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/SI20055491/Workspace/ReactNative/rntypescriptplayground/android/local.properties'.
```
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home
export ANDROID_HOME=/Users/si20055491/Library/Android/sdk
```


## IOS BUILD ISSUES AND SOLUTION
- git config --global http.sslVerify false
- I struggled with this for several hours today and this is what finally worked for me:
```
1. sudo gem update cocoapods --pre
2. pod update
3. clean
4. build
```
- Error: EISDIR: illegal operation on a directory, read
- Check if other apps running in metro

## How to see the console.log in Simulator
- From the iOS simulator, press (⌘+D) and press Remote JS Debugging. This will open a resource, http://localhost:8081/debugger-ui on localhost. 
- From there, use the Chrome Developer tools JavaScript console to view console.log

## Cocoapod OpenSSL installation issue
- Probably, there is a misconfiguration in your Xcode... try this:
- preferences -> Locations -> Set The command line tools.

## YogaKit/YogaKit.modulemap' not found
- https://stackoverflow.com/questions/63261150/yogakit-modulemap-not-found-after-running-the-ios-simulator

- After update, open the below file
- myrnapp.xcworkspace

## Command PhaseScriptExecution failed with a nonzero exit code
- Xcode > Preferences > Accounts
- signing in and out

info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
npx react-native run-android --no-jetifier

Clear React Native Metro Cache
npm start -- --reset-cache

## SET UP IPHONE DEVELOPER
Open Xcode -> preference -> accounts -> add your app account
Then Click. On manage Certificate and add certificate.

## Signing for "rnplayground" requires a development team. 
- Select a development team in the Signing & Capabilities editor.
- Go to you app in Xcode
- Under signing & Capabilities
- Select Team

## Run the app, now go to settings of the device
- General -> VPN& Device management -> Trust this app

## React Native Client called nw_connection_get_connected_socket on unconnected nw_connection
1. To select XCode10 build system: In Xcode go to File -> Project Settings (or Workspace settings) -> Build system, in which change the New Build System to Legacy Build System.


Command ParseScriptExecution Failed with a nonzero exit code

Showing Recent Messages Build target FBReactNativeSpec of project Pods with configuration Debug PhaseScriptExecution


Generate IOS and Android folder
https://www.codegrepper.com/code-examples/javascript/create+android+and+ios+folder+react+native

npm i react-native-eject
npm i @react-native-community/cli
react-native eject


# USeful Commands [More Commands](https://github.com/react-native-community/cli/blob/main/docs/commands.md)

## React Cli is depricated, expo is recomended
- brew install node
- brew install watchman
- Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.
- **Java Development Kit**
- We recommend installing the OpenJDK distribution called Azul Zulu using Homebrew. Run the following commands in a Terminal after installing Homebrew:
- brew install --cask zulu@17
- export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
- **setup for android development**
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
- npx install-expo-modules@latest (automatic installation)
- npm install expo (Manual)
- 

## IOS
```
npx pod-install
npx expo run:ios
```
## Migrate to Expo CLI
- npx install-expo-modules@latest
- npx expo run:android
- npx expo run:ios

- npm install
- npx react-native upgrade
- rm -rf node_modules && npm install
- npx react-native run-android
- npx react-native run-ios
- npx start
- npx react-native init

## To run on EMulator

- react-native run-ios
- react-native run-android
- npx react-native run-android --deviceId='DeviceId'
- adb devices (TO get specific device id)

## Clean watchman or Clear bundle

- watchman watch-del-all

## Using cl

- npx react-native init [PROJECT-NAME]
- react-native init [PROJECT-NAME] --package=com.organization.project.app
- cd [PROJECT-NAME]
- npx react-native run-android
- npx react-native run-ios
- npx react-native build-android
- npx react-native build-ios
- npx react-native link [LIBRARY-NAME] ( Link dependencies to native projects )
- watchman watch-del-all (If something don’t run as expected, maybe you need to clear and create a new bundle with this command.)
- To Start Metro - npm start
- To Run in IOS - npm run ios

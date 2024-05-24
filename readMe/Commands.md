# USeful Commands [More Commands](https://github.com/react-native-community/cli/blob/main/docs/commands.md)

- npm install
- npx react-native upgrade
- rm -rf node_modules && npm install
- npx react-native run-androi
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

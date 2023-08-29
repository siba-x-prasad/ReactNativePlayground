# React Native Set up from scrach
- There are 2 ways you can set up react native app for mobile
- 1. Using react native cli
- 2. Using react native expo

## Basic commands for React Native
- Install Jaja 1.8
- Set up java home if you are using Windows laptop
- Install Python 2
- Install Android Studio (For React Native android)
- Install Xcode (For React Native IOS)

## React Native Commands
- npm install -g react-native-cli
- react-native init DemoProject (You can name your project as anything)
- npx react-native init AwesomeProject
- react-native run-android (To run in android device)
- react-native run-ios (To run in ios Device)
- npx react-native run-ios


## Web Setup
- npm install react-dom react-native-web
- npm install react-dom react-native-web --legacy-peer-deps
- npm install --save-dev babel-plugin-react-native-web (Babel Plugin for build time optimization)
- npm install --save-dev babel-plugin-module-resolver  (Babel Module Aliasing)

## Metro
- Metro is a JavaScript bundler which takes in options, an entry file, and gives you a JavaScript file including all JavaScript files back. 
- Every time you run a react native project, a compilation of many javascript files are done into a single file. 
- This compilation is done by a bundler which is called Metro.



# The React Native Learning Roadmap
- This roadmap is broken into four phases. The key is to build something at each phase.

## Phase 1: The Foundations (The First 2-4 Weeks)
- Goal: Understand the core concepts, build simple single-screen and multi-screen apps, and get comfortable with the development environment.

## Key Topics:

- **Environment Setup:**
- Start with Expo Go: Don't get bogged down with native toolchains (Xcode, Android Studio) at first. Use Expo. It's the fastest way to get started. You'll write your app, and the Expo Go app on your phone will run it instantly.
Understand Expo vs. React Native CLI: Learn the difference. Expo is a framework on top of React Native that simplifies development. The CLI gives you more control but has a steeper learning curve. Stick with Expo until you have a specific reason not to.
- **Core Components:**
- These are your building blocks. Master them: View, Text, Image, TextInput, ScrollView, Button, TouchableOpacity.
- Understand that you're not writing HTML. <View> is like a <div>, <Text> is for all text content.
Styling:
- **Flexbox:** This is the most important concept for layout in React Native. Master it. flexDirection, justifyContent, alignItems will be your best friends.
- **StyleSheet.create:** Learn how to create and apply styles. Understand that it's CSS-in-JS, not actual CSS files.
- **State and Props:**
- Since you know React, this is a transfer of knowledge. Get very comfortable with useState and passing props between components.
- Use TypeScript from Day 1: Type your props, your component state, and your function arguments. It will save you countless hours of debugging.
- **Basic Navigation:**
- An app is rarely a single screen. Learn React Navigation, the de-facto standard.
- Implement a Stack Navigator (for navigating forward/backward, like in a settings menu).
- Implement a Tab Navigator (for a bottom tab bar, like Instagram).

- **Project for Phase 1: Simple To-Do App**
- Features: An input field to add a to-do, a list to display them, the ability to mark a to-do as complete (strikethrough text), and a button to clear completed to-dos.
- What you'll learn: useState, TextInput, FlatList (the better ScrollView for lists), component structure, basic styling.

## Phase 2: Intermediate Skills (The Next 4-6 Weeks)
- Goal: Build production-quality apps by handling data, managing complex state, and using device hardware.

- Key Topics:
- Advanced Lists:
- Master FlatList and SectionList. Learn key performance props: renderItem, keyExtractor, initialNumToRender, onEndReached (for infinite scroll).
- Networking:
- Learn to fetch data from a public API (e.g., a weather API, a movie database).
- Use the fetch API or a library like axios.
- Handle loading and error states properly. Show a loading spinner while data is being fetched and a friendly error message if it fails.
- **State Management:**
- React Context: For simple state that needs to be shared across a few components without prop-drilling.
- Zustand or Redux Toolkit: For more complex, app-wide state. I recommend starting with Zustand as it's much simpler than Redux and offers a great developer experience. Learn why you need a state manager.
- **Working with Device APIs:**
- Use Expo's modules to access device features:
- expo-camera (to take photos)
- expo-image-picker (to select from the gallery)
- expo-location (to get the user's location)
- Understand how to request and handle permissions.
- **Data Persistence:**
- Use AsyncStorage to save simple data locally on the device (like user settings or authentication tokens). For more complex data, you can explore a database like WatermelonDB or Realm later.
- **Project for Phase 2: Recipe Finder App**

- Features: A search screen to find recipes from a free API (like TheMealDB). A results list using FlatList. Tapping a recipe navigates to a detail screen showing ingredients and instructions. A "favorites" button to save recipes to AsyncStorage, which are displayed on a separate "Favorites" tab.
- What you'll learn: React Navigation (Stack and Tabs), API calls, FlatList, AsyncStorage, and managing more complex state.
## Phase 3: Advanced & Professional Grade (Ongoing)
- Goal: Optimize performance, create custom experiences, and understand the full development lifecycle.

- Key Topics:
- Performance Optimization:
- Memoization: Master React.memo, useMemo, and useCallback to prevent unnecessary re-renders.
- Bundle Analysis: Learn how to analyze your app's bundle size and identify heavy dependencies.
- Performance Profiling: Use tools like Flipper and the React Native profiler to find performance bottlenecks in your JS thread.
- The Bridge: Understand what the React Native bridge is (the communication layer between JS and Native) and why it can be a bottleneck.
- Animations:
- Start with the built-in Animated API.
Quickly move to react-native-reanimated (v2/v3). It's the modern standard for high-performance, 60 FPS animations because it can run them off the JavaScript thread.
Going Native (React Native CLI):
This is when you "eject" from Expo or start a project with the CLI.
Native Modules: Learn the basics of writing a simple native module in Swift/Objective-C (for iOS) and Kotlin/Java (for Android) to expose native functionality to your JS code. You'd do this for high-performance tasks (like image processing) or to use a specific SDK that doesn't have a React Native library.
Native UI Components: Learn how to wrap a native UI view so it can be used as a React component.
Testing & CI/CD:
Unit/Component Testing: Use Jest and React Native Testing Library.
End-to-End (E2E) Testing: Learn about tools like Detox or Maestro to automate user flows in your app.
Deployment: Learn how to automate your builds and deployments to the App Store and Google Play using services like EAS Build (for Expo) or tools like Fastlane.
Project for Phase 3: Simplified Social Media or Trello Clone

Features: User authentication (login/signup). A feed with infinite scroll. The ability to create posts with images (using the camera/gallery). Real-time updates (explore Firebase/Supabase). Complex animations and gesture handling (react-native-gesture-handler with reanimated).
What you'll learn: Everything combined, with a heavy focus on performance, state management at scale, and native features.



# React Native with TypeScript: A Zero-to-Hero Curriculum
Module 0: The Setup & The "Why"
Goal: Get your development environment ready and understand why TypeScript is a game-changer in React Native.

Environment: We'll start with Expo. It's a framework that handles all the complex native configuration for you.
Action: Install the Expo CLI. Open your terminal and run: npm install -g expo-cli.
Action: Create your first project using the TypeScript template. This is crucial.
Generated bash
npx create-expo-app MyFirstApp --template
Use code with caution.
Bash
(When prompted, choose the "Blank (TypeScript)" template).
Action: cd MyFirstApp and run npm start (or npx expo start). This will open a terminal with a QR code. Download the "Expo Go" app on your phone and scan the code. Your app will magically appear on your device!
Why TypeScript?
Type Safety: Think of it as a contract. If a component expects a name that is a string, TypeScript will yell at you if you try to give it a number. This catches bugs before you run the code.
Amazing Autocomplete: Your code editor (like VS Code) will know exactly what properties an object has, making you faster and more accurate.
Easier Refactoring: Changing code in a large app becomes much safer because TypeScript will tell you everywhere you need to make an update.
Module 1: The Core Building Blocks
Goal: Understand the fundamental components and how to style them with typed props.

Core Components: These are your LEGO bricks.
<View>: The most fundamental component. It's a container, like a <div>.
<Text>: All text must be inside a <Text> component.
<Image>: For displaying images (local or from the web).
<TextInput>: An input field for users.
<TouchableOpacity>: A wrapper that makes any View pressable with nice feedback.
<ScrollView>: A generic scrolling container.
State with useState (Typed):
Generated typescript
import React, { useState } from 'react';
// TS infers this is a number because of the initial value 0.
const [count, setCount] = useState(0);

// If state can be one of several types, be explicit:
const [user, setUser] = useState<User | null>(null);
Use code with caution.
TypeScript
Styling with StyleSheet:
You'll use JavaScript objects for styling. It's like CSS, but with camelCase properties (backgroundColor instead of background-color).
Flexbox is king for layout. Master flex, flexDirection, alignItems, and justifyContent.
Creating Components with Typed Props: This is where TS really shines.
Action (Your First Assignment): Create a reusable PrimaryButton component.
Step 1: Define the props type. Create a type for your component's props.
Generated typescript
// PrimaryButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// This is the contract for our component's props
type PrimaryButtonProps = {
  title: string;          // The button must have a title (string)
  onPress: () => void;    // It must have an onPress function that returns nothing
};
Use code with caution.
TypeScript
Step 2: Use the type in your component.
Generated typescript
// Add this to PrimaryButton.tsx
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: 'blue', padding: 16, borderRadius: 8 },
  text: { color: 'white', fontSize: 16, textAlign: 'center' },
});

export default PrimaryButton;
Use code with caution.
TypeScript
Step 3: Use the component. In App.tsx, try to use it correctly and incorrectly. You'll see TypeScript give you an error in your editor if you forget title or onPress!
Module 2: Building Multi-Screen Apps
Goal: Learn how to navigate between screens and handle lists of data.

Navigation with React Navigation: This is the standard library for navigation.
Action: Follow the React Navigation "Getting Started" guide.
Stack Navigator: For moving between screens where one is "on top" of another.
Tab Navigator: For a bottom tab bar.
TypeScript Focus: React Navigation has incredible TS support. You'll create a type for all your routes and their parameters. This prevents you from navigating to a screen with the wrong data.
Generated typescript
// types.ts
export type RootStackParamList = {
  Home: undefined; // No params for Home screen
  Profile: { userId: string }; // Profile screen needs a userId
};
Use code with caution.
TypeScript
Displaying Lists with FlatList:
NEVER map over an array to create a scrolling list in React Native. It renders everything at once and is terrible for performance.
Always use FlatList. It's smart and only renders the items currently on screen.
Action (Your Second Assignment): Fetch a list of users from a public API like JSONPlaceholder and display them in a FlatList.
Step 1: Define the data type.
Generated typescript
// types.ts
export type User = {
  id: number;
  name: string;
  email: string;
};
Use code with caution.
TypeScript
Step 2: Fetch and store the data in typed state.
Generated typescript
// UsersScreen.tsx
import { User } from './types'; // Import your type

const [users, setUsers] = useState<User[]>([]); // State is an array of Users
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data: User[]) => setUsers(data)) // Tell TS the data is an array of Users
    .finally(() => setLoading(false));
}, []);
Use code with caution.
TypeScript
Step 3: Render with a typed FlatList.
Generated typescript
import { FlatList } from 'react-native';

return (
  <FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }: { item: User }) => ( // Type the 'item' here!
      <View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    )}
  />
);
Use code with caution.
TypeScript
Module 3: State, Data, and Polish (Advanced)
Goal: Manage complex state, add animations, and work with device hardware.

Global State Management: When useState isn't enough.
Zustand: My recommendation for beginners. It's a simple, powerful state management library.
Redux Toolkit: The industry heavyweight. More boilerplate, but very powerful for huge applications.
TypeScript Focus: These libraries are built with TS in mind. You'll define your state "store" with types, and all your actions and selectors will be type-safe.
Animations:
Don't use the old Animated API.
Learn react-native-reanimated. This is the modern, performant way to do animations. It can run animations on the UI thread, separate from your JS logic, resulting in buttery-smooth 60 FPS animations.
Device APIs:
Using Expo's modules is easy. Want to use the camera? expo-camera. Location? expo-location.
TypeScript Focus: These modules come with their own types. So when you get a location object back, you can import the LocationObject type and your editor will tell you it has properties like coords.latitude.
Performance:
React.memo: Wrap components in React.memo to prevent them from re-rendering if their props haven't changed.
useCallback: To memoize functions so they don't cause child components to re-render.
useMemo: To memoize expensive calculations.
Final Project Suggestion: A Photo Log App
This project combines everything we've learned.

Screens:
A "Log" screen (FlatList) showing all entries.
A "New Entry" screen.
Functionality:
On the "New Entry" screen, have a TextInput for a description.
Have a button that opens the device camera (expo-camera) to take a picture.
When a picture is taken and the user adds a description, save this entry.
Use AsyncStorage (a simple key-value store) to persist the log entries on the device so they don't disappear when the app closes.
Use React Navigation to move between the Log and New Entry screens.
Use TypeScript for everything: your navigation params, your state, your component props, and the shape of a "Log Entry" object ({ id: string, text: string, imageUri: string }).
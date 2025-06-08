# React HOOK
## useState
- Purpose: To add state (data that can change over time) to a component. When the state changes, the component re-renders.
- Syntax: const [state, setState] = useState(initialValue);
- Example
```
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  // Use TypeScript to define the state type as a number
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={decrement} />
        <Button title="Increment" onPress={increment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', margin: 20 },
  countText: { fontSize: 24, marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '60%' },
});

export default Counter;
```
## useEffect
- Purpose: To perform "side effects" in your components. This includes things like fetching data, setting up a subscription, or manually changing the DOM (which is rare in React Native). It runs after the component renders.
- Syntax: useEffect(() => { /* effect code */ }, [dependencyArray]);
- [] (empty array): The effect runs only once when the component mounts.
- [someValue]: The effect runs once on mount, and again any time someValue changes.
- No array: The effect runs after every render (use with caution!).
- React Native Example: Fetching Data from an API
```
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

// Define the shape of our data with a TypeScript interface
interface Post {
  id: number;
  title: string;
}

const PostList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs once when the component mounts because of the empty dependency array []
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = (await response.json()) as Post[];
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // <-- Empty array means this effect runs only on mount

  if (loading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error) {
    return <Text style={styles.centered}>{error}</Text>;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.postItem}>
          <Text style={styles.postTitle}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  postItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  postTitle: { fontSize: 16 },
});

export default PostList;
```
## useContext
- Purpose: To access data from a React "Context" without having to pass props down through many levels of components (a problem known as "prop drilling").
- Syntax: const value = useContext(MyContext);
- React Native Example: A Simple Theme Switcher (Dark/Light Mode)
```
import React, { useState, useContext, createContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

// 1. Define the Context's value shape and create the context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. Create a "Provider" component that will hold the state
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. A child component that uses the context
const ThemedComponent = () => {
  // Use the useContext hook to get the theme values
  const context = useContext(ThemeContext);

  if (!context) return null; // Or some fallback UI
  const { theme, toggleTheme } = context;

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>Current Theme: {theme}</Text>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

// 4. Wrap your app in the provider
const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  lightContainer: { backgroundColor: '#fff' },
  darkContainer: { backgroundColor: '#222' },
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
});
```
## useRef
- Purpose: To get a reference to a component instance (like an input) or to store a mutable value that does not cause a re-render when it changes.
- Syntax: const myRef = useRef(initialValue);
- React Native Example: Focusing a TextInput programmatically
```
import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FocusInput = () => {
  // Create a ref. We tell TypeScript it will hold a TextInput element.
  const inputRef = useRef<TextInput>(null);

  const handleFocusPress = () => {
    // The actual element is on the .current property of the ref
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef} // Attach the ref to the TextInput
        placeholder="I will be focused"
        style={styles.input}
      />
      <Button title="Focus the Input" onPress={handleFocusPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
```
## useCallback
- The chef has a complex recipe for a sauce (a function).
- They can hand this recipe to an assistant (a child component).
- Instead of writing a brand new, identical recipe card every single time, they just point to the one they've already memorized. The assistant sees it's the same recipe and doesn't need to re-read it.
- It remembers the function itself.
## useMemo
- The chef makes a slow-cooked stew (an expensive calculation).
- They put the finished stew in a pot on the warmer.
- As long as the ingredients haven't changed, they just serve the stew from the pot. They don't re-cook it from scratch every time someone asks.
- It remembers the result (the value) of a function.
- **React Native Code Example**
- Let's build a ProductList screen. It will have:
- A list of products.
- A search input to filter the products (an expensive calculation).
- A button to trigger a "force re-render" to show how our optimizations work.
- A ProductItem child component that receives an onPress function.
- Step 1: The Child Component (ProductItem.tsx)
- This component must be wrapped in React.memo to benefit from useCallback.
```
// src/components/ProductItem.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Product {
  id: number;
  name: string;
}

interface ProductItemProps {
  product: Product;
  onPress: (id: number) => void;
}

// React.memo() is the key here. It prevents this component from re-rendering
// if its props (product, onPress) have not changed.
const ProductItem = React.memo(({ product, onPress }: ProductItemProps) => {
  // We add this log to SEE when the component re-renders.
  console.log(`Rendering ProductItem: ${product.name}`);

  const handlePress = () => {
    onPress(product.id);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Text>{product.name}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default ProductItem;
```
- **The Parent Component (ProductListScreen.tsx)**
- This is where we'll use useMemo and useCallback.
```
// src/screens/ProductListScreen.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import ProductItem from '../components/ProductItem';

// Mock data
const allProducts = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `Product #${i + 1}`,
}));

const ProductListScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [refreshCounter, setRefreshCounter] = useState(0); // Unrelated state to trigger re-renders

  // --- useMemo Example ---
  // This is an "expensive" calculation. We only want to re-run it when
  // `searchTerm` changes, NOT when `refreshCounter` changes.
  const filteredProducts = useMemo(() => {
    console.log('--- Filtering products (expensive operation!)... ---');
    if (!searchTerm) {
      return allProducts;
    }
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // Dependency: Only re-calculate when `searchTerm` changes.

  // --- useCallback Example ---
  // We want to pass a stable `handleProductPress` function to each ProductItem.
  // Without useCallback, a new function is created on EVERY render (e.g., when the counter changes),
  // causing every single ProductItem to re-render.
  const handleProductPress = useCallback((id: number) => {
    console.log(`Pressed product with ID: ${id}`);
    // In a real app, you might navigate: navigation.navigate('Details', { id })
  }, []); // Dependency: Empty, so this function is created only ONCE.

  const forceReRender = () => {
    setRefreshCounter(c => c + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for a product..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button
        title={`Force Re-render (Counter: ${refreshCounter})`}
        onPress={forceReRender}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onPress={handleProductPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ProductListScreen;
```
## How to Test and See the Difference
- Run the app.
- **Initial Load:** You will see "--- Filtering products... ---" in the console once. You will also see "Rendering ProductItem: ..." for every visible item.
- Type in the search box: As you type, searchTerm changes.
- **Result:** You will see "--- Filtering products... ---" log again because its dependency changed. The list updates, and the visible ProductItems re-render. This is correct.
- Clear the search box. The filtering runs again.
- Now, press the "Force Re-render" button. The refreshCounter state changes, causing the ProductListScreen to re-render.
- **useMemo in action:** You will NOT see "--- Filtering products... ---" in the console. useMemo prevented the expensive filtering because searchTerm did not change.
- **useCallback in action:** You will NOT see "Rendering ProductItem: ..." log for any item. Because handleProductPress was wrapped in useCallback and ProductItem was wrapped in React.memo, the child components see that their props are identical and skip re-rendering.
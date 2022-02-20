import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [state, setState] = useState(false);
  const handleOnPress = useCallback(() => {
    console.log("handle Press");
    if (state === false) {
      setState(true);
    } else if (state===true){
      setState(false);
    }
  }, [state]);

  useEffect(()=> {
    console.log("jestem wyrenderowany");
  }, [state]);

  return (
    <View style={styles.container}>
      {state === true ? <Text>clicked</Text> : <Text>not clicked</Text>}
      <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp2561075.jpg" }} style={{ width: 200, height: 200 }} resizeMode="cover" >
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" backgroundColor="pink" />
        <Button title="first Button" onPress={handleOnPress} />
        <Image source={{ uri: "https://warsawjs.com/static/images/ogp-v1.png", height: 150, width: 300 }} />
        <TextInput placeholder='Text...' backgroundColor="pink"></TextInput>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

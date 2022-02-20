import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Article } from './components/Article';
import {MyText} from "./components/MyText"

export default function App() {
  const [state, setState] = useState(false);
  const [articles, setArticles] = useState([]);
  const handleOnPress = useCallback(() => {
    console.log("handle Press");
    if (state === false) {
      setState(true);
    } else if (state === true) {
      setState(false);
    }
  }, []);

  useEffect(() => {
  fetch("http://10.141.4.167:3000/api/articles").then(response =>{
      return response.json();
  }).then((data)=>
  setArticles(data))
  .catch((err)=> {console.log(err)})
    // .then(response = )
    console.log("jestem wyrenderowany");
  }, [state]);

  return (
    <View style={styles.container}>
    {articles.map((article, idx)=> {
      return <Article article={article} key={idx}/>
    })}
      {state === true ? <MyText text="ok" /> : <Text>not clicked</Text>}
      <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp2561075.jpg" }} style={{ width: 200, height: 200 }} resizeMode="cover" >
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" backgroundColor="pink" />
        <Button title="first Button" onPress={handleOnPress} />
        <Image source={{ uri: "https://warsawjs.com/static/images/ogp-v1.png", height: 150, width: 300 }} />
        <TextInput placeholder='Text...' style={styles.textInput}></TextInput>
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
  myText: {
    color: "blue"
  }, 
  textInput: {
    backgroundColor: "pink"
  }
});

import React from "react";
import {StyleSheet, View, Text} from "react-native";
export const MyText = ({ text }) => {
    return (
    <View style={{ padding: 10, backgroundColor: "black" }}>
      <Text style={styles.myText} >{text}</Text>
    </View>
    )
  }

  const styles = StyleSheet.create({
    myText: {
      color: "pink"
    }
  });
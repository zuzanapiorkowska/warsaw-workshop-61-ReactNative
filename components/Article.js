import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
export const Article = ({ article }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://us.123rf.com/450wm/you1023/you10232011/you1023201100006/158264105-.jpg?ver=6", width: 20, height: 20 }} />
            <Text style={styles.myText}>{article.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
    myText: {
        color: "blue",
        borderColor: "pink",
        borderStyle: "solid",
        borderBottomWidth: 2,
        fontSize: 7
    }, 
    image: {

    }
});
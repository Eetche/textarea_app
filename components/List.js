import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const List = () => {

    return (
        <View style={styles.list}>
            <TextInput
                editable
                style={styles.input}
                multiline
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: "90%",
        height: "60%",
        borderRadius: 10,
        marginBottom: "5%",
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.22,

        elevation: 10,

        padding: 25,
        flexDirection: "column",
        alignItems: "center"
    },

    input: {
        width: "100%",
        fontSize: 20,
        borderRadius: 10

    }
})

export default List;

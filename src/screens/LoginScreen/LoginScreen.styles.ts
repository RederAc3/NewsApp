import { StyleSheet } from "react-native";

export default StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },

    errorText: {
        textAlign: "center",
        color: "#ff1100",
        fontWeight: "bold",
        marginTop: 10,
    },

    loginFieldContainer: {
        padding: 20,
        
    },

    inputTitle: {
        padding: 5,
        fontSize: 20
    },

    textInput: {
        width: 200,
        padding: 5,
        backgroundColor: "#91C3E9",
        borderRadius: 10,
        fontSize: 16
    },

    loginButton: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: "#91C3E9",
        borderRadius: 10
    },

    loginButtonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
});

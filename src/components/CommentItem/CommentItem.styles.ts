import { StyleSheet } from "react-native";

export default StyleSheet.create({
    commentItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#e3e3e3",
        borderRadius: 10
    }, 
    commentTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    commentAuthor: {
        fontSize: 18,
        fontWeight: "bold"
    },
    commentCreateDate: {
        marginLeft: 5
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    numberLikes: {
        marginLeft: 5
    }
});

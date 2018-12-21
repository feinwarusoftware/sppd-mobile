import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes";

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        marginTop: -100,
        marginLeft: 10,
        marginRight: 10
    },
    cardImg: {
        width: Metrics.screenWidth - 20,
        resizeMode: "contain",
    },
    headDetails: {
        fontFamily: "Roboto",
        fontSize: 35,
        fontWeight: "900",
        color: "#4f4f4f",
        textAlign: "center"
    },
    quickStats: {
        fontFamily: "Roboto",
        fontSize: 25,
        fontWeight: "900",
        color: "#4f4f4f",
        textAlign: "center"
    },
    energy: {
        color: "#03a9f4"
    },
    health: {
        color: "#f44336"
    },
    damage: {
        color: "#ff9800"
    },
    blurb:{
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "300",
        color: "#212529",
        textAlign: "center",
        fontStyle: "italic"
    },
    sectionHeading: {
        color: "#ff594f",
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "900",
        paddingTop: 12
    },
    commands: {
        fontFamily: "Consolas",
        alignSelf: "flex-start",
        color: "#ccc",
        backgroundColor: "#333",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginTop: 8
    },
    stats: {
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "300",
        color: "#4f4f4f",
        textAlign: "left"
    }
});

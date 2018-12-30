import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Metrics } from "../../Themes";

// images
import { Images, ApplicationStyles } from "../../Themes";

// styles
const Styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    mainContainer: {
        marginBottom: -140
    },
    image: {
        width: Metrics.screenWidth - 20,
        resizeMode: "contain"
    }
});

export default class CardArt extends Component {
    render() {
        return (
            <View style={Styles.mainContainer}>
                <Image source={Images.awesomoCardRender} style={Styles.image} />
            </View>
        );
    }
}

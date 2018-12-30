import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

// components
import CardArt from "../Components/Feinwaru/CardArt";
import CardInfo from "../Components/Feinwaru/CardInfo";

// styles
import { ApplicationStyles } from "../Themes";

const Styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    scrollContainer: {
        marginTop: -140,
        marginLeft: 10,
        marginRight: 10
    }
});

class CardContainer extends Component {
    render() {
        return (
            <View style={Styles.mainContainer}>
                <ScrollView style={Styles.scrollContainer}>
                    <CardArt />
                    <CardInfo />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        card: state.card
    };
}

export default connect(mapStateToProps)(CardContainer);

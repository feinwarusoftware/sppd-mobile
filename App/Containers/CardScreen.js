import React, { Component } from "react";
import { View, Image, ScrollView, Text, Picker } from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/CardScreenStyles";

class UpgradePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { augment: { type: "upgrade", value: 1 } };

        // constants
        this.kUpgradeSequence = [5, 10, 10, 15, 15, 15];                
    }

    render() {
        let pickerItems = [];
        for (let i = 0; i < this.kUpgradeSequence.length; i++) {
            const key = i;
            const level = i + 2;

            for (let j = 0; j < this.kUpgradeSequence[i]; j++) {
                const upgrade = this.kUpgradeSequence.slice(0, i).reduce((a, b) => a + b, 0) + (j + 1);

                pickerItems.push(
                    <Picker.Item key={key} label={`Upgrade ${upgrade}/70`} value={`u${upgrade}`}/>
                );
            }                        

            pickerItems.push(
                <Picker.Item key={key} label={`Level ${level}`} value={`l${level}`}/>
            );
        }

        return (
            <View>
                <Text style={styles.sectionHeading}>
                    Select an upgrade level
                </Text>
                <Picker
                    selectedValue={`${this.state.augment.type === "upgrade" ? "u" : "l"}${this.state.augment.value}`}
                    style={{height: 50, width: 200}}
                    onValueChange={(value, index) => this.setState({augment: { type: value[0] === "u" ? "upgrade" : "level", value: parseInt(value.slice(1, value.length)) }})}>
                    {pickerItems}
                </Picker>
            </View>
        );
    }
}

export default class CardScreen extends Component {
    static navigationOptions = {
        title: "A.W.E.S.O.M.-O 4000"
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <ScrollView style={styles.container}>
                    <View style={{marginBottom: -140}}>
                        <Image source={Images.awesomoCardRender} style={styles.cardImg}/>
                    </View>
                    <View>

                        {/* Header */}
                        <Text style={styles.headDetails}>
                            Epic | Tank
                        </Text>
                        <Text style={styles.quickStats}>
                            <Text style={styles.energy}>5</Text> | <Text style={styles.health}>684</Text> | <Text style={styles.damage}>21</Text>
                        </Text>
                        <Text style={styles.blurb}>
                            Charged: Freezes nearby enemies for 4 seconds seconds with a cosmic stomp.
                        </Text>

                        {/* Main Stats */}
                        <UpgradePicker/>
                        <Text style={styles.sectionHeading}>
                            AWESOM-O Commands
                        </Text>
                        <Text style={styles.commands}>-card awesomo</Text>
                        <Text style={styles.commands}>-card a.w.e.s.o.m.-o 4000</Text>
                        <Text style={styles.commands}>-card a4k</Text>
                        <Text style={styles.sectionHeading}>
                            General Information
                        </Text>
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Cast Area:</Text> Own Side</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Max Velocity:</Text> 0.27</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Time To Reach Max Velocity:</Text> 0.1 seconds</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Agro Range Multiplier:</Text> 4.76x</Text>  
                        <Text style={styles.sectionHeading}>
                            Can Attack? <Text style={{color: "#4caf50"}}>✓</Text>
                        </Text>
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Attack Range:</Text> 0.525</Text>
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Pre-Attack Delay:</Text> 0</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Knockback:</Text> 40 at 45°</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Time In Between Attacks:</Text> 0.5</Text>  
                        
                        <Text style={styles.sectionHeading}>
                            AOE Attacks? <Text style={{color: "#f44336"}}>✖</Text>
                        </Text>
                        <Text style={styles.sectionHeading}>
                            Requirements
                        </Text>
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Minimum Episode Completed:</Text> 3</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Minimum PVP Rank Required:</Text> 5</Text>  
                        <Text style={styles.stats}><Text style={{fontWeight: "900"}}>Minimum Player Level:</Text> 0</Text>                                                                                               
                    </View>
                </ScrollView>
            </View>
        );
    }
}
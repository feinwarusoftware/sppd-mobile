import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import CardScreen from "../Containers/CardScreen";
import { Colors } from "../Themes";

import styles from "./Styles/NavigationStyles";

const PrimaryNav = createStackNavigator({
	LaunchScreen: { screen: LaunchScreen },
	CardScreen: { screen: CardScreen }
}, {
	headerMode: "float",
	initialRouteName: "CardScreen",
	defaultNavigationOptions: {
		headerStyle: styles.header,
		headerTintColor: Colors.snow
  	}
});

export default createAppContainer(PrimaryNav);

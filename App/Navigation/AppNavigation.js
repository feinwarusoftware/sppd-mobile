import { createStackNavigator, createAppContainer } from "react-navigation";
import ListScreen from "../Containers/ListScreen";
import CardScreen from "../Containers/CardScreen";
import CardContainer from "../Containers/CardContainer";
import { Colors } from "../Themes";

const PrimaryNav = createStackNavigator({
	ListScreen: { screen: ListScreen },
	CardScreen: { screen: CardScreen },
	CardContainer: { screen: CardContainer }
}, {
	headerMode: "float",
	initialRouteName: "CardScreen",
	defaultNavigationOptions: {
		headerStyle: {
      backgroundColor: "#ff594f"
    },
		headerTintColor: Colors.white
  	}
});

export default createAppContainer(PrimaryNav);
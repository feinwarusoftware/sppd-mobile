import { createStackNavigator, createAppContainer } from "react-navigation";
import ListScreen from "../Containers/ListScreen";
import CardScreen from "../Containers/CardScreen";
import { Colors } from "../Themes";

const PrimaryNav = createStackNavigator({
	ListScreen: { screen: ListScreen },
	CardScreen: { screen: CardScreen }
}, {
	headerMode: "float",
	initialRouteName: "ListScreen",
	defaultNavigationOptions: {
		headerStyle: {
      backgroundColor: "#ff594f"
    },
		headerTintColor: Colors.white
  	}
});

export default createAppContainer(PrimaryNav);
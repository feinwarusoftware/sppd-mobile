import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
    height: 300,
    paddingTop: -50,
  },
  cardImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

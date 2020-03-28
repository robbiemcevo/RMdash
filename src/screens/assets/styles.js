import { Platform } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

export const centerSubtitleStyle = item => ({
  fontSize: 12,
  marginLeft: 8,
  textAlign: "center",
  color: item.strokeColor
});

export default {
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  flatListStyle: {
    marginTop: 0
  },
  cardShadowStyle: {
    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  cardStyle: {
    marginTop: 30,
    width: ScreenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    ...Platform.select({
      android: {
        top: 24
      }
    }),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  chartStyle: {
    height: 100,
    width: 100
  },
  chartContentInset: {
    top: 30,
    bottom: 30
  }
};

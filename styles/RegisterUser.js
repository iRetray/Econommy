import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  playButton: {
    borderRadius: 50,
  },
  textPlay: {
    color: "white",
    fontSize: 30,
    paddingHorizontal: 20,
  },
  tab: {
    height: 192,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;

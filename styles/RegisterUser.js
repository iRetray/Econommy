import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "90%",
    marginHorizontal: "10%",
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
  textNext: {
    textAlign: "center",
    color: "#1890ff",
    fontSize: 25,
  },
  containerPhoto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 150,
  },
  buttonFinish: {
    marginTop: 30,
    borderRadius: 50,
  },
});

export default styles;

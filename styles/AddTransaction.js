import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    margin: 10,
  },
  inputGroup: {
    marginHorizontal: 30,
  },
  input: {
    padding: 5,
  },
  addTransactionText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textType: {
    fontSize: 20,
  },
  buttonsGroup: {
    marginTop: 30,
    width: "80%",
    display: "flex",
    marginHorizontal: "10%",
    flexDirection: "row",
  },
  button: {
    width: "45%",
    marginHorizontal: "2.5%",
  },
  internalButton: {
    display: "flex",
    flexDirection: "column",
  },
  textSelected: {
    color: "white",
    fontWeight: "bold",
  },
  textNotSelected: {
    color: "grey",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 70,
    zIndex: 0,
  },
  textButton: {
    fontSize: 20,
  },
  buttonSave: {
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;

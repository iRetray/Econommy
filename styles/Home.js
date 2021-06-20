import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  name: {
    marginLeft: 5,
    fontSize: 25,
    fontWeight: "100",
  },
  work: {
    color: "#8c8c8c",
  },
  graphs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  warning: {
    textAlign: "center",
    fontSize: 12,
    color: "#8c8c8c",
  },
  strong: {
    fontWeight: "bold",
  },
  title: {
    color: "#bfbfbf",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  delete: {
    color: "#a8071a",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    maxWidth: 100,
    textAlign: "center",
    borderColor: "#a8071a",
    borderWidth: 1,
    borderRadius: 5,
  },
  moneyView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: "10%",
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 0,
  },
  avaliable: {
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
  },
  miniDescription: {
    fontSize: 17,
    color: "#52c41a",
    fontWeight: "bold",
    alignSelf: "center",
  },
  spend: {
    fontSize: 35,
    color: "#434343",
    alignSelf: "center",
    fontWeight: "bold",
  },
  miniSpend: {
    fontSize: 13,
    color: "#f5222d",
    fontWeight: "bold",
    alignSelf: "center",
  },
  description: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  descriptionInfo: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
  },
  icon: {
    width: 15,
    height: 15,
  },
  iconWork: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  iconAvaliable: {
    width: 20,
    height: 20,
  },
  iconInfo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    paddingVertical: 30,
    maxWidth: "90%",
    alignSelf: "center",
  },
  titleModal: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  textModal: {
    padding: 20,
    textAlign: "center",
  },
  buttonModal: {
    marginHorizontal: 70,
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

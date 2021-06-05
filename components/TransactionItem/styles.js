import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  transactionLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#b7eb8f",
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    marginVertical: 5,
    marginRight: "30%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  transactionRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#ffa39e",
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    marginVertical: 3,
    marginLeft: "30%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  amountRight: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#cf1322",
    alignSelf: "center",
  },
  amountLeft: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#389e0d",
    alignSelf: "center",
  },
  strong: {
    fontWeight: "bold",
  },
  date: {
    display: "flex",
    flexDirection: "row",
  },
  dateMonth: {
    fontSize: 12,
    marginRight: 10,
    color: "#595959",
  },
  hour: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#595959",
  },
  descriptionContainer: {
    backgroundColor: "#f5f5f5",
    marginTop: 5,
    borderRadius: 5,
    padding: 10,
  },
  description: {
    fontSize: 13,
  },
});

export default styles;

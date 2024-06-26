import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    gap: 6,

    width: "100%",
    height: 64,
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,

    backgroundColor: "#333333",
    justifyContent: "center",
  },
  text: {
    maxWidth: 235,
    minWidth: 235,
    fontSize: 16,
    color: "#F2F2F2",
  },
  textSelected: {
    maxWidth: 235,
    minWidth: 235,
    fontSize: 16,
    color: "#808080",
    textDecorationLine: "line-through",
  },
  trashImg: {
    objectFit: "cover",
    width: 32,
    height: 42,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    paddingTop: 24,
    height: 160,
  },

  headerImage: {
    objectFit: "contain",
    width: 130,
    height: 52,
  },

  main: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "transparent",
    top: "-10%",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#F2F2F2",
    padding: 16,
    fontSize: 18,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "#FFF", fontSize: 24 },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  infoContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  count: {
    fontSize: 16,
    color: "#D9D9D9",
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontWeight: "bold",
  },
  createdInfo: {
    fontSize: 18,
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  concludedInfo: {
    fontSize: 18,
    color: "#8284FA",
    fontWeight: "bold",
  },

  div: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#808080",
    marginVertical: 16,
  },
});

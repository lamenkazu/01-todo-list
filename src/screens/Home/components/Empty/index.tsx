import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export const Empty = () => {
  return (
    <View style={styles.empty}>
      <Image
        source={require("../../../../../assets/clipboard.png")}
        style={styles.clipboardImage}
      />
      <Text style={styles.textStrong}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textCommon}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

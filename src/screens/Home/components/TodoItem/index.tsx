import { Image, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";

interface TodoItemProps {
  text: string;
  checked: boolean;
  onCheck: () => void;
  onRemove?: () => void;
}

export const TodoItem = ({
  checked,
  onCheck,
  onRemove,
  text,
}: TodoItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <BouncyCheckbox
        size={20}
        fillColor="#5E60CE"
        unFillColor="transparent"
        isChecked={checked}
        onPress={(isChecked: boolean) => {
          onCheck();
        }}
      />
      <Text style={checked ? styles.textSelected : styles.text}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require("../../../../../assets/trash.png")}
          style={styles.trashImg}
        />
      </TouchableOpacity>
    </View>
  );
};

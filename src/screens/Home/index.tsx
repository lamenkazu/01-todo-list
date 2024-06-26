import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Empty } from "./components/Empty";
import { TodoItem } from "./components/TodoItem";

import uuid from "react-native-uuid";

interface ItemProps {
  id: string;
  text: string;
  checked: boolean;
}

export const Home = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [item, setItem] = useState("");

  const checkItem = (itemId: string) => {
    setItems((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return [...newState];
    });
  };

  const handleAddItemToList = () => {
    const newItem: ItemProps = {
      id: String(uuid.v4()),
      checked: false,
      text: item,
    };

    setItems((prevState) => [...prevState, newItem]);
  };

  const removeItem = (itemId: string) => {
    setItems((prevState) => {
      const newState = prevState.filter((item) => item.id !== itemId);

      return [...newState];
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={item}
            onChangeText={setItem}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddItemToList}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.infoContent}>
            <Text style={styles.createdInfo}>Criadas</Text>
            <Text style={styles.count}>{items.length}</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.concludedInfo}>Concluídas</Text>
            <Text style={styles.count}>
              {items.filter((item) => item.checked === true).length}
            </Text>
          </View>
        </View>

        <View style={styles.div} />

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              key={item.id}
              text={item.text}
              checked={item.checked}
              onCheck={() => checkItem(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </View>
    </>
  );
};

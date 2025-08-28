import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // FlatList data - gardening tools
  const data = [
    { id: "1", title: "Watering Can" },
    { id: "2", title: "Garden Shovel" },
    { id: "3", title: "Rake" },
    { id: "4", title: "Seeds Pack" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}> Gardening Tools Demo</Text>

      {/* 1. Image */}
      <View style={styles.section}>
        <Text style={styles.heading}>Image Garden Example</Text>
        <Text style={styles.description}>
          This is an image of gardening, showing plants being watered.
        </Text>
<Image
  source={require("../../assets/images/gardening.jpg")}
  style={styles.image}
  resizeMode="contain"
/>
      </View>

      {/* 2. Button */}
      <View style={styles.section}>
        <Text style={styles.heading}>Button Action</Text>
        <Text style={styles.description}>
          A button can perform an action. Here, it will plant a seed.
        </Text>
        <Button title="Plant a Seed" onPress={() => alert("🌱 A new seed was planted!")} />
      </View>

      {/* 3. TouchableOpacity */}
      <View style={styles.section}>
        <Text style={styles.heading}>TouchableOpacity Custom Action</Text>
        <Text style={styles.description}>
          TouchableOpacity can be styled to look like a custom button.
        </Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => alert("You watered the plants")}
        >
          <Text style={styles.touchableText}>Water Plants</Text>
        </TouchableOpacity>
      </View>

      {/* 4. FlatList */}
      <View style={styles.section}>
        <Text style={styles.heading}>FlatList Tools List</Text>
        <Text style={styles.description}>
          FlatList is useful for showing lists of gardening tools.
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedId(item.id)}>
              <Text
                style={[
                  styles.listItem,
                  item.id === selectedId && styles.selectedItem,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* 5. Modal */}
      <View style={styles.section}>
        <Text style={styles.heading}>Modal Info Popup</Text>
        <Text style={styles.description}>
          A modal can show extra information about gardening.
        </Text>
        <Button title="Show Gardening Tip" onPress={() => setModalVisible(true)} />
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 16, marginBottom: 12 }}>
                Gardening Tip: Water your plants in the morning to avoid
                evaporation during hot afternoons.
              </Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: "#444",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },
  touchable: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  touchableText: {
    color: "#fff",
    fontWeight: "600",
  },
  listItem: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedItem: {
    backgroundColor: "#C8E6C9",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 280,
  },
});

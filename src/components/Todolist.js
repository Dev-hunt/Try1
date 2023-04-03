import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Todolist = () => {
  const [shownModal, setShowModal] = useState(false);

  return (
    <View style={{ marginHoriZontal: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 15,
        }}
      >
        <View>
          <Text style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>
            {" "}
            Hey 👋, User Name{" "}
          </Text>
          <Text style={{ fontSize: 15 }}> 4 task for you buddy</Text>
        </View>
      </View>
      <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
        {" "}
        Assigned: ⏲️
      </Text>
      <ScrollView>
        <View style={{ height: 250 }}></View>
      </ScrollView>
      <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
        {" "}
        Completed : ✅{" "}
      </Text>
      <ScrollView>
        <View style={{ height: 250 }}></View>
      </ScrollView>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightblue",
            borderRadius: 100,
            width: 60,
            height: 60,
          }}
        >
          <Text style={{ fontSize: 38, fontWeight: "bold" }}> + </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={shownModal}
        animationType="slide"
        onRequestClose={() => (setShowModal = false)}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 15,
          }}
        >
          <View>
            <Text style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>
              {" "}
              Hey 👋, User Name{" "}
            </Text>
            <Text style={{ fontSize: 15 }}> 4 task for you buddy</Text>
          </View>
        </View>
        <Text
          style={{
            marginVertical: 15,
            color: "#000",
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          {" "}
          Add a Assigned Items
        </Text>

        <TextInput
          placeholder="Title"
          value=""
          onChangeText={() => {}}
          style={{
            backgroundColor: "rgb(220,220,220)",
            borderRadius: 10,
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
        />
        <TextInput
          placeholder="Description"
          value=""
          onChangeText={() => {}}
          style={{
            backgroundColor: "rgb(220,220,220)",
            borderRadius: 10,
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
          multiline={true}
          numberOfLines={6}
        />
        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={{
              backgroundColor: "blue",
              width: 100,
              borderRadius: 10,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22 }}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Todolist;

const styles = StyleSheet.create({});

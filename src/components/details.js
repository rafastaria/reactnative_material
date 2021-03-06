import React from "react";
import { View, ScrollView } from "react-native";
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.14
import {
  Header,
  Button,
  Avatar,
  SocialIcon,
  FormLabel,
  Text,
  Divider,
  FormInput,
  Card,
  ListItem
} from "react-native-elements";

const Details = ({ navigation }) => (
  <ScrollView>
    <Card
      style={{ alignItems: "center" }}
      title=" USER NAME"
      image={require("../images/pic2.jpg")}
    >
      <Text style={{ marginBottom: 10, textAlign: "center" }}>
        DESCRIPCIÓN DEL PERFIL
      </Text>
      <Button
        icon={{ name: "code" }}
        backgroundColor="#f43"
        onPress={() => navigation.navigate("Home")}
        fontFamily="Lato"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="VIEW NOW"
      />
    </Card>
  </ScrollView>
);

export default Details;

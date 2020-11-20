import React, { useState } from "react";
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../theme";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import firebase from "../../../firebaseClient";
import ErrorMessage from "./ErrorMessage";



export default function Register() {
  const [role, setRole] = useState("demandeur");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [errorMessage, setErrorMessage] = useState(null);
  //Date time Picker
  const [show, setShow] = useState(false);
  const onChange = (event: Event, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode();
  };
  //end dateTime Picker
  const handleSubmit = () => {
    const submitState = {
      role,
      nom,
      prenom,
      email,
      password,
      date,
      address,
      phone,
    };
    console.log(submitState);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredetials) => {
        const user = userCredetials.user;
        if (user) {
          return user.updateProfile({
            displayName: nom + " " + prenom,
          });
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <ScrollView>
        <Text style={styles.title}>Inscription!</Text>
        <ErrorMessage errorMessage={errorMessage} />
        <View>
          <Text>
            Inscrivez vous en tant que {role}
          </Text>
          <View>
            <Button
              color={
                role === "demandeur" ? theme.COLORS.SUCCESS : theme.COLORS.GREY
              }
              onPress={() => setRole("demandeur")}
              title="Demandeur"
            />
            <Button
              color={
                role === "jobbeur" ? theme.COLORS.SUCCESS : theme.COLORS.GREY
              }
              onPress={() => setRole("jobbeur")}
              title="Jobbeur"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Nom"}
            placeholderTextColor={theme.COLORS.GREY}
            underlineColorAndroid="transparent"
            value={nom}
            onChangeText={(text) => setNom(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Prénom"}
            placeholderTextColor={theme.COLORS.GREY}
            underlineColorAndroid="transparent"
            value={prenom}
            onChangeText={(text) => setPrenom(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Mail"}
            placeholderTextColor={theme.COLORS.GREY}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Mot de passe"}
            underlineColorAndroid="transparent"
            secureTextEntry
            placeholderTextColor={theme.COLORS.GREY}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Confirmation du mot de passe"}
            placeholderTextColor={theme.COLORS.GREY}
            underlineColorAndroid="transparent"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={showDatepicker} style={styles.btnSign}>
            <Text style={styles.text}>Date de naissance</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"adresse"}
            placeholderTextColor={theme.COLORS.GREY}
            underlineColorAndroid="transparent"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"numéro de téléphone"}
            placeholderTextColor={"rgba (255, 255, 255, 0) "}
            underlineColorAndroid="transparent"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 20, width: "90%" }}>
          <TouchableOpacity style={styles.btnSign} onPress={handleSubmit}>
            <Text style={styles.text}>Continuer</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //opacity : 0.5
  },
  input: {
    width: 300,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(200, 200, 200, 50) ",
    color: "rgba(255, 255, 255, 0.7) ",
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  btnSign: {
    width: 300,
    height: 50,
    borderRadius: 45,
    backgroundColor: "rgba(0, 200, 0, 50) ",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
  },
  
});

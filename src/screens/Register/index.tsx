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
import firebase from "../../../firebaseClient";
import ErrorMessage from "./ErrorMessage";
import Register from "./Register";



export default function index({navigation}) {
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
    <Register
      nom={nom}
      setNom={setNom}
      prenom={prenom}
      setPrenom={setPassword}
      email={email}
      setEmail={setEmail}
      address={address}
      setAddress={setAddress}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      date={date}
      handleSubmit={handleSubmit}
      onChange={onChange}
      password={password}
      setPassword={setPassword}
      phone={phone}
      setPhone={setPhone}
      show={show}
      showDatepicker={showDatepicker}
      navigation={navigation}
      errorMessage={errorMessage}
      role={role}
      setRole={setRole} />
  );
}

import React from 'react'
import { View, Text, ScrollView, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import theme from '../../theme';
import ErrorMessage from './ErrorMessage';
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";


export default function Register({errorMessage, role, setRole, nom, setNom, email,
    setEmail, password, setPassword, confirmPassword, setConfirmPassword,
    showDatepicker, date, show, address, setAddress, phone, setPhone, onChange,
    prenom, setPrenom, handleSubmit, navigation}) {
    return (
    <ScrollView>
        <Text style={styles.title}>Inscription!</Text>
        <ErrorMessage errorMessage={errorMessage} />
        <View style={{marginBottom: 30}}>
          <Text style={styles.roleText}>
            Inscrivez vous en tant que <Text style={{color: theme.COLORS.SUCCESS, fontWeight: 'bold'}} >{role}</Text> 
          </Text>
          <View style={{flexDirection: "row", marginHorizontal: 60, justifyContent: "space-between"}}>
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
          <TouchableOpacity onPress={showDatepicker}
            style={{backgroundColor: theme.COLORS.GREY, width: 300, height: 50, justifyContent: 'center', borderRadius: 10}}
            >
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
            placeholderTextColor={theme.COLORS.GREY}
            underlineColorAndroid="transparent"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 20, alignItems: "center" }}>
          <TouchableOpacity style={styles.btnSign} onPress={handleSubmit}>
            <Text style={styles.text}>Continuer</Text>
          </TouchableOpacity>
        </View>
        <View>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpButtonText}>Créer un compte</Text>
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
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  roleText: {
    color: 'black',
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
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
    marginTop: 20
  },
signUpButtonText:{
    color: "#000",
    textAlign: "center"
  }  
});

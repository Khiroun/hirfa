import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    errorMessage: string | null
}

const ErrorMessage = ({ errorMessage } : Props) => {
  return (
    <View style={styles.errorMessage}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
})

export default ErrorMessage

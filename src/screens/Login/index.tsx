import { DrawerNavigationProp } from '@react-navigation/drawer'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppContext'
import { RootStackParamList } from '../../../Screens'
import firebase from '../../../firebaseClient'
import Login from './Login'
import { ActivityIndicator, Text, View } from 'react-native'
import Loading from '../../Widgets/Loading'

export type NavigationProp = DrawerNavigationProp<RootStackParamList, "Login">
type Props = {
  navigation: NavigationProp
}

export default function index({ navigation } : Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, dispatch] = useContext(AppContext)
    const handleLogin= ()=>{
        
        dispatch({type: "loading"});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const {user} = userCredentials
            if(user){
                dispatch({type: 'login-success', payload: user})
                navigation.navigate('User')
            }
        })
        .catch(error =>{
            dispatch({type: 'failure', payload: error.message})
            alert(error.message)
        })
    }
    console.log(state)
    const {loading, error} = state
    return (
        <React.Fragment>
            {
                loading?
                <Loading />
                :
                <Login
                    navigation={navigation}
                    handleLogin={handleLogin}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    errorMessage={error}
                />
            }
            
        </React.Fragment>
    )
}

import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
    Button
  } from "react-native";
  import {Avatar, title, caption, TouchableRipple, Title, Caption} from 'react-native-paper'
  import pfImage from '../../../assets/maxresdefault.jpg'
  //import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import bgImage from '../../../assets/background.jpg'


function Profile() {
    return (

        <View style = {styles.container}>
            <View style= {styles.userInfoSection}>
                <View style={{flexDirection : 'row' , marginTop : 15}}>
                    <Avatar.Image source ={pfImage} size={80} />
                    <View style = {{marginLeft : 20}}>
                        <Title style={styles.title , {marginTop : 15, marginBottom : 5}}>Massi Dris</Title>
                        <Caption style= {styles.caption}>@Massi_Dris95</Caption>
                    </View>
                    </View>    
            </View>
            <View style= {styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='map-marker-radius' color='#777777' size= {20}  />
                    <Text style={{color : '#777777', marginLeft : 20}}>Alger, Algerie </Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='phone' color='#777777' size= {20}  />
                    <Text style={{color : '#777777', marginLeft : 20}}>+213 0553248134 </Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='email' color='#777777' size= {20}  />
                    <Text style={{color : '#777777', marginLeft : 20}}>drismassi@gmail.com </Text>
                </View>

            </View>


            <View style= {styles.infoBoxWrapper}>
                <View style= {styles.infoBox}>
                    <Caption style={styles.caption} >Rate</Caption>
                    <Title style={styles.title}> 4.8/5</Title>
                </View>
                <View style= {styles.infoBox}>
                    <Caption style={styles.caption} >Rate</Caption>
                    <Title style={styles.title}> 4.8/5</Title>
                </View>
            </View>
            <View style= {styles.menuWrapper}>
                <TouchableRipple onPress= { () => {}}  >
                    <View style= {styles.menuItem}>
                        <MaterialCommunityIcons name='heart-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}> your favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress= { () => {}}  >
                    <View style= {styles.menuItem}>
                        <MaterialCommunityIcons name='share-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}> reffur a friend</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress= { () => {}}  >
                    <View style= {styles.menuItem}>
                        <MaterialCommunityIcons name='account-check-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}> support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress= { () => {}}  >
                    <View style= {styles.menuItem}>
                        <MaterialCommunityIcons name='settings-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}> settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
        
    );
}

export default Profile;

const styles = StyleSheet.create({
    backGroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //opacity : 0.5
    },
    container : {
        backgroundColor : '#aaaaaa',
        flex : 1
    },
    userInfoSection : {
        marginBottom : 25,
        paddingHorizontal : 30,
    },
    title : {
        fontSize : 24, 
        fontWeight : "bold"
    },
    caption : {
        fontSize : 10,
        lineHeight : 14,
        fontWeight : '500'
    },
    row : {
        flexDirection : 'row',
        marginBottom : 10 ,
    },
    infoBoxWrapper : {
        borderBottomColor : '#dddddd',
        borderBottomWidth : 1,
        borderTopColor : '#dddddd',
        borderTopWidth : 1,
        flexDirection : 'row',
        height : 100,
    },
    infoBox :{
        width : '50%',
        alignItems : 'center',
        justifyContent : 'center',
        borderRightColor : '#777777',
        borderRightWidth : 1
    },
    menuWrapper : {
        marginTop : 10,
    },
    menuItem: {
        flexDirection : 'row',
        paddingVertical : 15, 
        paddingHorizontal : 30
    },
    menuItemText : {
        color : '#777777',
        marginLeft : 20,
        fontWeight : '600',
        fontSize : 16,
        lineHeight : 26
    },

})


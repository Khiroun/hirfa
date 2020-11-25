import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from './Main';
import Post from './Post';
import Profile from './Profile';
import Messages from './Messages';


const Tabs = createBottomTabNavigator()


export default function index() {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#161F3D",
                inactiveTintColor: "#B8BBC4",
                showLabel: true,
            }}
        >
            <Tabs.Screen
                options={{tabBarIcon: ({color})=>{
                    return <Ionicons name="ios-home" size={24} color={color} />
                }}}
                name="Home"
                component={Main}  />
            
            <Tabs.Screen
                name="Post"
                component={Post}
                options={{tabBarIcon: ({color})=>{
                    return <Ionicons
                        name="ios-add-circle"
                        size={48}
                        color="#E9446A"
                        style={{
                            shadowColor: "#E9446A",
                            shadowOffset: {width: 0, height: 0},
                            shadowRadius: 10,
                            shadowOpacity: 0.3
                        }}
                    />
                }}}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{tabBarIcon: ({color})=>{
                    return <Ionicons name="ios-person" size={24} color={color} />
                }}}
            />
        </Tabs.Navigator>
    )
}

import React from 'react';
import {View, Text} from 'react-native'
import estilo from './estilo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feed } from '../Feed/';
import { Usuarios } from '../Usuarios/';
import { FeedTag } from '../FeedTag/';

const NavegacaoTabs = createBottomTabNavigator();

const Inicio = ({route, navigation}) => {
    return (
        <NavegacaoTabs.Navigator>
            <NavegacaoTabs.Screen name="Feed" component={Feed} />
            <NavegacaoTabs.Screen name="Usuarios" component={Usuarios} />
            <NavegacaoTabs.Screen name="FeedTag" component={FeedTag} pa />
        </NavegacaoTabs.Navigator>
    )
}

export default Inicio
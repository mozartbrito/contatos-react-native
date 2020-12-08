import React, { useEffect, useState } from 'react';
import { View, Text, Image, Linking } from 'react-native'
import estilo from './estilo';



const Detalhe = ({textoPost, linkPost}) => {
    return (

        <View style={estilo.detalhe}>
            <View >
                <Text style={estilo.texto}>{textoPost}</Text>
                <Text
                    style={estilo.link} 
                    onPress={() => Linking.openURL(linkPost)}
                >{linkPost}</Text>
            </View>
        </View>
    )
}
//source={require('../../../assets/images/dog.jpg')} 

export default Detalhe
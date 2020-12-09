import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import estilo from './estilo';



const Cabecalho = ({nomeUsuario, emailUsuario, fotoUsuario, idUsuario, navigation}) => {
    const dadosUsuario = {
        nomeUsuario,
        emailUsuario,
        fotoUsuario,
        idUsuario
    }
    return (

        <TouchableOpacity 
            style={estilo.cabecalho}
            onPress={() => navigation.navigate('Usuario', {dadosUsuario} )}
        >
            <Image
                source={{uri: fotoUsuario}}
                style={estilo.imagem}
            />
            <View style={estilo.info}>
                <Text style={estilo.nome}>{nomeUsuario}</Text>
                <Text>{emailUsuario}</Text>
            </View>
        </TouchableOpacity>
    )
}
//source={require('../../../assets/images/dog.jpg')} 

export default Cabecalho
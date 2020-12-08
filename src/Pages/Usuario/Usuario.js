import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView} from 'react-native'
import estilo from './estilo';
import getUsuario from '../../api/usuario'


const Usuario = ({navigation, route}) => {
    const idUsuario = route.params.idUsuario;

    const [usuario, setUsuario] = useState('');
    useEffect(() => {
        getUsuario(setUsuario, idUsuario);
    },[])


    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <View style={estilo.card}>
                    <View>
                        <Image
                            style={estilo.imagem}
                            source={{uri: usuario.picture}}
                        />  
                    </View>
                    <View style={estilo.info}>
                        <Text style={estilo.nome} >{usuario.title + ' ' + usuario.firstName + ' ' + usuario.lastName}</Text>
                        <Text>{usuario.dateOfBith}</Text>
                        <Text>{usuario.email}</Text>
                        <Text>{usuario.phone}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
//source={} 

export default Usuario
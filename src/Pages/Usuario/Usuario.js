import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView} from 'react-native'
import estilo from './estilo';
import getUsuario from '../../api/usuario'
import getPostagens from '../../api/feedUsuario'
import { CardUsuario } from '../../Components/CardUsuario/';
import { FlatList } from 'react-native-gesture-handler';


const Usuario = ({navigation, route}) => {
    const dadosUsuario = route.params.dadosUsuario;

    const [usuario, setUsuario] = useState('');
    const [posts, setPosts] = useState('');

    useEffect(() => {
        getUsuario(setUsuario, dadosUsuario.idUsuario);
        navigation.setOptions({ title: dadosUsuario.nomeUsuario })
        getPostagens(setPosts, dadosUsuario.idUsuario)
    },[])

    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <CardUsuario dadosUsuario={usuario} />
                <View>
                    <FlatList
                        contentContainerStyle={{flexGrow: 1, justifyContent: 'center', flexDirection: 'column'}} 
                        numColumns={2}
                        data={posts}
                        keyExtractor={(item, index) => index.toString() }
                        renderItem={({item}) => (
                            <View style={estilo.cardPost}>
                                <Image 
                                style={estilo.imagemPost}
                                source={{uri:item.image}} 
                                />
                            </View>
                        )}
                    
                    />
                </View>
            </View>
        </ScrollView>
    )
}
//source={} 

export default Usuario
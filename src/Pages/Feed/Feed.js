import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native'
import estilo from './estilo';
import getPostagens from '../../api/feed'
import { Cabecalho } from '../../Components/Cabecalho';
import { Detalhe } from '../../Components/Detalhe';


const Feed = ({navigation}) => {

    const [posts, setPosts] = useState('');
    useEffect(() => {
        getPostagens(setPosts);
    },[])

    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <FlatList 
                    data={posts}
                    keyExtractor={(item, index) => index.toString() }
                    renderItem={({item}) => (
                        <View style={estilo.card}>
                            <Cabecalho 
                                nomeUsuario={item.owner.firstName + ' ' + item.owner.lastName}
                                emailUsuario={item.owner.email}
                                fotoUsuario={item.owner.picture}
                                idUsuario={item.owner.id}
                                navigation={navigation}
                            />
                            <Image 
                            source={{uri:item.image}} 
                            style={estilo.imagem} 
                            />
                            <Detalhe textoPost={item.text} linkPost={item.link}/>
                        </View>
                    )}
                    
                    />

            </View>
        </ScrollView>
    )
}
//source={require('../../../assets/images/dog.jpg')} 

export default Feed
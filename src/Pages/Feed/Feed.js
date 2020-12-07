import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native'
import estilo from './estilo';
import getPostagens from '../../api/feed'


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
                            <Image 
                            source={{uri:item.image}} 
                            style={estilo.imagem} 
                            />
                        </View>
                    )}
                    
                    />

            </View>
        </ScrollView>
    )
}
//source={require('../../../assets/images/dog.jpg')} 

export default Feed
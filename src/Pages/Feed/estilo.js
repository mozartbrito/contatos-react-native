import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 400

const estilo = StyleSheet.create({
    scroll: {
        backgroundColor: '#e9e9e9'
    },
    container: {
        alignItems: 'center',
    },
    card: {
        width: largura * 0.9,
        height: alturaCard,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    imagem: {
        width: alturaCard * 0.8,
        height: alturaCard  * 0.8,
        resizeMode: 'cover'
    }

})

export default estilo;
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 400

const estilo = StyleSheet.create({
    detalhe: {
        flexDirection: 'column',
        width: largura * 0.9,
        marginLeft: largura * 0.05,
        marginBottom: 30
    },
    link: {
        color: '#4797ff'
    }

})

export default estilo;
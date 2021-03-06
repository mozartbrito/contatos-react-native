import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 250

const estilo = StyleSheet.create({
    scroll: {
        backgroundColor: '#e9e9e9'
    },
    container: {
        alignItems: 'center',
    },
    card: {
        width: largura * 0.9,
        minHeight: alturaCard,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 20,
        alignItems:"center",
        padding: 20
    },
    imagem: {
        width: largura * 0.4,
        height: largura * 0.4,
        borderRadius: largura * 0.5,
        resizeMode: 'cover',
        marginBottom: 20
    },
    info: {
        width: "100%",
        alignItems: "center"
    },
    nome: {
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    posts: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center"
    },
    cardPost: {
        width: (largura * 0.9) / 2,
        minHeight: (largura * 0.9) / 2,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems:"center",
        padding: 5,
        margin: 1
    },
    imagemPost: {
        width: largura * 0.4,
        height: largura * 0.4,
        resizeMode: 'cover'
    },
    infoPost: {
        width: "100%",
        alignItems: "center"
    },


})

export default estilo;
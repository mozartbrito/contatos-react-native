import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: 220,
        height: 220,
        resizeMode: "contain"
    },
    inputs: {
        width: '80%',
        flex: 1
    },
    imagem: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#efefef',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7
    },
    botaoEntrar: {
        backgroundColor: '#3498db',
        padding: 10,
        //marginBottom: 10,
        borderRadius: 7, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoEntrar: {
        fontWeight: 'bold',
        color: '#fff'
    },
    botaoCriar: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 7,
        color: '#f7941e',
        textAlign: 'center',
        
        alignItems: 'center',
        justifyContent: 'center'
    },textoCriar: {
        fontWeight: 'bold',
        color: '#3498db'        
    },
    textoMensagem: {
        color: '#d63031',
        padding: 7,
        fontWeight: 'bold'
    }


})

export default estilo;
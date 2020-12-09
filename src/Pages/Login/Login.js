import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import efetuarLogin from '../../api/login';

import estilo from './estilo'

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const tentarLogar = async () => {
        if(email == '' || senha == '') {
            setMensagem('E-mail e senha são obrigatórios');
        } else {
                const resposta  = await efetuarLogin(email, senha)
                if(resposta.token) {
                    
                    navigation.replace('Inicio', {email: email})
                    
                }else {
                    setMensagem('Não foi possível logar');
                }
        }

        //navigation.replace('Inicio');
    }

    


    return(
        /* <ImageBackground 
        source={require('../../../assets/images/bg-water.jpg')}
        style={estilo.container}
        > */
        <View style={estilo.container}>
            <View style={estilo.imagem}>
                <Image 
                    source={require('../../../assets/images/logo.png')}
                    style={estilo.logo}
                />
            </View>
            <View style={estilo.inputs}>
    <Text style={estilo.textoMensagem}>{mensagem}</Text>
                <TextInput 
                    placeholder="E-mail"
                    style={estilo.input}
                    onChangeText={texto => setEmail(texto)}

                />
                <TextInput 
                    secureTextEntry={true}
                    placeholder="Senha"
                    style={estilo.input}
                    onChangeText={texto => setSenha(texto)}
                />
                <TouchableOpacity 
                    style={estilo.botaoEntrar}
                    onPress={tentarLogar}
                >
                    <Text style={estilo.textoEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botaoCriar}>
                    <Text style={estilo.textoCriar}>Criar conta</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

export default Login
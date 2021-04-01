import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0);

    //!Função que vai gerar os numeros randomicos
    function handleNumero() {
        const novo_numero = Math.floor(Math.random() * 10);
        //! função que altera o estado do numero
        setNumero(novo_numero);
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Gerar número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 38,
        color: '#FFF',
        fontWeight: 'bold',
    },
    botao: {
        marginTop: 10,
        backgroundColor: '#FFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;
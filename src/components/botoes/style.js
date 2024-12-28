import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../components/global";

const larguraTela = Dimensions.get('screen').width;


// Estilo padrão do StyleSheet.create
const baseStyle = StyleSheet.create({
    texto: {
        color: theme.colors.texto,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

// Função para alterar estilos dinamicamente
const styleResponsive = () => {
    const style = { ...baseStyle }; // Copia o estilo padrão

    if (larguraTela < 350) {// Para relógios
        style.texto = {
            ...style.texto,
            fontSize: 18,
        }

    } else if (larguraTela > 650 && larguraTela < 1200) {// Para tablets
        style.texto = {
            ...style.texto,
            fontSize: 35,
        }
    } else if (larguraTela > 1200) {// Para televisores ou dispositivos deitados

    }

    return style;
};

export default styleResponsive();




/*
style.container = {
            ...style.container,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        }
style.color = {
            ...style.color,
            color: 'blue',
            fontSize: 10,
        };
*/

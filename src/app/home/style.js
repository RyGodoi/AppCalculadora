import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../components/global";


const larguraTela = Dimensions.get('screen').width;


// Estilo padrão do StyleSheet.create
const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    texto: {
        color: theme.colors.texto
    },
    menu: {
        flex: 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuTexto: {
        color: theme.colors.texto,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    historico: {
        flex: 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.cinza,
        padding: 5,
        paddingRight: 20
    },
    historicoBotao: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    historicoArray: {
        flex: 0.7,
    },
    historicoTexto: {
        color: theme.colors.texto,
        textAlign: 'right',
    },
    visor: {
        flex: 0.15,
        backgroundColor: theme.colors.cinza,
        borderTopWidth: 8,
    },
    visorTexto: {
        color: theme.colors.texto,
        fontSize: 40,
        textAlign: 'right'
    },
    btnAdicionais: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        paddingVertical: 2
    },
    BtnAdicionais: {
        backgroundColor: theme.colors.cinza,
        paddingHorizontal: 24,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 20
    },
    BtnMath: {
        backgroundColor: theme.colors.background,
        paddingVertical: 20,
        paddingHorizontal: 35,
        borderRadius: 20,
        marginTop: 7
    },
    BtnZero: {
        backgroundColor: theme.colors.background,
        paddingVertical: 20,
        paddingHorizontal: 85,
        borderRadius: 20,
        marginTop: 7

    },
    BtnIgual: {
        backgroundColor: theme.colors.background,
        paddingVertical: 67,
        paddingHorizontal: 35,
        borderRadius: 20,
        marginTop: 7
    },
    delete: {
        padding: 20
    }

});

// Função para alterar estilos dinamicamente
const styleResponsive = () => {
    const style = { ...baseStyle }; // Copia o estilo padrão

    if (larguraTela < 350) {// Para relógios
        style.menuTexto = {
            ...style.menuTexto,
            fontSize: 12,
        },
            style.BtnMath = {
                ...style.BtnMath,
                paddingVertical: 4,
                paddingHorizontal: 30,
                borderRadius: 10,
                marginTop: 5
            },
            style.BtnIgual = {
                ...style.BtnIgual,
                paddingVertical: 20,
                paddingHorizontal: 35,
                borderRadius: 20,
                marginTop: 7,
            },
            style.BtnZero = {
                ...style.BtnIgual,
                paddingVertical: 5,
                paddingHorizontal: 65,
                borderRadius: 10,
                marginTop: 5
            },
            style.BtnAdicionais = {
                ...style.BtnAdicionais,
                padding: 0,
                borderRadius: 10,
            },
            style.delete = {
                ...style.delete,
                paddingVertical: 0,
            }
    } else if (larguraTela > 650 && larguraTela < 1200) {// Para tablets
        style.menuTexto = {
            ...style.menuTexto,
            fontSize: 25,
        },
            style.BtnMath = {
                ...style.BtnMath,
                paddingVertical: 30,
                paddingHorizontal: 60,
                borderRadius: 20,
                marginTop: 5
            },
            style.BtnIgual = {
                ...style.BtnIgual,
                paddingVertical: 100,
                paddingHorizontal: 35,
                borderRadius: 40,
                marginTop: 7,
            },
            style.BtnZero = {
                ...style.BtnIgual,
                paddingVertical: 30,
                paddingHorizontal: 150,
                borderRadius: 20,
                marginTop: 5
            },
            style.BtnAdicionais = {
                ...style.BtnAdicionais,
                padding: 20,
                borderRadius: 20,
            },
            style.delete = {
                ...style.delete,
                paddingVertical: 0,
            }
    } else if (larguraTela > 1200) {// Para televisores ou dispositivos deitados
        style.menuTexto = {
            ...style.menuTexto,
            fontSize: 35,
        },
            style.BtnMath = {
                ...style.BtnMath,
                paddingVertical: 30,
                paddingHorizontal: 200,
                borderRadius: 25,
                marginTop: 5
            },
            style.BtnIgual = {
                ...style.BtnIgual,
                paddingVertical: 81,
                paddingHorizontal: 35,
                borderRadius: 40,
                marginTop: 7,
            },
            style.BtnZero = {
                ...style.BtnIgual,
                paddingVertical: 30,
                paddingHorizontal: 420,
                borderRadius: 20,
                marginTop: 5
            },
            style.BtnAdicionais = {
                ...style.BtnAdicionais,
                padding: 20,
                borderRadius: 20,
            },
            style.delete = {
                ...style.delete,
                paddingVertical: 5,
                paddingHorizontal: 130
            }
        style.visorTexto = {
            ...style.visorTexto,
            fontSize: 80
        },
            style.historicoTexto = {
                ...style.historicoTexto,
                fontSize: 40
            }
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

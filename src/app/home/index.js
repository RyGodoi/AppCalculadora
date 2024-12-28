import { Text, View, StatusBar, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando AsyncStorage
import style from './style';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState, useRef, useEffect } from 'react';
import Botoes from '../../components/botoes';
import { theme } from '../../components/global';
import { evaluate } from 'mathjs';
import Menu from '../menu';

export default function Home() {
    const larguraTela = Dimensions.get('screen').width;
    const [historico, setHistorico] = useState(['Histórico...']);
    const [visor, setVisor] = useState('0');
    const historicoScrollViewRef = useRef(null);
    const visorScrollViewRef = useRef(null);
    const [modalMenu, setModalMenu] = useState(false);
    const [modalHistorico, setModalHistorico] = useState(false);

    // Funções para determinar o tamanho do fontSize de acordo com a largura da tela
    const getFontSizeHistorico = () => {
        if (larguraTela < 350) { // Para relógios
            return 18;
        } else if (larguraTela > 650 && larguraTela < 1200) { // Para tablets
            return 40;
        } else if (larguraTela > 1200) { // Para televisores ou dispositivos deitados
            return 50;
        } else { // Tamanho padrão para telas normais
            return 30;
        }
    };

    const getFontSizeDelete = () => {
        if (larguraTela < 350) { // Para relógios
            return 30;
        } else if (larguraTela > 650 && larguraTela < 1200) { // Para tablets
            return 95;
        } else if (larguraTela > 1200) { // Para televisores ou dispositivos deitados
            return 150;
        } else { // Tamanho padrão para telas normais
            return 50;
        }
    };

    // Função para carregar histórico do AsyncStorage
    const carregarHistorico = async () => {
        try {
            const historicoSalvo = await AsyncStorage.getItem('historico');
            if (historicoSalvo) {
                setHistorico(JSON.parse(historicoSalvo));
            }
        } catch (error) {
            console.error('Erro ao carregar o histórico:', error);
        }
    };

    // Função para salvar histórico no AsyncStorage
    const salvarHistorico = async (novoHistorico) => {
        try {
            await AsyncStorage.setItem('historico', JSON.stringify(novoHistorico));
        } catch (error) {
            console.error('Erro ao salvar o histórico:', error);
        }
    };

    // Carregar histórico ao abrir o aplicativo
    useEffect(() => {
        carregarHistorico();
    }, []);

    // Salvar o histórico sempre que ele for atualizado
    useEffect(() => {
        salvarHistorico(historico);
        scrollHistorico();
    }, [historico]);

    const addVisor = (valor) => {
        scrollVisor();
        setVisor((prevVisor) => {
            if (prevVisor === '0' && !isNaN(valor)) return valor;
            if (valor === '.' && !prevVisor.includes('.')) return prevVisor + valor;
            if (isNaN(valor) && valor !== '.' && prevVisor === '0') return prevVisor;

            const symbols = ['+', '-', 'x', '÷', '%'];
            if (symbols.includes(prevVisor.slice(-1)) && symbols.includes(valor)) {
                return prevVisor.slice(0, -1) + valor;
            }
            return prevVisor + valor;
        });
        scrollVisor();
    };

    const scrollVisor = () => {
        visorScrollViewRef.current?.scrollToEnd({ animated: true });
    };
    const scrollHistorico = () => {
        historicoScrollViewRef.current?.scrollToEnd({ animated: true });
    };

    const clear = () => setVisor("0");

    const apagar = () => {
        setVisor((prevVisor) => prevVisor.length > 1 ? prevVisor.slice(0, -1) : "0");
    };

    const resolverCalculo = () => {
        try {
            const visorCorrigido = visor.replace(/x/g, '*').replace(/÷/g, '/');
            const resultado = evaluate(visorCorrigido);
            const novoItem = visor + '=' + resultado;
            setHistorico((prevHistorico) => [...prevHistorico, novoItem]);
            setVisor(resultado.toString());
        } catch (error) {
            alert("Erro");
        }
    };

    const historicoVisor = (item) => {
        if (item == "Histórico...") {
            alert('não pode adicionar Histórico...');
        } else {
            const parteAntesDoIgual = item.split('=')[0];
            setVisor(parteAntesDoIgual);
            setModalHistorico(false);
        }
    };

    return (
        <View style={style.container}>
            {modalMenu && (
                <Modal transparent={false} animationType='fade'>
                    <Menu MenuVoltar={() => setModalMenu(false)}></Menu>
                </Modal>
            )}
            {modalHistorico && (
                <Modal transparent={true} animationType='fade'>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.7, backgroundColor: theme.colors.cinza, width: '80%', borderWidth: 5, padding: 20, borderRadius: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 5, padding: 5 }} onPress={() => setModalHistorico(false)}>
                                    <Text style={{ color: 'white' }}>Fechar[X]</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 5, padding: 5 }} onPress={() => setHistorico(["Historico..."])}>
                                    <Text style={{ color: 'white' }}>Limpar[C]</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                {
                                    historico.map((item, key) => (
                                        <TouchableOpacity key={key} onPress={() => historicoVisor(item)}>
                                            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }} key={key}> {item} </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            )}
            <StatusBar backgroundColor={'black'} style="light" />
            <View style={style.menu}>
                <TouchableOpacity onPress={() => setModalMenu(true)}><Text style={style.menuTexto}>RyCalculadora</Text></TouchableOpacity>
            </View>
            <View style={style.historico}>
                <View style={style.historicoBotao}>
                    <TouchableOpacity onPress={() => setModalHistorico(true)}>
                        <FontAwesome6 name="file-lines" size={getFontSizeHistorico()} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={style.historicoArray}>
                    <ScrollView ref={historicoScrollViewRef}>
                        {
                            historico.map((item, key) => (
                                <Text style={style.historicoTexto} key={key}> {item} </Text>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <View style={style.visor}>
                <ScrollView ref={visorScrollViewRef}>
                    <Text style={style.visorTexto}> {visor} </Text>
                </ScrollView>
            </View>
            <View style={style.btnAdicionais}>
                <Botoes Btn={style.BtnAdicionais} Function={() => clear()} Valor='C'></Botoes>
            </View>
            <View style={{ backgroundColor: theme.colors.cinza, flex: 0.63 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.22, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Botoes Btn={style.BtnMath} Function={() => addVisor('%')} Valor='%'></Botoes>
                        <Botoes Btn={style.BtnMath} Function={() => addVisor('x')} Valor='X'></Botoes>
                        <Botoes Btn={style.BtnMath} Function={() => addVisor('÷')} Valor='÷'></Botoes>
                        <TouchableOpacity onPress={() => apagar()}>
                            <FontAwesome6 style={style.delete} name="delete-left" size={getFontSizeDelete()} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.78 }}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 15 }}>
                            <View style={{ flex: 0.75 }}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 0.7, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('1')} Valor='1'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('2')} Valor='2'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('3')} Valor='3'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('4')} Valor='4'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('5')} Valor='5'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('6')} Valor='6'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('7')} Valor='7'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('8')} Valor='8'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('9')} Valor='9'></Botoes>
                                    </View>
                                    <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Botoes Btn={style.BtnZero} Function={() => addVisor('0')} Valor='0'></Botoes>
                                        <Botoes Btn={style.BtnMath} Function={() => addVisor('.')} Valor='.'></Botoes>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Botoes Btn={style.BtnMath} Function={() => addVisor('-')} Valor='-'></Botoes>
                                <Botoes Btn={style.BtnMath} Function={() => addVisor('+')} Valor='+'></Botoes>
                                <Botoes Btn={style.BtnIgual} Function={() => resolverCalculo()} Valor='='></Botoes>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

// 2 timóteo 2:15 NVI
// 15 Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade.
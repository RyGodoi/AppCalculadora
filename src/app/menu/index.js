import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../../components/global';


export default function Menu(prop) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{ flex: 0.8, paddingTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                    Sobre o Desenvolvedor:
                </Text>
                <Text style={{ fontSize: 17 }}>
                    Olá! Eu sou Ryan Godoi da Silva, desenvolvedor do aplicativo. Sou formado em Análise e Desenvolvimento de Sistemas e tenho paixão por criar soluções inovadoras e práticas para o cotidiano. Com o conhecimento adquirido na minha formação, busquei criar um aplicativo que fosse não apenas útil, mas também fácil de usar e eficiente.
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                    Funcionalidades do App
                </Text>
                <Text style={{ fontSize: 17 }}>
                    Este aplicativo foi projetado para ser uma calculadora inteligente, com uma interface amigável e várias funcionalidades, incluindo:
                </Text>
                <Text style={{ fontSize: 17 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Visor Dinâmico: </Text>
                    O visor se atualiza em tempo real à medida que você insere os números ou símbolos, proporcionando uma experiência de uso ágil e intuitiva.
                </Text>
                <Text style={{ fontSize: 17 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Cálculos Precisos: </Text>
                    Realiza cálculos com precisão, incluindo operações básicas como soma, subtração, multiplicação e divisão.
                </Text>
                <Text style={{ fontSize: 17 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Histórico de Cálculos: </Text>
                    Armazena o histórico dos seus cálculos anteriores, permitindo que você consulte e utilize novamente os resultados.
                </Text>
                <Text style={{ fontSize: 17 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Animações e Transições: </Text>
                    Oferece animações suaves para uma navegação agradável, como o efeito de desvanecimento fade-in ao abrir a modal.
                </Text>
                <Text style={{ fontSize: 17 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Design Responsivo:: </Text>
                    O layout se adapta automaticamente ao tamanho da tela, garantindo uma experiência otimizada em dispositivos móveis, tablets e até televisores.
                </Text>
                <Text style={{ fontSize: 17, paddingBottom: 50 }}>
                    Foi com muito esforço e dedicação que desenvolvi este aplicativo, com o objetivo de tornar os cálculos do seu dia a dia mais fáceis e rápidos. Espero que você aproveite a experiência de usar este app tanto quanto eu gostei de desenvolvê-lo!
                </Text>
            </ScrollView>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: theme.colors.cinza, justifyContent: 'center', paddingHorizontal: 30, borderRadius: 20, paddingVertical: 10 }} onPress={prop.MenuVoltar}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Voltar para a Calculadora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

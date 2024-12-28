import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

export default function Botoes(Props) {
    return (
        <View>
            <TouchableOpacity style={Props.Btn} onPress={Props.Function}>
                <Text style={style.texto}>{Props.Valor}</Text>
            </TouchableOpacity>
        </View>
    );
}

import React , {useState} from 'react'
import { View , TextInput} from 'react-native';
import { GenNum , ValidNum } from './function';
import MyModal from '../../components/Modal';
import styles from './style';
import { Text , useStyleSheet , Input , Button } from '@ui-kitten/components';

export default function Calc({navigation}) {
    const style = useStyleSheet(styles)


    const [firstNum,setFirstNum] = useState(GenNum());
    const [secondNum,setSecondNum] = useState(GenNum());
    const [result,setResult] = useState("");
    const [modalVisible,setModalVisible] = useState(false);

    function setNumbers(){
        setFirstNum(GenNum());
        setSecondNum(GenNum());
        setResult("");
    }

    return (
        <View style={style.container}>
            <Text style={{textAlign:'center'}} category='h1'>Tente acertar a conta!</Text>
            <View style={{flexDirection:'row', marginVertical:50,alignItems:'center'}}>
                <Text category='h2'>{firstNum}x{secondNum} = </Text>
                <Input
                    maxLength={3}
                    style={{borderWidth:3,width:87}}
                    placeholder='---'
                    textAlign='center'
                    keyboardType='number-pad'
                    value={result.toString()}
                    onChangeText={value=>{
                        setResult(value)
                    }}
                    onKeyPress={(key)=>{ key.code=="Enter"? setModalVisible(!modalVisible): ''}}
                />
            </View>
            <View style={{flexDirection:'row'}}>
               
                <Button
                    onPress={()=>{navigation.navigate('Tabuada')}}
                >
                    Tabuada
                </Button>
                <Button
                    onPress={()=>{setModalVisible(!modalVisible)}}
                >
                    Calcular
                </Button>
            </View>
            
            
            <MyModal
                validation={ValidNum(firstNum,secondNum,parseInt(result))}
                result={firstNum*secondNum}
                visible={modalVisible}
                setVisible={setModalVisible}
                reset={setNumbers}
            />
        </View>
    )
}

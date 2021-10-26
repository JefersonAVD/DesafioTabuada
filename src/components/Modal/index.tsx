import React , {useState}from 'react'
import { View } from 'react-native'
import { useStyleSheet, Card , Text , Modal, Button } from '@ui-kitten/components';
import styles from './style';


export default function MyModal(props:any) {
    const style = useStyleSheet(styles)

    return (
        <View>
            <Modal
                visible={props.visible}
                onBackdropPress={() => {
                    props.setVisible(!props.visible);
                    props.reset();
                  }}
                backdropStyle={styles.backdrop}
            >
                <Card style={{width:300}}>
                    <Text category='h5' style={{textAlign:'center'}}>{props.validation?'Parabens! Você acertou!':'Que pena, você errou o Calculo. O valor correto é:'}</Text>
                    {props.validation?<Text></Text>:<Text category='h1' style={{textAlign:'center'}} >{props.result}</Text>}
                    <Button
                        onPress={()=>{
                            props.setVisible(!props.visible)
                            props.reset()
                        }}
                    >
                        Fechar
                    </Button>
                </Card>
            </Modal>
        </View>
    )
}

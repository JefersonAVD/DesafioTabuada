import React from 'react';
import { View, Text, ImageBackground , Image} from 'react-native';
import Calc from '../../components/Calc';
import { useStyleSheet } from '@ui-kitten/components';
import styles  from './style';
import Background from '../../../assets/bg.png'


export default function Main({navigation}) {
    
    
    const style = useStyleSheet(styles)
    return (
        
            <ImageBackground source={Background} resizeMode='cover' style={{flex: 1}}>
                <View style={style.container}>
                    <Calc
                        navigation={navigation}
                    />
                </View>
            </ImageBackground>
        
    )
}

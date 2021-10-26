import { Card,Button } from '@ui-kitten/components'
import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import background from '../../../assets/bg.png'

export default function Tabuada({navigation}) {
    
    return (
        <ImageBackground source={background} style={{flex:1}} resizeMode='cover'>
            <View style={{justifyContent:'center',flex:1}}>
                <View style={{marginVertical:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                    {Array.from(Array(10).keys()).map(y=>{
                    return(<Card key={y} style={{backgroundColor:'#00000080',borderRadius:10,borderColor:'#fff'}}>
                        {
                            Array.from(Array(10).keys()).map((x)=>{
                                {return (<Text style={{marginVertical:1,fontSize:11,color:'#fff'}} key={x}>{y+1}x{x+1}={(x+1)*(y+1)}</Text>)}       
                        })
                        }
                            </Card>
                    
                    )})  
                    }
                </View>
                <Button style={{width:150,alignSelf:'center'}} onPress={()=>{navigation.goBack()}}>Voltar ao Início</Button>
            </View>
        </ImageBackground>
    )
}

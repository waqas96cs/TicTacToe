import React,{useState} from 'react';
import {StyleSheet,View,Text,Modal,Button} from 'react-native';

export default function ModalFunctionComponent(props){
    const [modalOpen, setModalOpen] = useState(true); 
    return(
        <Modal visible={modalOpen} animationType='fade'>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={{fontSize: 60, color: 'purple', fontWeight: 'bold'}}>Winner</Text>
                    {
                        props.winDecision == 'X'?
                        <View style={{justifyContent: 'center', alignItems: 'center'}}><Text style={styles.subText}>Player 1 Won</Text></View>
                        :
                        <View style={{justifyContent: 'center', alignItems: 'center'}}><Text style={styles.subText}>Player 2 Won</Text></View>
                        }
                    <View style={{marginTop: '20%'}}><Button title="Play Again" color="green" onPress={()=>{
                        setModalOpen(false);
                        props.reset();
                    }}/></View>
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000aa'
    },
    modalContainer: {
        margin: 50,
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center'

    },
    subText: {
        fontSize: 25,
        color: 'black',
        marginTop: '15%'
      },
})
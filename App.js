import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';


import Box from './components/Box';
import Modal from './components/Modal';
export default function App() {

  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXChance, setIsXChance] = useState(true);
  const [winner, setWinner] = useState(null);

  function PlayBox(no) {
    return(
      <Box 
        no={no}
        boxInfo={{boxes, setBoxes}}
        chance={{ isXChance, setIsXChance }}
        winner={winner}
      />
    )
  }

  const winPosition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8] ,[2,4,6]
  ]

  function calculateWin() {
    for (let i=0;  i<winPosition.length; i++) {
      if( 
        boxes[winPosition[i][0]] !== null &&
        boxes[winPosition[i][0]] === boxes[winPosition[i][1]]
        && boxes[winPosition[i][0]] === boxes[winPosition[i][2]]
       ) {
         setWinner(boxes[winPosition[i][0]]);
         return;
       }
    }
  }

  useEffect(() => {
    calculateWin();
  }, [isXChance])

  function resetValues() {
    setWinner(null);
    setBoxes(Array(9).fill(null));
    setIsXChance(true);
  }

  return (
    <View style={styles.container}>
       {/* Main Text Tic Tac Toe */}
       <Text style={styles.mainText}>Tic Tac Toe</Text>
            {/* Player 1 and Player 2 */}
      <View style={{marginBottom: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginTop: 5}}><Text style={styles.subText}>Player 1: </Text></View>
                    <View ><Entypo name="cross"  size={45} color="brown" /></View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{marginBottom: 3}}><Text style={styles.subText}>Player 2: </Text></View>
                    <View style={{marginLeft: 5}}><Entypo name="circle"  size={35} color="purple" /></View>
                </View>
      </View>
      <View style={styles.featureContainer}>
        {winner !== null 
        ? <Modal winDecision = {winner} reset= {resetValues}/>
        // <Text style={[styles.primaryText, styles.winnerText]}>{winner} WON</Text>
        : isXChance == true?
         <Text style={styles.primaryText}>Player 1 Turn</Text>
         : <Text style={styles.primaryText}>Player 2 Turn</Text>
        }
        <View >
          <Button color="red" title="Restart Game"  onPress={()=>{
          resetValues();
        }}/>
        </View>
      </View>
      <View style={styles.playBoard}>
        <View style={styles.rows}>
          {PlayBox(0)}
          {PlayBox(1)}
          {PlayBox(2)}
        </View>
        <View style={styles.rows}>
          {PlayBox(3)}
          {PlayBox(4)}
          {PlayBox(5)}
        </View>
        <View style={styles.rows}>
          {PlayBox(6)}
          {PlayBox(7)}
          {PlayBox(8)}
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  playBoard: {
    borderWidth: 8,
    borderRadius: 8,
    borderColor: 'purple'
  },
  rows: {
    flexDirection: 'row',
  },
  resetIcon: {
    position: 'absolute',
    right: 20,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
    justifyContent: 'space-around'
  },
  primaryText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  subText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  mainText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 15
  },
});












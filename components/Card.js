import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/AntDesign';
import { WrongAlert } from './RNAlert';
import { log } from '../Common'
//  --legacy-peer-deps
import { useStore } from '../store';
import * as Speech from 'expo-speech';

export default function Card(props) {
  const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);
  const [iconName, setIconName] = useState('play');
  const [checking, setChecking] = useState(false);
  const [text, setText] = useState('');
  const [en, setEn] = useState([])
  const data = useStore(state => state.en)
  const count = useStore(state => state.count)
  const increment = useStore(state => state.increment)

  useEffect(() => {
    let m = data.map(item => item.results);
    for (let i = 0; i < m.length; i++) {
      if (m[i] !== undefined) {
        // log(count)
        increment()
      }
    }
  }, [])

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const test = () => {
    setChecking(true);
  }

  const checkWord = () => {
    log(text)
    log(props.name)
    if (text === props.name) {
      setChecking(false);
    }
    else {
      setChecking(true);
      WrongAlert()
    }
  }

  const speak = (w) => {
    if (playing) {
      console.log('Loading Sound');
      setIconName('pausecircle');
      Speech.speak(w);
      setTimeout(() => { setIconName('play') }, 1100)
    } else {
      setIconName('play');
      // await sound.unloadAsync();
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {
          checking ? (
            <>
              <TextInput
                style={styles.inputText}
                placeholder=""
                onChangeText={text => setText(text)}
              />
              <Button title="Check"
                style={styles.button}
                onPress={checkWord} />
            </>) : (
            <Text style={[
              styles.text,
              styles.textHeader
            ]}>
              {props.word} ({props.typeOf == "noun"
                ? "n" : props.typeOf == "adjective"
                  ? "adj" : props.typeOf == "verb"
                    ? "v" : props.typeOf[0] + ", " + props.typeOf[1]})
              {props.prounciation}
            </Text>)
        }

        <Icon
          name={iconName}
          size={20} color="#000"
          style={styles.icon}
          onPress={() => {
            setPlaying(true);
            speak(props.word)
          }} />
      </View>
      <Text style={
        checking ?
          { display: 'none' }
          : styles.checkText
      }
        onPress={() => { test() }}>
        Check this word
      </Text>
      <Image style={styles.img}
        source={{ uri: props.src }} />
      <Text style={[
        styles.text,
        styles.textBody
      ]}>
        {props.example}
      </Text>
      <Text style={styles.text}>
        {props.meaning}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#f0f2f5',
    padding: 10,
    margin: 10,
    borderRadius: 7,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    borderWidth: 1,
    padding: 4
  },
  textHeader: {
    marginRight: 10,
  },
  textBody: {
    textAlign: 'justify',
    fontSize: 18,
  },
  checkText: {
    textAlign: 'center',
    marginTop: 5,
    cursor: 'pointer'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  icon: {
    marginTop: 5,
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
  }
});

Card.defaultProps = {
  src: "https://www.seekpng.com/png/detail/968-9681864_apple-png-background-stock-photo-apple-fruit.png"
}

import { StatusBar } from 'expo-status-bar';
import { StrictMode, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { log, fetchUrl, options, defUrl } from './Common';
import { useStore } from './store';
import Card from './components/Card';
import { createClient } from 'pexels';

export default function App() {
  const [word, setWord] = useState([])
  const [meaning, setMeaning] = useState([])
  const [source, setSource] = useState([])
  const data = useStore(state => state.en)
  const update = useStore(state => state.update)
  const client = createClient('563492ad6f917000010000010eea3c782765431797c7ea8b8176fb5e');
  const [q, setQ] = useState([])

  const FetchWords = async () => {

    for (let i = 0; i < 10; i++) {
      fetch(fetchUrl, options)
        .then(response => response.json())
        .then(response => {
          // console.log(response)
          update(response)
        })
        .catch(err => {
          log(err)
        })
    }
  }

  const FindImages = async () => {
    for (let i = 0; i < 10; i++) {
      let query = q[i]
      const res = await client.photos.search({ query, per_page: 1 })
      const photos = res.photos
      const src = photos.map(photo => photo.src)
      const medium = src.map(s => s.medium)
      medium && setSource(medium)
      log(medium)
    }
  }

  const getImages = () => {
    for (let i = 0; i < 10; i++) {
      let w = q[i]
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '004c008df7msh873d3c4709f2eb3p15615bjsn6188cad98adb',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };
      let baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q='
      fetch(baseUrl + w + '&pageNumber=1&pageSize=10&autoCorrect=true', options)
        .then(response => response.json())
        .then(response => console.log(response.value.map(e => e.url)))
        .catch(err => console.error(err));
    }
  }

  useEffect(() => {
    FetchWords();
    FindImages()
    // getImages()
  }, [])

  useEffect(() => {
    setWord(data.map(item => item.word))
    setQ(word)
    // log(data)
  }, [data])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cards}>
        {
          data.map((item) => item.results &&
            <Card
              word={item.word} key={item.word}
              meaning={item.results.map(def => def.definition)}
              typeOf={item.results.map(def => def.partOfSpeech)}
              prounciation={item.pronunciation ?
                (item.pronunciation.all ? ("\n/" + item.pronunciation.all + "/") :
                  ("\n/" + item.pronunciation + "/"))
                : " "}
              src={source[0]}
            />
          )
        }
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});

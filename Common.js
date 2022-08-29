export var log = console.log.bind(console);

export const fetchUrl = 'https://wordsapiv1.p.rapidapi.com/words/?random=true';
export const defUrl = (w) => 'https://wordsapiv1.p.rapidapi.com/words/' + w + '/definitions'

export const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '004c008df7msh873d3c4709f2eb3p15615bjsn6188cad98adb',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
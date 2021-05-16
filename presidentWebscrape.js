
const axios = require('axios')
const cheerio = require('cheerio')
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

async function getUSPresidents() {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const table = $('.wikitable:contains("President")')
    table.find('tbody tr').each((i, element) => {
        
        const $element = $(element)
        const state ={}
        state.name =$element.find('td b a').text()
        fixedState = state.filter(Boolean)
        console.log(fixedState)
    })
}

getUSPresidents()
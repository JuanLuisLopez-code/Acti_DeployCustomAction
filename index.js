const core = require('@actions/core');
const fs = require('fs');
const frase_buena = core.getInput('frase_buena');
const frase_negativa = core.getInput('frase_negativa');
const resultado_tests = core.getInput('resultado_tests');

try {
    let url_meme = 'https://api.memegen.link/images/aag/_/'

    if (resultado_tests == 'succes') {
        url_meme = url_meme + frase_buena + '.png'

    } else {
        url_meme = url_meme + frase_negativa + '.png'
    }
    console.log(url_meme)
    fs.writeFileSync('README.md', `<img src="${{url_meme}}"/>`);
} catch (error) {

}

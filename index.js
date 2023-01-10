const core = require('@actions/core');
const fs = require('fs').promises;
const frase_buena = core.getInput('frase_buena');
const frase_negativa = core.getInput('frase_negativa');
const resultado_tests = core.getInput('resultado_tests');

async function check_meme() {
    try {
        let url_meme = 'https://api.memegen.link/images/aag/_/'

        if (resultado_tests == 'success') {
            url_meme = url_meme + frase_buena + '.png'

        } else {
            url_meme = url_meme + frase_negativa + '.png'
        }
        console.log(url_meme)
        await fs.writeFile('README.md', '<img src="' + url_meme + '">');
    } catch (error) {

    }

}

check_meme()
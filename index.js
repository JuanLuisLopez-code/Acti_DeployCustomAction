const core = require('@actions/core');
const frase_buena = core.getInput('frase_buena');
const frase_negativa = core.getInput('frase_negativa');
const resultado_tests = core.getInput('resultado_tests');

try {
    console.log(frase_buena)
    console.log(frase_negativa)
    console.log(resultado_tests)
} catch (error) {
    
}

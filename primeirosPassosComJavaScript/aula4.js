
const { error } = require('console')
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname,'tarefas.csv')

const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf-8')) //essa sintaxe omite o return de dentro da arrow function, pq só tem isso nela!
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha)=>{
        const [nome, feito] = linha.split(';')
        return{
            nome,
            feito: feito.trim() === 'true' 
        }//essa é a sintaxe usual de uma arrow function "mais complexa" digamos...
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu Ruim!', error))

//ou vc substitui isso tudo por:
async function buscarArquivo(){
    try{
        let arquivo = await fs.promises.readFile(filePath)
        arquivo = arquivo.toString('utf-8')
        arquivo = arquivo.split('\n').slice(1)
        arquivo = arquivo.map((linha)=>{
            const [nome, feito] = linha.split(';')
            return{
                nome,
                feito: feito.trim() === 'true' 
            }
        })
        console.log(arquivo)
    } catch (error){
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
}
buscarArquivo() //usando async e await fica mais legível
import $ from 'jquery';
import './CSS/teste.scss'
import imagem from './images/c1.jpg'
import Botao from './components/botao/index.js'

$('#imagem').attr('src', imagem)

$(function(){
    let botao = new Botao()
    botao.setTitle('Testador')
    botao.setClick(()=>{alert('Clicou!')})

    $('.area').html(botao.render())

})
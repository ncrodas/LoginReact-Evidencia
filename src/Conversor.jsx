import { useState } from 'react'
import './App.css'

function Conversor () {

  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')

function cambiarTexto(evento) {
  setTextoAVoz(evento.target.value)
}
function convertirTextoAVoz() {
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance(textoAVoz)
  synth.speak(utterThis)
}
function resultado(event){
  setVozATexto(event.results[0][0].transcript)
}

function grabarVozATexto(){
  const recognition = new window.webKitSpeechRecognition()
  recognition.lang = 'es-ES'
  recognition.start()
  recognition.onresult = resultado
  }
 
    return (
      <>
      <h1>Conversor TTS y STT</h1>
       <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto}/>
      <button onClick={convertirTextoAVoz}>CONVERTIR</button>

      <h3>Conversor de voz a texto</h3>
      <button onClick={grabarVozATexto}>GRABAR</button>
      {vozATexto}
    </>
    );

  }
export default Conversor

import './App.css'
import { NavBar } from './assets/navBar'
import {ItemListContainer} from './assets/itemListContainer'

function App() {
  return(
    <div>
      <NavBar />
      <itemListContainer name= "Anillo de Compromiso Solitario" price= {2500} material= "Oro Blanco de 18 quilates"/>
      <itemListContainer name= "Collar de Perlas Clásico" price= {1200} material= "Perlas Cultivadas y Cierre de Plata Esterlina"/>
      <itemListContainer name= "Pulsera de Diamantes Tennis" price= {5000} material= "Oro Amarillo de 14 quilates y Diamantes"/>
    </div>
  )
}
export default App

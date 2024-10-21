import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
function App() {


  return (
   <div>
    
  <NavBar/>
  <ItemListContainer saludo ={"Hola Amigos Vengan Por las mejores Ofertas"} />
   </div>
  )
}

export default App
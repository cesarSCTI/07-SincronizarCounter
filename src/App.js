import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer getting=' hola, vengo desde el archivo app'/>
          </Route>
          <Route exact path='/category/:categoryID'>
            <ItemListContainer getting=' hola, soy categoria'/>
          </Route>
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

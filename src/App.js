import Item from './components/Item';
import Card from './components/Card';

const App = () =>{
  return (
    //lista que trabalha com o component que tem a propriedade children
    <>
      <h1>Primeira aplicação</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>  
      <Card/>
    </>
  )   
}
export default App;

//function App(){
  //return{
    //<h1>Hello</h1>
  //}
//}
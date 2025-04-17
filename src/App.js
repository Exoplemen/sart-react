import './App.css';
import Greeting from './components/welcome'
import MyButtton from'./components/button'
import ItemList from'./components/itemLi'
import ItemSelector from './components/itemSelector'
import BlockColor from './components/color';
import UseEffect from './components/Test';
import UseRef from './components/UseRef';
function App() {
  return (
    <>
    <Greeting name="Lev"/>
    <MyButtton label="Запуск ядерных ракет" onClick={()=> alert("Ядерные ракете запущены")}/>
    <MyButtton label="Экстренная отмена ядерки" onClick={()=> alert("Запуск ядерных ракет отменён")}/>
    <ItemList items={['яблоко','гранат','чурчхела','Пельмени']}/>
    <ItemSelector items={['ручка','карандаш','стёрка','пельмени']} onSelect={(element)=> alert(`Вы выбрали ${element}`)}/>
    <BlockColor color='green'/>
    <BlockColor color='red'/>
    <BlockColor color='blue'/>
    <UseEffect/>
    <UseRef/>
    </>
  );
}

export default App;
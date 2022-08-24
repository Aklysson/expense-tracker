import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { Item } from './types/item';

export const App =() => {
  const [list, setList] = useState(items);

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

   const deleteItem = (id:number) => {
    let newList = [...list]
    newList.splice(id,1)
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea list={list}/>
        <InputArea onAdd={handleAddItem}/>
        <TableArea list={list} handleDelete={deleteItem}/>

      </C.Body>
    </C.Container>
  );
}

export default App;
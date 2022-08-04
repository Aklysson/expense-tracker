import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dataFilter";
import { Item } from "./types/item";

export function App(){
  const [list,setList] = useState(items)
  const [filtedList,setFiltedList] = useState<Item[]>([])
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFiltedList(filterListByMonth(list, currentMonth))

  } , [list, currentMonth])


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de  informações */}
        {/* Área de inserir informações */}
        {/* Tabela De itens */}
        </C.Body>
    </C.Container>
  )
}
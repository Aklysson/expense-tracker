import { useState } from "react";
import * as C from "./styles";
import {Item} from '../../types/item'

interface InputProps {
    onAdd: (item:Item) => void;
}

export function InputArea({onAdd}:InputProps){
    const [dateField, setDateField] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    const newDateAdjusted = (dateField: string) => {
        let [year, month, day] = dateField.split('-')
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      }

      const handleAddEvent = () => {
        let errors: string[] = [];
    
        if(isNaN(new Date(dateField).getTime())) {
          errors.push('Data inválida!');
        }
        
        if(titleField === '') {
          errors.push('Título vazio!');
        }
        if(valueField <= 0) {
          errors.push('Valor inválido!');
        }
    
        if(errors.length > 0) {
          alert(errors.join("\n"));
        } else {
          onAdd({
            date: newDateAdjusted(dateField),
            expense: isExpense,
            title: titleField,
            value: valueField
          });
          clearFields();
        }
      }

      const clearFields = () => {
        setDateField('');
        setTitleField('');
        setValueField(0);
      }

    return (
        <C.Container>
           <C.Input
            type="date" 
            value={dateField} 
            onChange={e => setDateField(e.target.value)} />
             <C.RadioGroup>
        <label htmlFor="expense">Saída</label>
           <input
           type="radio" 
           id="expense" 
           defaultChecked
           name="TitleExpense" 
           onChange={() => setIsExpense(!isExpense)}/>
        <label htmlFor="Income">Entrada</label>
        <input
           type="radio" 
           id="Income" 
           name="TitleExpense" 
           onChange={() => setIsExpense(!isExpense)}
           />
        </C.RadioGroup>
        <C.Input  type="text"
        placeholder="Insira um título" 
        value={titleField} 
        onChange={e => setTitleField(e.target.value)} />       
        <C.Input type="number"
         placeholder="Insira um valor" 
         value={valueField > 0 ? valueField : ''} 
         onChange={e => setValueField(parseFloat(e.target.value))}
        /> <C.button
        onClick={handleAddEvent}>Enviar</C.button>

        </C.Container>
    )
}
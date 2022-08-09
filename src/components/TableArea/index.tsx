import * as C from "./styles";
import { Item} from '../../types/item'
import Income from '../../Assets/income.svg'
import Outcome from "../../Assets/outcome.svg"

type Props = {
    list: Item[]
}

export function TableArea({list} : Props){
      
    return(
        <C.Table>
           <thead>
                <tr>
                    <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={130}>Categoria</C.TableHeaderColumn>
                    <C.TableHeaderColumn >Título</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={150}>Valor</C.TableHeaderColumn>
                </tr>
           </thead>
           <tbody>
            
                {list.map((item,index) => (

                    <tr key={index}>
                        <td>{item.date.toDateString()}</td>
                        <td id={item.expense ? 'Outcome' : "Income"}>{item.expense ? 'Saídas' : 'Entradas'}</td>
                        <td>{item.title}</td>
                        <td>R$ {item.value.toFixed(2)}</td>
                        <td><img src={item.expense ? Outcome : Income} alt="Income" /></td>

                    </tr>
                ))}
            
           </tbody>
        </C.Table>
        
    )
}
import { Item } from "../../types/item";
import { Dashboard } from "../Dashboard";
import { Container } from "./styles";
import Income from '../../Assets/income.svg'
import Outcome from '../../Assets/outcome.svg'
import Total from '../../Assets/total.svg';

interface PropsList {
    list : Item[]
}


export function InfoArea({list}:PropsList){

    let entradas = list
    .filter((e) => !e.expense)
    .map((e) => Number(e.value))


    let totalIncome = Number(entradas.reduce((acc,cur) => acc + cur, 0)).toFixed(2)
    console.log(totalIncome)
    let saidas = list
    .filter((e) => e.expense)
    .map((e) => Number(e.value))
    

    let totalOutcome = Number(saidas.reduce((acc,cur) => acc + cur, 0)).toFixed(2)
    console.log(totalOutcome)

    let total = Number(totalIncome) - Number(totalOutcome)
    console.log((total))

    let totalFixed = total >= 0 ? (total).toFixed(2) : total + '(Débito)'
   return(
    <Container>
       
<Dashboard title="Entradas:" value={totalIncome} img={Income}/>
<Dashboard title="Saídas:" value={totalOutcome} img={Outcome}/>
<Dashboard title="Total:" value={totalFixed} img={Total}/>
    </Container>
   ) 
}
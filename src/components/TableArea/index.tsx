import * as C from "./styles";
import { Item } from "../../types/item";
import Income from "../../Assets/income.svg";
import Outcome from "../../Assets/outcome.svg";
import { BsTrashFill } from "react-icons/bs";

type Props = {
  list: Item[];
  handleDelete: (e:number) => void;

};

export function TableArea({ list , handleDelete }: Props) {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
          <C.TableHeaderColumn width={130}>Categoria</C.TableHeaderColumn>
          <C.TableHeaderColumn>Título</C.TableHeaderColumn>
          <C.TableHeaderColumn width={150}>Valor</C.TableHeaderColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.date.toDateString()}</td>
            <td id="category">
              {item.expense ? "Saídas" : "Entradas"}{" "}
              <img src={item.expense ? Outcome : Income} alt="Img" />
            </td>
            <td>{item.title}</td>
            <td>R$ {item.value.toFixed(2)}</td>
            <td className="ids"onClick={() => {handleDelete(index)}} >{<BsTrashFill />}</td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
}

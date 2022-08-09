import { Container } from "./styles";

interface DashboardProps {
    title: string;
    value: (string | number);
    img: string;
}

export function Dashboard({title , value , img} :DashboardProps){
    return (
        <Container>  
            <div className="top"> 
                <p>{title}</p>
                <img src={img} />
            </div>
                <p>{value}</p>     
        </Container>
    )
}
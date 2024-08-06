import Filho from "./Filho"

export default function Pai () {
    const somar = (valor1, valor2) => {
        return valor1 + valor2 
    }

    alert(somar(1, 2))
    return (
        <div>
            <Filho valor1={30} valor2={10}/>
        </div>
    )
}
import { useState } from "react";
// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

export default function Home() {
  const [listaProdutos, setListaProdutos] = useState([{
    id: 1,
    imagem: "https://static.netshoes.com.br/produtos/camisa-sao-paulo-i-2425-sn-torcedor-new-balance-masculina/24/39U-9320-024/39U-9320-024_zoom1.jpg?ts=1706540181?ims=1088x",
    nome: "Camisa Bonita"
  }, {
    id: 2,
    imagem: "https://oriba.vtexassets.com/arquivos/ids/186366-1200-auto?v=638496550031870000&width=1200&height=auto&aspect=true",
    nome: "Calça Legal"
  }, {
    id: 3,
    imagem: "https://m.media-amazon.com/images/I/71nf7t0tFCL._AC_SY575_.jpg",
    nome: "Sapato Lindo"
  }])

  return (
    <div>
      <h1>Loja de Roupas muito legal</h1>
    </div>
  );
}


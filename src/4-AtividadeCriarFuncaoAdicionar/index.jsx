import { useState } from "react";
// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`


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

  const [listaPedidos, setListaPedidos] = useState([])

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto])
    console.log(`Produto adicionado: ${objeto}`)
  }

  return (
    <div>
      <h1>Loja de Roupas muito legal</h1>
      {
        listaProdutos.map((produto, index) => 
          <div key={index}>
            <h1>{produto.nome}</h1>
            <img src={produto.imagem}></img>
          </div>
        )
      }
    </div>
  );
}
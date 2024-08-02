// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import { useState } from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer"

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
  }

  const removerItemPedidos = (objeto) => {
    let controlador = false
    let novaLista = listaPedidos.filter((produto) => {
      if (controlador == false) {
          if (produto.id == objeto.id) {
              controlador = true
              return false
          } else {
              return true
          }
      } else {
          return true
      }
  })
    setListaPedidos(novaLista)
  }

  return (
    <div>
    <Header title={"Sou um Header muito bonito"}/>
    <div>
      <div>
      <h1>Loja de Roupas muito legal</h1>
       <div> {
          listaProdutos.map((produto, index) =>
            <div key={index}>
              <h1>{produto.nome}</h1>
              <img src={produto.imagem}></img>
              <button onClick={() => adicionarItemPedidos(produto)}>Adicionar ao Carrinho</button>
            </div>
          )
        }
        </div>
      </div>
      <div>
        <h1>Pedidos:</h1>
        <div>
        {
          listaPedidos.map((produto, index) => 
            <div key={index}>
              <h1>{produto.nome}</h1>
              <img src={produto.imagem}></img>
              <button onClick={() => removerItemPedidos(produto)}>Remover do Carrinho</button>
            </div>
          )
        }
        </div>
      </div>
      </div>
      <Footer desenvolvedor={"Pedro Rossini Lanutti de Moraes"}/>
    </div>
  );
}

import { useState } from "react"
// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

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
    novaLista = listaPedidos.filter(produto => produto != objeto)
    setListaPedidos(novaLista)
  }

  return (
    <div>
      {
        listaPedidos.map((produto, index) => 
          <div key={index}>
            <h1>{produto.nome}</h1>
            <img src={produto.imagem}></img>
          </div>
        )
      }
    </div>

  );
}
import { useState } from "react";
// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
      {
        listaProdutos.map((produto, index) =>
          <div key={index}>
            <h1>{produto.nome}</h1>
            <img src={produto.imagem}></img>
            <button onClick={() => adicionarItemPedidos(produto)}>Adicionar ao Carrinho</button>
          </div>
        )
      }
    </div>

  );
}


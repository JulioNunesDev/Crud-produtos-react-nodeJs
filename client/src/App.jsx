import AddProdutos from './addProdutios'
import { useState } from 'react'
import Produtos from './produtos'
import { useAxios } from './hooks/useAxios'

import './App.css'

function App() {

    const {data} = useAxios('read')
   const [modal, setModal]=useState(false)
   
  return (
    <div className="App">

       <div className="box">
       <h2>Deposito de Produtos</h2>
        <AddProdutos  setModal={setModal} />
      <div className='modalBox'>
          
      {modal && (
        <div className='modal'>
        <span> Produto Criado!</span>
        </div>
      )}
      </div>

       </div>

       <div className="produtosListas">
       <h1>lista de Produtos</h1>
      
     <div className='listaDeProdutos'>
     {data?.map((val)=>{
        return <Produtos val={val} key={val._id}  />
      })}
     </div>
       </div>
    </div>
  )
}

export default App

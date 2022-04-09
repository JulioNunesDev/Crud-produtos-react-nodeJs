import { useState } from "react"

import './App.css'
import { useAxios } from "./hooks/useAxios"
import { Api } from "./api/Api"

const AddProdutos = ({setModal}) => {

    
  const [nameProduto, setNameProduto]=useState('')
  const [quantidade, setQuantidade]=useState(0)
  
  
  const {data, mutate}=useAxios('read') 

    const newAddProdutos=()=>{
        if(!nameProduto){
            return alert('preencha o campo')
          }
          if(!quantidade){
            return alert("selecione a quantidade!")
          }
            
            Api.post('insert',{
            nameProduto: nameProduto,
            quantidade: quantidade
          })
          
          const updateAdd = [...data, nameProduto, quantidade ]

          mutate(updateAdd, false)
          setNameProduto('')
          setQuantidade('')
          setModal(true)
         const timeOut = setTimeout(()=>{
          setModal(false)
          
         },800)
         
    
  
    }



    return ( 
        <div className="inputAddProdutos">
      <input type="text" onChange={(e)=>setNameProduto(e.target.value)}
      placeholder="Insira o nome do produto" />

    <input type="number" onChange={(e)=>setQuantidade(e.target.value)}
    placeholder="Insira a quantidade" />

    <button onClick={newAddProdutos}>inserir produto</button><br/><br/>
      
        </div>
     );
}
 
export default AddProdutos;
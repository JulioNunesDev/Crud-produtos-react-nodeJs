import { useState } from "react";
import './App.css'
import { Api} from './api/Api'
import {useAxios} from './hooks/useAxios'

const Produtos = ({val}) => {
    const {data,mutate}= useAxios('read')
    
    const [newProduto, setNewProduto]=useState('')

    const updateProduto=(id)=>{
        Api.put('/update',{
            id: id,
            newProduto: newProduto
        })
    }
  
    
    const deleteProduto=(id)=>{
        Api.delete(`/delete/${id}`)

        const updateDelete = data?.filter((newdelete)=> newdelete._id !== id)
        mutate(updateDelete, false)
    }
    

    return ( 
        <div  className="ProdutosListados">
         
        <ul >
            <li>
            Nome Produto: <span> {val.produtoName}</span>
            </li>

            <li>
                quantidade:{val.qtProdutos}
            </li>
            <li><button  onClick={()=>deleteProduto(val._id)}>delete</button></li>
        </ul>
        <div className="updateInput">
        <input type="text"  onChange={(e)=>setNewProduto(e.target.value)} 
        placeholder="Atualize o nome do produto"/>
            <button onClick={()=>updateProduto(val._id)}>update </button>
        </div>
        </div>
     );
}
 
export default Produtos;
import { useState } from "react";
function Frutas(){
    const [listadoDeFrutas, setListadoDeFrutas]=useState(["Naranja","Melon","Sandia"]);
    const agregarFruta=e=>{
        e.preventDefault();
        let nuevaFruta=e.target.nuevaFruta.value;
        setListadoDeFrutas([
            ...listadoDeFrutas,nuevaFruta
        ]);
        e.target.nuevaFruta.value="";
    }
    return(
        <div>
            <h2>Listado de Nombres</h2>
            <ul>
                {
                    listadoDeFrutas.map((fruta,i)=>{
                        return <li key={i}>{fruta}</li>
                    })
                }
            </ul>
            <form onSubmit={agregarFruta}>
                <input name="nuevaFruta" type="text" /><br/>
                <button>Añadir nueva Fruta</button>
            </form>
        </div>
    )
}
export default Frutas;
import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Contexto } from '../Context/Contexto';



const Create = () => {

    const {Guardar}=useContext(Contexto)

    const [Nombre,SetNombre] = useState("")
    const [Autor,SetAutor] = useState("")
    const [Edicion,SetEdicion] = useState("")

    const navigate = useNavigate()

    const handlSubmit= async (e) =>{
        e.preventDefault()
        Guardar(Nombre,Autor,Edicion)
        navigate("/")
    }

  return (
    <div>
        <div>
            <h1 className="text-center">Agregar Nuevo Libro</h1>
            <div className='d-flex justify-content-center'>
                <form className="form-group col-sm-6"onSubmit={handlSubmit}>
                    <div className='form-group '>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={Nombre}
                            onChange={ (e) => SetNombre(e.target.value)} 
                            type="text"
                            className='form-control bg-dark'
                        />
                    </div>

                    <div className='form-group '>
                        <label className='form-label'>Autor</label>
                        <input
                            value={Autor}
                            onChange={ (e) => SetAutor(e.target.value)} 
                            type="text"
                            className='form-control bg-dark'
                        />
                    </div>

                    <div className='form-group '>
                        <label className='form-label'>Edicion</label>
                        <input
                            value={Edicion}
                            onChange={ (e) => SetEdicion(e.target.value)} 
                            type="text"
                            className='form-control bg-dark'
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'><i className="fa-solid fa-check">Guardar</i></button>
                    <Link to={"/"} className="btn btn-primary m-2"><i className="fa-solid fa-rotate-left">Volver</i></Link>
          
                </form>
            </div>
        </div>
    </div>
  )
}

export default Create
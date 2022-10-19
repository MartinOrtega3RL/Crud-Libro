import { useEffect,useState } from "react"
import { useNavigate ,useParams} from "react-router-dom"

import { getDoc,updateDoc,doc } from "firebase/firestore"

import { db } from "../Services/Firebase"
import { Link } from "react-router-dom"


const Edit = () => {
    const [Nombre,SetNombre] = useState("")
    const [Autor,SetAutor] = useState("")
    const [Edicion,SetEdicion] = useState("")

    const navigate= useNavigate()

    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()

        const ReferenceDoc = doc(db,"Libros",id)

        const data = {Nombre:Nombre,Autor:Autor,Edicion:Edicion}
        
        await updateDoc(ReferenceDoc,data)

        navigate("/")

    }

    const getLibrobyID= async (id) =>{

       const Referencia = await getDoc(doc(db,"Libros",id))
       
       if (Referencia.exists()){
            SetNombre(Referencia.data().Nombre)
            SetAutor(Referencia.data().Autor)
            SetEdicion(Referencia.data().Edicion)

       } else{
        console.log("Ese Nombre No existe")
       }

    }

    useEffect(() =>{
        getLibrobyID(id)
        //eslint-disable-next-line
    },[])
    
  return (
    <div>
    <div>
        <h1 className="text-a">Editar</h1>
        <div className="d-flex justify-content-center">
            <form className= "form-group col-sm-6" onSubmit={update}>
                <div className='form-group '>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={Nombre}
                        onChange={ (e) => SetNombre(e.target.value)} 
                        type="text"
                        className='form-control bg-dark'
                    />
                </div>

                <div className='form-group'>
                    <label className='form-label'>Autor</label>
                    <input
                        value={Autor}
                        onChange={ (e) => SetAutor(e.target.value)} 
                        type="text"
                        className='form-control bg-dark'
                    />
                </div>

                <div className='form-group'>
                    <label className='form-label'>Edicion</label>
                    <input
                        value={Edicion}
                        onChange={ (e) => SetEdicion(e.target.value)} 
                        type="text"
                        className='form-control bg-dark'
                    />
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-check">Actualizar</i></button>
                <Link to={"/"} className="btn btn-primary m-2"><i className="fa-solid fa-rotate-left">Volver</i></Link>
      
            </form>
        </div>
    </div>
</div>
  )
}

export default Edit
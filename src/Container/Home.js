import React, { useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../Context/Contexto";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);



const Show = () => {

  const {getLibros,Libros,deleteLibros}=useContext(Contexto)

  // 4 Funcion para eliminar un doc

  //5 Aplicar Sweet Alert2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el Libro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteLibros(id)               
        Swal.fire(
          'Eliminado!',
          'Tu Archivo Fue Eliminado.',
          'success'
        )
      }
    })    
  }
  //6 - usamos useEffect
  useEffect(() => {
    getLibros();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="container bg-dark">
      <div className='row'>
        <div className='col'>
          <div className="d-flex justify-content-center ">
            <Link to="/Crear" className='btn btn-secondary mt-2 mb-2'>Crear</Link>
          </div>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Autor</th>
                <th>Edicion</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              { Libros.map( (Libro) => (
                <tr key={Libro.id}>
                  <td>{Libro.Nombre}</td>
                  <td>{Libro.Autor}</td>
                  <td>{Libro.Edicion}</td>
                  <td>
                    <Link to={`/Edit/${Libro.id}`} className="btn btn-light"><i className="fa-regular fa-pen-to-square"></i></Link>
                    <button onClick={ () => { confirmDelete(Libro.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Show;
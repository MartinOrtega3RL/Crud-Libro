import { useContext, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Services/Firebase";
import { Contexto } from "./Contexto";
import { useParams } from "react-router";

export const UserFirebase = () => {
  const context = useContext(Contexto);
  if (!context) throw new Error("El context esta Vacio");
  return context;
};

export function FirestoreProvider(props) {
  const { children } = props;

  const { id } = useParams();

  const [Libros, setLibros] = useState([]);
  const LibrosCollection = collection(db, "Libros");

  const getLibros = async () => {
    const data = await getDocs(LibrosCollection);
    setLibros(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(Libros);
  };

  const deleteLibros = async (id) => {
    const LibrosDoc = doc(db, "Libros", id);
    await deleteDoc(LibrosDoc);
    getLibros();
  };

  const Guardar = async (Nombre,Autor,Edicion) => {
    await addDoc(LibrosCollection, {
      Nombre: Nombre,
      Autor: Autor,
      Edicion: Edicion
    });
  };

  const Update = async (Nombre,Autor,Edicion) => {
    const ReferenceDoc = doc(db, "Libros", id);

    const data = {
        Nombre: Nombre,
        Autor: Autor,
        Edicion: Edicion
    };

    await updateDoc(ReferenceDoc, data);
  };

  return (
    <Contexto.Provider
      value={{ getLibros, Libros, deleteLibros, Guardar, Update }}
    >
      {children}
    </Contexto.Provider>
  );
}

//Importamos nuestros componentes

import Create from "./Component/Crear";
import Edit from "./Component/Editar";
import Show from "./Container/Home";

import { FirestoreProvider } from "./Context/FirebaseContext";

//importar browser router

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <FirestoreProvider>
      <Routes>
        <Route path="/" element={<Show />} />
        <Route path="/Crear" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </FirestoreProvider>
  );
}

export default App;

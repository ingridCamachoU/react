import { useRef } from "react";

const FormNoControlado = () => {
  
  const formulario = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("procesando ....");

    const datos = new FormData(formulario.current)
    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos);

    const { todoName, todoDescripcion } = objetoDatos;
    if (!todoDescripcion.trim() || !todoName.trim()){
        console.log("no esta vacio");
        return;
    }
    console.log("paso validaciones");
  }

    return (
        <>
            <h2>No controlado</h2>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input className="form-control mb-2" type="text" placeholder="Ingrese Todo" name="todoName"/>

                <textarea className="form-control mb-2"  name="todoDescripcion" placeholder="Ingrese descipcion del todo"/>

                <select name="todoEstado" className="form-control mb-2">
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </>
    );
};

export default FormNoControlado;

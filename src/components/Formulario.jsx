import { useState } from "react";

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    });

    const handleSubmit = (e) =>{
        e.preventDefault()    
        console.log(todo);    
    };

    const handleChange = (e) => {
        const { name, value, checked,type} = e.target;

        setTodo({
             ...todo, 
             [name]: type === "checkbox" ? checked: value,
        });
    }
    
  return (
        <>
            <h2>No controlado</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" type="text" placeholder="Ingrese Todo" name="todoName" 
                onChange={handleChange} 
                value={todo.todoName}/> 

                <textarea className="form-control mb-2"  name="todoDescripcion" placeholder="Ingrese descipcion del todo" 
                onChange={handleChange} 
                value={todo.todoDescripcion}/>

                <select name="todoEstado" className="form-control mb-2" onChange={handleChange}
                 value={todo.todoEstado}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" 
                     onChange={handleChange} 
                     checked={todo.todoCheck} 
                     name="todoCheck" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Dar prioridad
                    </label>
                </div>

                <button className="btn btn-primary" type="submit">Agregar</button>
            </form>
        </>
    );
}

export default Formulario;

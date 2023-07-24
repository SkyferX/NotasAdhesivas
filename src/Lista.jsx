import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import { v4 as uuid } from 'uuid';
import './style.css'


function Lista() {
    const [tareas, setTareas] = useState([]);
    const tareaRef = useRef();
    const tareadescRef = useRef();
    const sladercheckRef = useRef();
    const KEY = "notas"

    useEffect( ()=> {
        const mistareas = JSON.parse(localStorage.getItem(KEY));
        if (mistareas){
            setTareas(mistareas)
        }
    },[]);

    useEffect(() => {
        const json = JSON.stringify(tareas);
        console.log(json)
        localStorage.setItem(KEY , json);
    },[tareas]);

    const agregar = () => {
        const tarea = tareaRef.current.value;
        const description = tareadescRef.current.value;
        const sladercheck = sladercheckRef.current.checked;      
        if (description === '') return;
        setTareas( (prev) => {
            const nuevaTarea = {
                id:uuid(),
                tarea:tarea,
                description:description,
                important:sladercheck
            }
            return [...prev, nuevaTarea];
        });

        tareaRef.current.value = '';
        tareadescRef.current.value = '';
        sladercheckRef.current.checked = false;
    }

    return (
        <>
            <h2 className="PrincipalTitle">Notas</h2>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <input id="title" ref={tareaRef} className="form-control" placeholder="Titulo"></input>
                    </div>
                    <div className="col-5">
                        <input id="desc" ref={tareadescRef} className="form-control" placeholder="Descripción (Obligatorio)"></input>
                    </div>
                    <div className="col">
                        <div className="form-check form">
                            <input class="form-check-input" ref={sladercheckRef} type="checkbox" value="" id="flexCheckDefault"></input>
                            <label class="form-check-label" for="flexCheckDefault">Importante</label>
                        </div>
                    </div>
                    <div className="col-5">
                        <button id="boton" onClick={agregar} className="btn btn-primary">Agregar</button>
                    </div>
                </div>
                <div className="row">
                    {tareas.map((t) => (
                        <Item key={t.id} tarea={t.tarea} description={t.description} important={t.important}></Item>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Lista;
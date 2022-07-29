import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const AddTodo = ({onNewTodo}) => {
    const {description,onInputChange, onResetForm} = useForm({
        description:''
    })

    const onSubmit = (e)=>{
        e.preventDefault();
        if( description.length <=1) return

        const newTodo = {
            id: new Date().getTime() ,
            description,
            done: false
        }
        onNewTodo(newTodo)
        onResetForm()
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="add tarea"
            className="form-control"
            name='description'
            value={description}
            onChange={onInputChange}
        />

        <button type="submit"
            className="btn btn-outline-primary mt-2"
        >
            Agregar
        </button>
        
    </form>
  )
}

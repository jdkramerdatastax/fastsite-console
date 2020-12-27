import React, { useState, useEffect } from 'react'

const EditEntityForm = props => {
  const [ entity, setEntity ] = useState(props.currentEntity)

  useEffect(
    () => {
        setEntity(props.currentEntity)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setEntity({ ...entity, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateEntity(entity.id, entity)
      }}
    >
        <label>Id</label>
        <input type="text" name="id" value={entity.id} disabled="disabled"/>
        <label>Title</label>
        <input type="text" name="title" value={entity.title} onChange={handleInputChange} />
        <label>Subtitle</label>
        <input type="text" name="subtitle" value={entity.subtitle} onChange={handleInputChange} />
        <label>Image URL</label>
        <input type="text" name="image" value={entity.image} onChange={handleInputChange} />
        <label>Category</label>
        <input type="text" name="category" value={entity.category} onChange={handleInputChange} />
        <label>Description</label>
        <textarea name="description" value={entity.description} rows="4" onChange={handleInputChange} />
        <button>Update entity</button>
        <button onClick={() => props.setEditing(false)} className="button muted-button">
            Cancel
        </button>
    </form>
  )
}

export default EditEntityForm

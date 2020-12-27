import React, { useState } from 'react'

const AddEntityForm = props => {
	const initialFormState = { id: '', title: '', subtitle: '', image: '', description: '', category: '' }
	const [ entity, setEntity ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setEntity({ ...entity, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!entity.id || !entity.title){
                    alert("Please add id and title");
                    return
                }

				props.addEntity(entity)
				setEntity(initialFormState)
			}}
		>
			<label>Id</label>
			<input type="text" name="id" value={entity.id} onChange={handleInputChange} />
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
			<button>Add new entity</button>
		</form>
	)
}

export default AddEntityForm

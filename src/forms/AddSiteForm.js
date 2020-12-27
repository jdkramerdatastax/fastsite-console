import React, { useState } from 'react'

const AddSiteForm = props => {
	const initialFormState = { id: '', name: '', heading: '', categories: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.id || !user.name){
                    alert("Please provide site id and name");
                    return
				}
				user.id = user.id.trim().toLowerCase();
				if(!user.heading){
					user.heading = user.name;
				}
				if(user.categories){
					user.categories = user.categories.trim().split(",");
					user.categories = user.categories.map(string => string.trim())
				}else{
					user.categories = []
				}

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Id</label>
			<input type="text" name="id" value={user.id} onChange={handleInputChange} />
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Heading</label>
			<input type="text" name="heading" value={user.heading} onChange={handleInputChange} />
			<label>Categories</label>
			<input type="text" name="categories" value={user.categories} onChange={handleInputChange} />
			<button>Add new site</button>
		</form>
	)
}

export default AddSiteForm

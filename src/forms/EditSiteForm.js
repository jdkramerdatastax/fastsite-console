import React, { useState, useEffect } from 'react'

const EditSiteForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser({...props.currentUser, categories: props.currentUser.categories.join()})
    },
    [ props ]
  ) 

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name){
          alert("Please provide site name");
          return
        }
        if(!user.heading){
					user.heading = user.name;
				}
				if(user.categories){
          user.categories = user.categories.trim().split(",");
          user.categories = user.categories.map(string => string.trim())
				}else{
					user.categories = []
				}

        props.updateUser(user.id, user)
      }}
    >
      <label>Id</label>
			<input type="text" name="id" value={user.id} disabled="disabled" />
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Heading</label>
			<input type="text" name="heading" value={user.heading} onChange={handleInputChange} />
			<label>Categories</label>
			<input type="text" name="categories" value={user.categories} onChange={handleInputChange} />
      <button>Update site</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditSiteForm

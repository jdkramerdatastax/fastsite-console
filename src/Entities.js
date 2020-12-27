import React, { useState, useEffect, Fragment } from 'react'
import AddEntityForm from './forms/AddEntityForm'
import EditEntityForm from './forms/EditEntityForm'
import EntityTable from './tables/EntityTable'
import axios from './myAxios'


const Entities = props => {

	const initialFormState = { id: '', title: '', subtitle: '', image: '', description: '', category: '' }

	// Setting state
	const [ entities, setEntities ] = useState([])
	const [ currentEntity, setCurrentEntity ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	useEffect(() => {
		fetchData()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	// CRUD operations
	const fetchData = async () => {
		const results = await axios.get('/.netlify/functions/list?site=' + props.currentSite.id)
		console.log(results.data)
		setEntities(results.data)
	}

	const addEntity = entity => {
	
		axios.post('/.netlify/functions/add?site=' + props.currentSite.id, entity)
		.then((response) => {
			console.log(response)
			setEntities([ ...entities, entity ])
		})
		.catch((err) => {
			console.error(err)
		})		
	}

	const deleteEntity = id => {

		axios.post('/.netlify/functions/delete?site=' + props.currentSite.id, {id : id})
		.then((response) => {
			setEntities(entities.filter(entity => entity.id !== id))
		})
		.catch((err) => {
			console.error(err)
		})	
	}

	const updateEntity = (id, updatedEntity) => {

		axios.post('/.netlify/functions/add?site=' + props.currentSite.id, updatedEntity)
		.then((response) => {
			setEditing(false)
			setEntities(entities.map(entity => (entity.id === id ? updatedEntity : entity)))
		})
		.catch((err) => {
			console.error(err)
		})	
	}

	const editRow = entity => {
		setEditing(true)
		setCurrentEntity(entity)
	}

	return (
        <div className="flex-row">
            <div className="flex-large">
                <button onClick={() => props.setViewing(false)} className="button muted-button">
                    Back
                </button>
                <h2>Content for site: {props.currentSite.name} </h2>
                <EntityTable entities={entities} editRow={editRow} deleteEntity={deleteEntity} />
            </div>
            <div className="flex-large">
                {editing ? (
                    <Fragment>
                        <h2>Edit entity</h2>
                        <EditEntityForm
                            editing={editing}
                            setEditing={setEditing}
                            currentEntity={currentEntity}
                            updateEntity={updateEntity}
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <h2>Add entity</h2>
                        <AddEntityForm addEntity={addEntity} />
                    </Fragment>
                )}
            </div>
        </div>
	)
}

export default Entities

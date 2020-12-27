import React from 'react'

const EntityTable = props => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.entities.length > 0 ? (
        props.entities.map(entity => (
          <tr key={entity.id}>
            <td>{entity.id}</td>
            <td>{entity.title}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(entity)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteEntity(entity.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No entities</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default EntityTable

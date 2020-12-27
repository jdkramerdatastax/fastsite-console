import React from 'react'

const SiteTable = props => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td><a href={process.env.REACT_APP_SITES_URL+user.id} target="_blank" rel="noopener noreferrer">{user.id}</a></td>
            <td>{user.name}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  props.viewContent(user)
                }}
                className="button muted-button"
              >
                Content
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No sites</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default SiteTable

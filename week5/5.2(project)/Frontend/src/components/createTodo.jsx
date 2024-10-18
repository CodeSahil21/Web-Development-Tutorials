import React, { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input 
        id="title" 
        type="text" 
        placeholder="title" 
        onChange={(e) => setTitle(e.target.value)} 
      /> 
      <br />
      <input 
        id="desc" 
        type="text" 
        placeholder="description" 
        onChange={(e) => setDescription(e.target.value)} 
      /> 
      <br />
      <button onClick={() => {
        fetch('http://localhost:3000/todo', {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(async (response) => {
          const data = await response.json();
          alert("Todo Created");
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Failed to create todo');
        });
      }}>Add Todo</button>
    </div>
  );
}

export default CreateTodo;

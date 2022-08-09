import React from "react";
import { useState, useEffect } from "react";

const Todo = { id, title, completed } => {
	const [tarefa, setTarefas] = useState([
		{ id: 1, title: "lavar a louça", completed: "sim" },
		{ id: 2, title: "estudar", completed: "nao" },
	]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {setTarefas(json); setLoading(false)});
});

return (
    <div className="Todo">
    <h1>Tarefas de {user.name} </h1>
    </div>
);
];












return (
    <div className="App">
        <h1>Lista de usuários</h1>
        <div className="card">
    {loading ? <h2>Carregando...</h2> : null}
            <ul>
      <PersonIcon />
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    </div>
);
};

import { useState, useEffect } from "react";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
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

export default App;

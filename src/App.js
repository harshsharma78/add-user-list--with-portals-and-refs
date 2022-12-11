import React, { useState, Fragment } from 'react';
import AddUser from '../src/Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList(prevUsersList => {
			return [
				...prevUsersList,
				{ name: userName, age: userAge, id: Math.random().toString() },
			];
		});
	};
	return (
		<Fragment>
			{/*<div> or <> or <React.Fragment> */}
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
			{/*</div> or </> or </React.Fragment */}
		</Fragment>
	);
}

export default App;

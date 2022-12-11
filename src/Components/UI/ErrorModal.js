import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from '../UI/ErrorModal.module.css';
import React from 'react';

/* Portals --> To use Portals we have to add DIVS IN THE PUBLIC FOLDER first and then create components for those modals such as backdrops or overlays, the components are defined here because app size is small but should be created separately if the app size is large and imported at their respective file. */

/* Portals helps in optimizing the structure of the html as modals should not be defined inside the html structure (like in divs or sections) directly but should be defined as closest to the body element of the html to improve the structure */

const Backdrop = props => {
	return (
		<div
			className={classes.backdrop}
			onClick={props.onConfirm}
		></div>
	);
};
const ModalOverlay = props => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = props => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
				// Rendered Position
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
};

export default ErrorModal;

import React from 'react';
import styles from './TodoInput.css';

const TodoInput = (props) => {

	return (
		<div className={styles.todoinput}>
			<div>
				<form onSubmit={props.addItem}>
					<input
						placeholder="Task"
						value={props.currentItem.text}
						onChange={props.handleInput}
					/>
					<button type="submit" className={styles.button}> Add Task </button>
				</form>
			</div>
		</div>
	)
}

export default TodoInput;

import React, { Component } from 'react';
import styles from './TodoItems.css';

const TodoItems = (props) => {

	const listItems = props.items.map((item) => {
		return (
			<li key={item.key} onClick={() => props.deleteItem(item.key)} className={styles.listItem}>
				{item.text}
			</li>
		)
	})

	return (
		<ul className={styles.main}>
			{listItems}
		</ul>
	)
}

export default TodoItems;

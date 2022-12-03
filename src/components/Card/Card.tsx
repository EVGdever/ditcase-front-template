import React, { useState } from 'react'

import styles from './Card.module.css'

export const Card = () => {
	const [number, setNumber] = useState(0)

	const onClick = () => {
		setNumber(number + 1)
	}

	const minus = () => {
		setNumber(number - 1)
	}

	return (
		<div className={styles.card}>
			<div onClick={onClick}>Нажали: {number} раз</div>
			<div className={styles.button} onClick={onClick}>+</div>
			<div className={styles.buttonminus} onClick={minus}>-</div>
		</div>
	)
}

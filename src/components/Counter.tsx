import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const decrement = () => {
		setCount((prev) => prev - 1);
	};

	return (
		<>
			<div>Count: {count}</div>
			<h1 className={styles.lol}>lol</h1>
			<button className={styles.btn} onClick={increment}>
				+
			</button>
			<button className={styles.btn} onClick={decrement}>
				-
			</button>
		</>
	);
};

export default Counter;

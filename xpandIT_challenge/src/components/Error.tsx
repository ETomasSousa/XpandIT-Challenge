import { ErrorProps } from '../types/Movie';
import error from './../assets/error.svg'
import styles from './../styles/Error.module.css';

const ErrorComponent = ({ message }: ErrorProps) => {
	return (
		<div className={styles.errorContainer}>
			<div className={styles.errorContent}>
				<img
					className={styles.errorLogo}
					src={error}
					alt="ERROR"
				/>
				<div>
					<p className={styles.errorMessage}>{message}</p>
					<p className={styles.errorMessage}>Try refresh the page!</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorComponent;

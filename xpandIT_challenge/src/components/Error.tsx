import { ErrorProps } from '../types/Movie';
import error from './../assets/error.svg'
import styles from './../styles/Error.module.css';

const ErrorComponent = ({ message }: ErrorProps) => {
	const messages: string[] = message.split(';')
	return (
		<div className={styles.errorContainer}>
			<div className={styles.errorContent}>
				<img
					className={styles.errorLogo}
					src={error}
					alt="ERROR"
				/>
				<div>
					{messages.map((message,index) => (
						<p key={index} className={styles.errorMessage}>{message.trim()}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ErrorComponent;

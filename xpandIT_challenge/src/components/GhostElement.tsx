import styles from './../styles/GhostElement.module.css'

export default function GhostElement() {
	return (
		<>
			<div className={styles.ghostTitle}></div>
			<div style={{ display: "flex", marginBottom: "42px" }}>
				<div className={styles.ghostFilter}></div>
				<div className={styles.ghostFilter}></div>
			</div>
			<div className={styles.movieGhostList}>
				<div className={styles.movieGhostListHeader}></div>
				<div className={styles.movieGhostItems}></div>
			</div>
		</>
	)
}

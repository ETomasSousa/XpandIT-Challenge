import './../styles/GhostElement.module.css'

export default function GhostElement() {
	return (
		<>
			<div className="ghost-title"></div>
			<div style={{ display: "flex", marginBottom: "42px" }}>
				<div className="ghost-filter"></div>
				<div className="ghost-filter"></div>
			</div>
			<div className="movie-ghost-list">
				<div className="movie-ghost-list-header"></div>
				<div className="movie-ghost-items"></div>
			</div>
		</>
	)
}

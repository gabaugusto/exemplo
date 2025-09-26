export default function Card({ icon, title, description, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-icon">
                {icon}
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <div className="play-indicator">
                <span>▶</span>
            </div>
        </div>
    );
}

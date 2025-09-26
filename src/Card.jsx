import { FiAlertOctagon } from "react-icons/fi";

export default function Card({ icon, title, description, onClick }) {

    var invert = false;

    if (true) {
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
                    <span>▶ <FiAlertOctagon /></span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card-invert" onClick={onClick}>
                <div className="card-icon">
                    {icon}
                </div>

                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
                <div className="play-indicator">
                    <span>▶ <FiAlertOctagon /></span>
                </div>
            </div>
        )
    }
}

export function CardOutro({ props, children }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-icon">
                {props.icon}
            </div>
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
            </div>
            <div className="play-indicator">
                <span>▶</span>
            </div>
        </div>
    );
}


function teste() {
    return (
        <>
            <h1>Teste</h1>
            <p>Isso é um teste</p>
        </>
    )
}

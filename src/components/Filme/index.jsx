import "./style.css";

export default function Filme({title, data, poster, length}){
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <h5>{title}</h5>
            <div className="specs">
                <p>{data}</p>
                <p>{length}</p>
            </div>
        </div>
    );
}
import "./style.css";

export default function Filme({title, data, poster, votes}){
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <h5>{title}</h5>
            <div className="specs">
                <p>{data}</p>
                <p>{votes}</p>
            </div>
        </div>
    );
}
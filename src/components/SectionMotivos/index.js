import "./style.css";

function SectionMotivos({title, description, image, imageAlt, alterna}){
    const zoomIn = (event) => {
        console.log(event.target);
        const {target: img} = event;
        img.style = "transform: scale(1.5); cursor: pointer; transition: 1s all"

    }

    const zoomOut = (event) => {
        console.log(event.target);
        const {target: img} = event;
        img.style = "transform: scale(1); transition: 1s all"

    }

    return(
        <div>
            <section className={`motivos ${alterna && "alterna"}`}>
                <div>
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    <img src={image} alt={imageAlt} onMouseOver={zoomIn} onMouseLeave={zoomOut} />
                 </div>
            </section>
        </div>  
    );
}

export default SectionMotivos;
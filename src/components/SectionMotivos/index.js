import "./style.css";

function SectionMotivos({title, description, image, imageAlt, alterna}){
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
                    <img src={image} alt={imageAlt} />
                 </div>
            </section>
        </div>  
    );
}

export default SectionMotivos;
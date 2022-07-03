import "./style.css";

function SectionMotivos(props){
    return(
        <div>
            <section className={props.styleClass}>
                <div>
                    <h1>{props.title}</h1>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div>
                    <img src={props.image} alt={props.imageAlt} />
                 </div>
            </section>
        </div>  
    );
}

export default SectionMotivos;
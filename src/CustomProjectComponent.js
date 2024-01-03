function CustomProjectComponent({ title, image, description, link }){
    return(
        <div className="custom-project">
        <img
            className="project-image"
            src={image}
            alt={title}
        />
        <div className="project-details">
            <br />
            <h5 className="project-title">{title}</h5>
            <p className="project-description">{description}</p>
            <a href={link} target="_blank" rel="noreferrer" className="btn btn-light">Project Link</a>
        </div>
        </div>
    )
}
  export default CustomProjectComponent;
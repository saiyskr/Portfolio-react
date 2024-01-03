import CustomProjectComponent from "./CustomProjectComponent";
const projectsData = [
    {
      title: 'Wine Quality Prediction',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1j7OyBgjdGZcShe7Hh_6s2DqYxNlT40w_4pItCqCq-g&s',
      // image :"https://media.istockphoto.com/id/1329437819/vector/vector-wine-glass-cheers-illustration.jpg?s=612x612&w=0&k=20&c=VteUpSeoiD2SO5D6w1Y3f9LPGE5exXInf9WR-Vb3rtE=",
      description: 'Made using Flask and Machine Learning Libraries.',
      link: 'https://github.com/saiyskr/DICStage3',
    },
    {
      title: 'Chatbot using Rasa NLU',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFenaAiBSPNEYFKDWNo9ziKvbPoqhnr1JxQ&usqp=CAU',
      description: 'Made using Angular and Python.',
      link: 'https://github.com/saiyskr/Chatbot',
    },
  ];
function Projects(){
    return(
        <div className='full-screen-text section-2' id="projects">
      <h4 className='textcenter'>PROJECTS</h4>
      <div className='row' style={{ height: '100vh' }}>
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <CustomProjectComponent
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
    )
}
export default Projects;
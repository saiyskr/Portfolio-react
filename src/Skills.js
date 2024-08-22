const skillsdata = [{title:"Angular",url:"https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png"},
{title:"React",url:"https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"},
{title:"HTML",url:"https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"},
{title:"CSS",url:"https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"},
{title:"Bootstrap",url:"https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"},
{title:"JavaScript",url:"https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"}
]
const skillsdata2=[
  {title:"Microsoft .NET",url:"https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"},
  {title:"Flask",url:"https://www.ivaylopavlov.com/wp-content/uploads/2019/02/2Python_flask-1280x720.jpg"},
  {title:"SQL",url:"https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"},
  {title:"Python",url:"https://www.svgrepo.com/show/376344/python.svg"}
]
function Skills(){ 
  return( 
    <section className='full-screen-text section-3 skills-section' id="skills"> 
    <h2 className='textcenter'>Some of my Technical Skills</h2> 
    <div className='container'> 
      <h5 className='m-4'> FRONTEND:</h5> 
      <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6'> 
      {skillsdata.map((item,index)=>( 
        <div key={index} className="col mb-4"> 
          <div className="d-flex flex-column align-items-center">
            <img src={item.url} title={item.title} className='skill-icon img-fluid'  alt={item.title} /> 
            <p className="mt-2">{item.title}</p> 
          </div>
        </div> 
      ))} 
      </div> 
    </div> 
    <div className='container'> 
      <h5 className='m-4'> BACKEND:</h5> 
      <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'> 
      {skillsdata2.map((item,index)=>( 
        <div key={index} className="col mb-4"> 
          <div className="d-flex flex-column align-items-center">
            <img src={item.url} title={item.title} className='skill-icon-2 img-fluid'  alt={item.title} /> 
            <p className="mt-2">{item.title}</p> 
          </div>
        </div> 
      ))} 
      </div> 
    </div> 
    <style>
      {`
      .skill-icon, .skill-icon-2 {
        // animation: flip 5s infinite;
        max-width: 100px;
        height: auto;
      }
      @keyframes flip {
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(180deg);
        }
        100% {
          transform: rotateY(0deg);
        }
      }
      @media (max-width: 768px) {
        .skill-icon, .skill-icon-2 {
          max-width: 60px;
        }
        h5 {
          font-size: 1.1rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      `}
    </style>
    </section> 
  ) 
} 
export default Skills;
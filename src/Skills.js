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
      <h2 className='textcenter'>Technical Skills</h2>
      <div className='row'>
      <h5 className='m-4'> FRONTEND:</h5>
      {skillsdata.map((item,index)=>{
        return(
          <div className="col m-4">
          <img src={item.url} title={item.title} className='skill-icon'  alt="icon" />
          <p>{item.title}</p>
          </div>
        )
      })}
      </div>
      <div className='row'>
      <h5 className='m-4'> BACKEND:</h5>
      {skillsdata2.map((item,index)=>{
        return(
          <div className="col m-2">
          <img src={item.url} title={item.title} className='skill-icon-2'  alt="icon" />
          <p>{item.title}</p>
          </div>
        )
      })}
      </div>
      </section>
    )
}
export default Skills;
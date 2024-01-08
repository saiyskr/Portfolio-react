
function Contact(){
    return(
      //   <div className='full-screen-text section-4' id = "contact">
      //   <h4>Contact Me</h4>

      //     <strong><i className="fas fa-envelope bigger-icon"></i> :</strong>
      //     <a href="mailto:syeruva2@buffalo.edu"><span>syeruva2@buffalo.edu</span></a>
        
      //     <strong><i className="fas fa-phone bigger-icon"></i> :</strong>
      //     <a href="tel:+17169397219"><span>+1 (716) 939-7219</span></a>
        
      //     <strong><i className="fab fa-linkedin bigger-icon"></i> :</strong>
      //     <a href="https://www.linkedin.com/in/saikiranreddyy/" target="_blank" rel="noopener noreferrer"><span>LinkedIn Profile</span></a>
       
      //     <strong><i className="fab fa-github bigger-icon"></i> :</strong>
      //     <a href="https://github.com/saiyskr/" target="_blank" rel="noopener noreferrer"><span>GitHub Profile</span></a>
        
      //     <strong>Address:</strong>
      //     Buffalo, New York , USA
        
      // </div>
      <section id="contact" class="contact-section">
  <div class="contact-section-header">
    <h2>Let's work together...</h2>
    <p>How do you take your coffee?</p>
  </div>
  <div class="contact-links">
    <a
      href="https://www.linkedin.com/in/saikiranreddyy/"
      target="_blank"
      class="btn contact-details"
      rel="noopener noreferrer"
      ><i className="fab fa-linkedin bigger-icon"></i> LinkedIn</a>
    <a
      id="profile-link"
      href="https://github.com/saiyskr/"
      target="_blank"
      class="btn contact-details"
      rel="noopener noreferrer"
      ><i class="fab fa-github"></i> GitHub</a
    >
    {/* <a
      href="https://twitter.com/freecodecamp"
      target="_blank"
      class="btn contact-details"
      rel="noopener noreferrer"
      ><i class="fab fa-twitter"></i> Twitter</a
    > */}
    <a href="mailto:syeruva2@buffalo.edu" class="btn contact-details"
      ><i class="fas fa-at"></i> Send a mail</a
    >
    <a href="tel:716-939-7219" class="btn contact-details"
      ><i class="fas fa-mobile-alt"></i> Call me</a
    >
  </div>
</section>
    )

}
export default Contact;
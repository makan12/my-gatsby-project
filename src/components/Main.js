import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Makan Janani is a Web Application developer from Toronto, ON, and is currently working on developing his new project
          </p>
          <p>
          Throughout his recent project in developing a cost management webiste, Makan has found himself quite passionate about 
          Agile software development and programming in general. He enjoys developing websites and applications
           with JavaScript, but he believes in always picking the right tool for the job. He is particularly passionate
            about the intersections of Optimization domain, productivity, and computing.
          </p>
          <p>
          Apart from his professional ambitions and interests, Makan has been always working on expanding his knowledge whenever is needed. 
          He is eager to learn new techs no matter what.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p><a href="software-projects" style={{ textDecoration: `underline` }}><h1>Website</h1></a></p>
          <p>
          I have always been interested in the fast-growing world of software development and data science. The Covid-19 situation gave me a chance to expand my knowledge in this domain and improve my skills. 
          I used this opportunity to develop a web application from A to Z for analyzing my everyday expenses. It took three months to develop this application from scratch.
           The application uses a modern micro-service infrastructure and has been deployed on a cloud-based linux machine. It helps in managing and analyzing my monthly budget and spending habits. 
           I hope this to become a good momentum for me to continue surrounding myself with interesting technologies and work towards coordinating/implementing technological solutions. The used technologies are as follows:
          </p>
          <li>
          Back-end: Python, Django, RESTful API
          </li>
          <li>
          Front-end: JS, Gatsby, React, Material UI
          </li>
          <li>
          Software Deployment Technologies: Docker, docker-compose
          </li>
          <li>
          Data Analysis: Pandas, PostgresSQL
          </li>
          <li>
          OS: MacOS, Linux, Ubuntu
          </li>
           
         
        
          

         
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <p>Please reach out to Makan if you are interested in his work.</p>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/makan-janani-b3629768/"  className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://bitbucket.org/korosh12/"  className="icon fa-bitbucket"><span className="label">Bitbucket</span></a></li>
            <li><a href="https://github.com/makan12/"  className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="mailto: makan.janani@gmail.com" className="icon fa-google"><span className="label">Gmail</span></a></li>
            {/* <li><a href="https://github.com/makan12/"  className="icon fa-stripe"><span className="label">GitHub</span></a></li> */}
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

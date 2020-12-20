import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import S1 from '../images/s1.jpg'

const SoftwareProjects = () => (
  <Layout>
    <Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
    <br></br>
    <br></br>
    <h1>Projects</h1>
    <p>Below are some of Makan Janani's Web projects that highlight his various skills.</p>
   

    <div>
    <h2><a href="http://www.smart-split.com/">SmartSplit</a></h2>
      <img src={S1} alt="Capture" border="0"></img>
     
      <p>The application uses a modern micro-service infrastructure and has been deployed on a cloud-based linux machine. 
          It helps in managing and analyzing my monthly budget and spending habits</p>
      
      
    </div>
    
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SoftwareProjects
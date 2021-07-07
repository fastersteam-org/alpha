import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import "./YoutubeVideo.css"


import { Container, Row, Col } from "react-bootstrap"

const YoutubeVideo = () => (

<Container className = "Positioning">
  <Row>
    <Col lg={6}>
      <div className="embed-responsive embed-responsive-16by9">

        <iframe className="embed-responsive-item"
          width="640"
          height="360"
          id="player"
          allowfullscreen="true"
          
          frameborder="0" 
          src="https://www.youtube.com/embed/ZfNQm8YNrCA" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          title="YouTube"
          >
        </iframe>
      </div>
     


    </Col>
  </Row>
  </Container>


)

export default YoutubeVideo

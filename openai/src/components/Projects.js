

import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/ImageGen.png';
import projImg2 from '../assets/Keywords.jpeg';
import projImg3 from '../assets/ChatGPT.jpeg'


export const Projects = () => {

    const projects = [
      {
        title: "Image Generator",
        imgUrl: projImg1,
        siteUrl: "https://image-generator-production-f4e7.up.railway.app/"
      },
      {
        title: "Keyword Extractor",
        imgUrl: projImg2,
        siteUrl: "https://delightful-belekoy-04b7c4.netlify.app"
      },
      {
        title: "Chat GPT",
        imgUrl: projImg3,
        siteUrl: "https://www.loom.com/share/51de61f6a5804b468a5ee4f4bb78710e?sid=740fcb83-bd0d-4ae2-9a89-aaef3248e1e6"
      },
    ]

    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                  <div>
                    <h2>AI Components</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }
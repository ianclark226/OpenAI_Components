import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={3} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="app-btn">
          <button><a href={siteUrl}>Go to App</a></button>
          </div>
        </div>
        
      </div>
    </Col>
  )
}
import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-3 text-center">
        <img className="bg-white mb-1" src={data.companylogo} alt="" style={{ maxWidth: '60%', height: 'auto' }}/>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;
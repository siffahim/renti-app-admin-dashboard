import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Button, Col, Row } from 'antd';

import "./About.css"




const About = () => {

  const editor = useRef(null)
  const [content, setContent] = useState('');

  const aboutDataSave = () => {
    alert(content);

  }
  return (
    <div >
      
      <Row>
        <Col lg={{ span: 24 }}>

          <JoditEditor
            ref={editor}
            value={content}

            onChange={newContent => { setContent(newContent) }}
          />

          <Button onClick={aboutDataSave} block style={{ marginTop: "30px", backgroundColor: "#000b90", color: "#fff", height: "50px" }}>save</Button>

        </Col>
         
      </Row>

    </div>
  );
};

export default About;

import React from 'react';
import './KeyPeople.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FooterButtons from './FooterButtons';
import {useHistory} from 'react-router-dom';


export default function KeyPeople() {
  const history = useHistory()
    return (
      <div className="everything">
        <h2 className="people-title">UI Studio COPE</h2>
        <h4 className="people-subtitle">Key People</h4>
        <Container className="contenedor">
        <Row>
          <Col xs={6} md={2}>
            <Image className="roundedimg" src="https://api.starmeup.com/starmeup-api/v2/image/rtounkjsnksfopwhrbgg_png/300/300/1?imageAnimated=true" roundedCircle />
            <h6 className="item-name">Daniel Lazzarano</h6>
            <a className="find-me" href = "https://www.starmeup.com/profile/fec701ddb33545ce39414fcbf2fc3b1b">@damian.lazzarano</a>
            <p className="item-role">SP AND UI PARTNER</p>
            <p className="item-role">STUDIO PARTNER</p>
          </Col>
          <Col xs={6} md={2}>
            <Image className="roundedimg" src="https://api.starmeup.com/starmeup-api/v2/image/putsniwcmdargkvbzpad_png/300/300/1?imageAnimated=true" roundedCircle />
            <h6 className="item-name">David Correa</h6>
            <a className="find-me" href = "https://www.starmeup.com/profile/fec701ddb33545ce39414fcbf2fc3b1b">@david.correa</a>
            <p className="item-role blue">SP AND UI PARTNER</p>
            <p className="item-role blue">STUDIO PARTNER</p>
          </Col>
          <Col xs={6} md={2}>
            <Image className="roundedimg" src="https://api.starmeup.com/starmeup-api/v2/image/cqxaksibboczofffevxs/300/300/1?imageAnimated=true" roundedCircle />
            <h6 className="item-name">Luciana Zavaleta</h6>
            <a className="find-me" href = "https://www.starmeup.com/profile/fec701ddb33545ce39414fcbf2fc3b1b">@luciana.zavaleta</a>
            <p className="item-role">UI ENGENEERING</p>
            <p className="item-role">PARTNER</p>
          </Col>
          <Col xs={6} md={2}>
            <Image className="roundedimg" src="https://api.starmeup.com/starmeup-api/v2/image/uwjietbjhfbpnsfgsovb_png/300/300/1?imageAnimated=true" roundedCircle />
            <h6 className="item-name">Gabriel Martínez</h6>
            <a className="find-me" href = "https://www.starmeup.com/profile/6f1db4d69443e791993b7053ef0214c2">@gabriel.martinez</a>
            <p className="item-role blue">UI TDC FOCAL</p>
            <p className="item-role blue">TECH. DIRECTOR</p>
          </Col>
          <Col xs={6} md={2}>
            <Image className="roundedimg" src="https://api.starmeup.com/starmeup-api/v2/image/obthggdnwxqijsgqwblb_png/300/300/1?imageAnimated=true80" roundedCircle />
            <h6 className="item-name">Sebastián Gómez</h6>
            <a className="find-me" href = "https://www.starmeup.com/profile/fec701ddb33545ce39414fcbf2fc3b1b">@s.gomez</a>
            <p className="item-role">UI ENGENEERING</p>
            <p className="item-role">TECH. MANAGER</p>
          </Col>
          </Row>
    </Container>
    <FooterButtons 
        OnPrevious={()=>{
          history.push("/values")
          }}
        OnNext={()=>{
          history.push("/ready")
         }}
      /> 
      </div>
    );

  }
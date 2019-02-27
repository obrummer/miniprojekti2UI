import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Thread from './Thread';
import { getThreads } from '../../API/mock_calls';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapCategoryToImg = (category) => {
  let imgName = '';
  switch (category) {
    case 'javascript':
      imgName = 'javascript_icon.png';
      break;
    case 'database':
      imgName = 'database_icon.png';
      break;
    case 'mongodb':
      imgName = 'mongodb_icon.png';
      break;
    case 'nodejs':
      imgName = 'nodejs_icon.png';
      break;
    case 'postgresql':
      imgName = 'postgres_icon.png';
      break;
    case 'reactjs':
      imgName = 'reactjs_icon.png';
      break;
  }
  return 'img/' + imgName;
}

export default class ThreadContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const threadList = getThreads(this.props.category);
    const newList = threadList.map(thread => {
      return (
        <Col lg={4} key={thread.id}>
          <Thread
            author='Groot!'
            text={thread.topic}
            imageName={mapCategoryToImg(thread.category)}>
          </Thread>
        </Col>);
    });
    return (
      <Container>
        <Row>
          {newList}
        </Row>
      </Container>
    );
  }
}


import React, { Component } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getClientList } from '../../actions/authAction';

class Clients extends Component {
  componentDidMount() {
    this.props.getClientList();
  }
  render() {
    const { clients } = this.props.myClients;

    if(!clients) {
      <div>Loading</div>
    } else {
      console.log(clients);
    }
    return (
      <Row>
        <Col>
          <h1>Client List</h1>
          <Table responsive>
            <thead>
              <tr>
                <th>Client</th>
                <th>Courtrooom</th>
                <th>Division</th>
                <th>Judge</th>
                <th>county</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Case Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  myClients: state.myClients,
});

export default connect(mapStateToProps, { getClientList })(Clients);

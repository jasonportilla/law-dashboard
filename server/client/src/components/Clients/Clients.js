import React, { Component, Fragment } from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClientList } from '../../actions/authAction';
import './Clients.css';

class Clients extends Component {
  componentDidMount() {
    this.props.getClientList();
  }

  render() {
    const { clients } = this.props.myClients;
    let getClients;
    let clientButtons;
    let getClientAddress;
    if (clients === null) {
      return <div>Loading</div>;
    }
    if (clients !== null) {
      getClients = clients.map(client =>
      // if (client.address !== undefined) {
      //   getClientAddress = <td>{client.address.street}</td>;
      // }
        (
          <Fragment>
            <tr>
              <td>{client.firstName} {client.lastName}</td>
              <td>  {client.phoneNumber}</td>
              <td>  {client.judge}</td>
              <td>  {client.caseAmount}</td>
              <Button className="mt-2 view-client-btn">View Client</Button>
            </tr>
          </Fragment>
        ));
    }

    return (
      <Fragment>
        <Row className="client-list-header">
          <Col sm={4}>
            <h1>Client List</h1>
          </Col>

          <Col sm={8} className="add-client">
            <Button className="add-new-client-btn">Add Client</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={7} className="client-info-box">
            <Table responsive>
              <thead>
                <th>Client</th>
                <th>Phone Number</th>
                <th>Judge</th>
                <th>Case Amount</th>
              </thead>
              <tbody>
                { getClients }
              </tbody>
            </Table>
          </Col>
          <Col sm={5}>
            <div><h3>View Client section</h3></div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Clients.propTypes = {
  myClients: PropTypes.object.isRequired,
  getClientList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  myClients: state.myClients,
});

export default connect(mapStateToProps, { getClientList })(Clients);

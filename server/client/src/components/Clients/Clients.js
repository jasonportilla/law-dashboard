import React, { Component, Fragment } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClientList } from '../../actions/authAction';

class Clients extends Component {
  componentDidMount() {
    this.props.getClientList();
  }

  render() {
    const { clients } = this.props.myClients;
    let getClients;
    if (!this.props.myClients.clients) {
      <div>Loading</div>;
    }
    if (clients !== null) {
      getClients = clients.map((client) => {
        console.log('addres ', client.address);
        return (
          <Fragment>
            <tr>
              <td>{client.firstName} {client.lastName}</td>
              <td>{client.courtroom}</td>
              <td>{client.division}</td>
              <td>{client.judge}</td>
              <td>{client.county}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              {/* <td>{client.addressstreet}</td> */}
              <td>{client.caseAmout}</td>
            </tr>
          </Fragment>
        );
      });
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
              { getClients }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

Clients.propTypes = {
  myClients: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  myClients: state.myClients,
});

export default connect(mapStateToProps, { getClientList })(Clients);

import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Clients = () => (
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

export default Clients;

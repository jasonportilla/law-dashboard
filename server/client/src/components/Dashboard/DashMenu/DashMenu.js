import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './DashMenu.css';

const dashMenuList = [
  { name: 'Dashboard', icon: 'fas fa-chart-line', page: '/dashboard' },
  { name: 'Clients', icon: 'fas fa-users', page: '/clients' },
  { name: 'Payments', icon: 'fas fa-money-bill-alt', page: '/payments' },
  { name: 'Calendar', icon: 'far fa-calendar-alt', page: '/calendar' },
  { name: 'Tasks', icon: 'fas fa-tasks', page: '/tasks' },
  { name: 'Forms', icon: 'fab fa-wpforms', page: '/forms' },
  { name: 'Documents', icon: 'fas fa-file-alt', page: '/documents' },
  { name: 'Chat', icon: 'fas fa-comments', page: '/chat' },
  { name: 'Inovices', icon: 'fas fa-receipt', page: '/invoices' },
];

const DashMenu = () => {
  const menuList = dashMenuList.map(item => (
    <li className="dash-menu__item">
      <i className={`dash-menu__icons ${item.icon}`} /><Link to={item.page} className="dash-menu__name">{ item.name }</Link>
    </li>
  ));

  return (
    <Container fluid className="dash-menu__container">
      <Row>
        <Col>
          <ul className="dash-menu__items">
            { menuList }
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default DashMenu;

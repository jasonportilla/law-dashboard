import React from 'react';
import ChartistGraph from 'react-chartist';
import InputAdornment from '@material-ui/core/InputAdornment';
import People from '@material-ui/icons/People';
import CustomInput from './components/materialComponents/CustomInput/CustomInput.jsx';
import GridItem from './components/materialComponents/Grid/GridItem.jsx';
import GridContainer from './components/materialComponents/Grid/GridContainer.jsx';
import Card from './components/materialComponents/Card/Card.jsx';
import CardHeader from './components/materialComponents/Card/CardHeader.jsx';
import CardBody from './components/materialComponents/Card/CardBody.jsx';
import Button from './components/materialComponents/CustomButtons/Button';
import { straightLinesChart, simpleBarChart } from './components/materialComponents/variables/charts.jsx';


const App = () => (
  <div className="App">
    <header className="App-header m-t-5">
      <h1 className="text-center testing">
      Law Hub
      </h1>
      <h3 className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Morbi pretium tellus vitae urna sagittis, djdut pretium sapien faucibus. 
      Aliquam condimentum vel risus sit amet pharetra. Donec enim est,
      sodales condimentum lacinia id, imperdiet vel mi.
      Vestibulum aliquet hendrerit efficitur. Etiam elit
      sapien, convallis in est vitae, efficitur egestas
      erat. Donec elementum sapien ac leo sodales laoreet.
      Nam vel vestibulum massa, in ullamcorper quam.
      Pellentesque maximus, est quis aliquet venenatis,
      est neque rhoncus elit, rutrum tempor ex ligula ac
      enim. Aliquam rutrum ex non ex blandit scelerisque.
      Phasellus mattis nibh ut nisl accumsan, vel lacinia
      risus laoreet.
    </p>
    <Button>
Default
    </Button>
    <Button color="primary">
Primary
    </Button>
    <Button color="info">
Info
    </Button>
    <Button color="success">
Success
    </Button>
    <Button color="warning">
Warning
    </Button>
    <Button color="danger">
Danger
    </Button>
    <Button color="rose">
Rose
    </Button>


    <Card style={{ width: '20rem' }}>
      <img
        className="cardImgTop"
        data-src="holder.js/100px180/"
        alt="100%x180"
        style={{ height: '180px', width: '100%', display: 'block' }}
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        data-holder-rendered="true"
      />
      <CardBody>
        <h4>
Card title
        </h4>
        <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        <Button color="primary">
Go somewhere
        </Button>
      </CardBody>
    </Card>

    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="warning">
            <ChartistGraph
              className="ct-chart-white-colors"
              data={straightLinesChart.data}
              type="Line"
              options={straightLinesChart.options}
              listener={straightLinesChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className="cardTitle">
Straight Lines Chart
            </h4>
            <p className="cardCategory">
Line Chart with Points
            </p>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="info">
            <ChartistGraph
              className="ct-chart-white-colors"
              data={simpleBarChart.data}
              type="Bar"
              options={simpleBarChart.options}
              responsiveOptions={simpleBarChart.responsiveOptions}
              listener={simpleBarChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className="cardTitle">
Simple Bar Chart
            </h4>
            <p className="cardCategory">
Bar Chart
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>

    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="Disabled"
          id="disabled"
          formControlProps={{
      fullWidth: true
    }}
          inputProps={{
      disabled: true
    }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          id="regular"
          inputProps={{
      placeholder: 'Regular'
    }}
          formControlProps={{
      fullWidth: true
    }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="With floating label"
          id="float"
          formControlProps={{
      fullWidth: true
    }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="Success input"
          id="success"
          success
          formControlProps={{
      fullWidth: true
    }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="Error input"
          id="error"
          error
          formControlProps={{
      fullWidth: true
    }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="With material Icons"
          id="material"
          formControlProps={{
      fullWidth: true
    }}
          inputProps={{
      endAdornment: (<InputAdornment position="end">
        <People />
                     </InputAdornment>)
    }}
        />
      </GridItem>
    </GridContainer>
  </div>
);

export default App;

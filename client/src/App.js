import React from 'react';
import Button from './components/materialComponents/CustomButtons/Button';

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
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="rose">Rose</Button>
  </div>
);

export default App;

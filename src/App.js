import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-6">
          <Card>
            <Card.Header>
              <img src="https://dummyimage.com/400x120/dedede/000&text=cover image" class="card-img-top" alt="cover" />
            </Card.Header>
            <Card.Body>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;

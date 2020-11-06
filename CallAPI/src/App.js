import './App.css';

function App() {
  return (

    <div>
  
  <nav className="navbar navbar-expand-sm navbar-light bg-light mb-10 ">
        <a className="navbar-brand" href="#">CALL API DEMO</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Management Production</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container'>
        <div className="row mb-10">
          <div className="col">
            <button class="btn btn-primary" type="button" > Add Product </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">List Product </h4>
               
                <table class="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>1</td>
                      <td>Iphone 6 plus</td>
                      <td>400 USD</td>
                      <td> <label className="btn btn-warning"> Con Hang </label></td>
                      <td> 
                        <button className="btn btn-success"> Update </button> &nbsp;
                        <button className="btn btn-danger"> Delete </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

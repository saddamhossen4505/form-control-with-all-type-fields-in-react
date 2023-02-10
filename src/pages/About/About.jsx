const About = ({ name, setName }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4>About Page</h4>
                <hr />
                <h2>{name}</h2>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;

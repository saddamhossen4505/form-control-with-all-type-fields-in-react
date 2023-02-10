const Contact = ({ name }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4>Contact Page</h4>
                <hr />
                <h2>{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

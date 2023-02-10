import axios from "axios";
import { Component } from "react";
import swal from "sweetalert";
import "./ToDo.scss";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      input: {
        title: "",
        status: "",
      },
    };
  }

  // Get all data by axios.
  componentDidMount = () => {
    axios
      .get("http://localhost:5050/todos")
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...res.data],
        }));
      })
      .catch();
  };

  // Handle input Change.
  handleInputChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      input: {
        ...prevState.input,
        [e.target.name]: e.target.value,
      },
    }));
  };

  // HandleFormSubmit.
  handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5050/todos", this.state.input)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...prevState.todos, this.state.input],
        }));
      })
      .catch();
  };

  // HandleDeleteTodosList.
  handleDeleteTodosList = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you want to delete this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5050/todos/${id}`)
          .then((res) => {
            this.setState((prevState) => ({
              ...prevState,
              todos: [...prevState.todos.filter((data) => data.id !== id)],
            }));
          })
          .catch();
        swal("Poof! Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  render() {
    const { todos, input } = this.state;

    return (
      <>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card shadow">
                <div className="card-body">
                  <h1 className="text-center">TODO-APPS</h1>
                  <hr />
                  <div className="todo_input_area">
                    <form onSubmit={this.handleFormSubmit}>
                      <div className="my-2">
                        <label>Type Your Goal</label>
                        <input
                          name="title"
                          value={input.title}
                          onChange={this.handleInputChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="my-2">
                        <label>Selet your goal status</label>
                        <select
                          name="status"
                          value={input.status}
                          onChange={this.handleInputChange}
                          className="form-control"
                        >
                          <option>-Select-One-</option>
                          <option value="pending">Pending</option>
                          <option value="success">Success</option>
                          <option value="cancel">Cancel</option>
                        </select>
                      </div>
                      <div className="my-2">
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary w-100"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <div className="card shadow">
                <div className="card-body">
                  <div className="todo_result_area">
                    <ul className="list-group ">
                      {todos.map(({ title, status, id }, index) => {
                        let bgColor = "";

                        switch (status) {
                          case "success":
                            bgColor = "green";
                            break;

                          case "pending":
                            bgColor = "yellow";
                            break;

                          case "cancel":
                            bgColor = "red";
                            break;

                          default:
                            bgColor = "";
                        }

                        return (
                          <li
                            style={{ backgroundColor: bgColor }}
                            key={index}
                            className="my-1 list-group-item d-flex justify-content-between"
                          >
                            <div className="todo_info_area d-flex gap-2 align-middle">
                              <p>
                                <i className="bx bxs-pin"></i>
                              </p>
                              <h4>{title}</h4>
                            </div>
                            <button
                              onClick={() => this.handleDeleteTodosList(id)}
                            >
                              <i className="bx bxs-trash"></i>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ToDo;

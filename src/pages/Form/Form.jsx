import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    color: "",
    gender: "",
    education: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // SetCheckBox Here.
  const stack = [
    "Mern Stack",
    "Django",
    "Go",
    "Python",
    "Laravel",
    "Dot net",
    "IOS",
  ];

  // CheckBox management state.
  const [checkValue, setCheckValue] = useState([]);

  // handleCheckBoxValue
  const handleCheckBoxValue = (e) => {
    const value = e.target.value;
    const updatedList = [...checkValue];

    if (checkValue.includes(value)) {
      updatedList.splice(checkValue.indexOf(value), 1);
    } else {
      updatedList.push(value);
    }

    setCheckValue(updatedList);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body">
                <h2>Form handle with all fields</h2>
                <hr />
                <form action="">
                  <div className="my-2">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>

                  <div className="my-2">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={input.email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>

                  <div className="my-2">
                    <label htmlFor="">Age</label>
                    <input
                      type="range"
                      name="age"
                      value={input.age}
                      onChange={handleInputChange}
                      step={1}
                      min={10}
                      max={80}
                    />
                  </div>

                  <div className="my-2">
                    <label htmlFor="">Color</label>
                    <input
                      type="color"
                      name="color"
                      value={input.color}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="my-2">
                    <label htmlFor="">Gender</label>
                    <hr />
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleInputChange}
                      />
                      Male
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleInputChange}
                      />
                      Female
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Others"
                        onChange={handleInputChange}
                      />
                      Others
                    </label>
                  </div>

                  <div className="my-2">
                    <label htmlFor="">Education</label>
                    <select
                      name="education"
                      value={input.education}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option>-select-</option>
                      <option value="PSC">PSC</option>
                      <option value="JSC">JSC</option>
                      <option value="SSC">SSC</option>
                      <option value="HSC">HSC</option>
                      <option value="BSC">BSC</option>
                      <option value="MSC">MSC</option>
                    </select>
                  </div>

                  <div className="my-2">
                    <label htmlFor="">Department</label>
                    <hr />
                    {stack.map((item, index) => {
                      return (
                        <>
                          <label key={index}>
                            <input
                              value={item}
                              checked={checkValue.includes(item)}
                              onChange={handleCheckBoxValue}
                              type="checkbox"
                            />
                            {item}
                          </label>
                          <br />
                        </>
                      );
                    })}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BiHappy } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
const Home = () => {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [actionList, setActionList] = useState([]);
  const InputTask = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    console.log(task);
  };
  const AddTask = (e) => {
    e.preventDefault();
    const inputTasks = document.getElementById("inputTasks");
    inputTasks.value = "";
    alert("task added successfully");
    setTaskList([...taskList, task]);
    localStorage.setItem("tasks", JSON.stringify([...taskList, task]));
    const todoItems = localStorage.getItem("tasks");
    setActionList([...actionList, JSON.parse(todoItems)]);
  };
  const deleteTask = (id) => {
    console.log(taskList);
    // localStorage.removeItem(taskList[id]);  NOT WORKING
    const updatedItems = taskList.filter((items, index) => {
      return index !== id;
    });
    setTaskList(updatedItems);
  };
  return (
    <>
      <div className="container-fluid">
        <Container className="p-3">
          <div className="d-flex flex-column p-3 shadow-lg mt-5">
            <h1 className="mb-5 text-center">Get Set Go...</h1>
            <Form>
              <Col className="d-flex p-2">
                <Form.Control
                  name="Tasks"
                  type="text"
                  id="inputTasks"
                  placeholder="Enter Your Tasks"
                  className="mb-3 shadow-sm me-2 form-control-lg"
                  onChange={InputTask}
                />
                <Button
                  variant="outline-success"
                  type="submit"
                  className="h-50 mt-1"
                  onClick={AddTask}
                >
                  <FaPencilAlt
                    style={{
                      fontSize: "20px",
                      boxSizing: "border-box",
                    }}
                  />
                </Button>
              </Col>
            </Form>
            {actionList.length > 0 ? (
              <>
                <div className="container d-flex gap-2">
                  {taskList.map((items, index) => (
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title className=" d-flex  gap-2">
                          {`Task ${index + 1}`}
                          <Button variant="success" className="h-50">
                            <MdOutlineDone
                              onClick={() => {
                                alert("done");
                                deleteTask(index);
                              }}
                            />
                          </Button>
                        </Card.Title>
                        <Card.Text
                          style={{
                            width: "100%",
                            height: "100px",
                            overflowX: "hidden",
                            overflowY: "scroll",
                          }}
                        >
                          {items.Tasks}
                        </Card.Text>
                        <div className="d-flex gap-1">
                          <Button
                            variant="danger"
                            onClick={() => deleteTask(index)}
                          >
                            Delete
                            <RiDeleteBin6Line />
                          </Button>
                          {/* <Button variant="warning">
                            Update
                            <AiFillFileAdd />
                          </Button>
                          <Button variant="success">
                            View
                            <AiFillEye />
                          </Button> */}
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="d-flex justify-content-center bg-success text-white pt-3">
                  <p style={{ fontSize: "50px" }}>
                    What you need to complete today...
                  </p>
                  <BiHappy style={{ fontSize: "60px" }} />
                </div>
              </>
            )}
            {taskList.length === 0 ? (
              <div className="d-flex justify-content-center bg-success text-white pt-3">
                <p style={{ fontSize: "50px" }}>What next?</p>
                <BiHappy style={{ fontSize: "60px" }} />
              </div>
            ) : (
              " "
            )}
          </div>
        </Container>
      </div>
    </>
  );
};
export default Home;

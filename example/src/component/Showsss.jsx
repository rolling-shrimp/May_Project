import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function displayTime(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(displayTime, 1000);
// setInterval(Showsome, 1000);
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = (
  <div>
    <Welcome name="kobe"></Welcome>
    <Welcome name="gasol"></Welcome>
    <Welcome name="fisher"></Welcome>
  </div>
);
function Showsome() {
  const [count, setcount] = React.useState(0);
  const clickCount = () => {
    setcount(count + 1);
  };
  useEffect(() => {
    document.title = count;
    // alert(` count: ${count}`);
  }, [count]);
  //the first pop up setting
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //the second pop up setting
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const trigering = () => {
    setShow(false);
    if (trigering) {
      setShow1(true);
    }
  };
  //the name input column which can have default value and can be modified
  const [value, setvalue] = useState("kobe bryant");
  const changeInputValue = (e) => {
    setvalue(e.target.value);
  };

  const [numvalue, setnumvalue] = useState("24");
  const changeInputNumValue = (e) => {
    setnumvalue(e.target.value);
  };
  //click count

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={trigering}>
            登入會員
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      <form action="">
        <label htmlFor="">number: </label>
        <input
          type="number"
          name=""
          id=""
          value={numvalue}
          onChange={changeInputNumValue}
        />
        <span> number:{numvalue}</span>
        <br />
        <input
          style={{ marginLeft: "1rem" }}
          type="text"
          value={value}
          onChange={changeInputValue}
        />
        <span> name: {value}</span>
      </form>
      <button onClick={clickCount}>count:{count}</button>
      {element}

      {/* <Clock date={new Date()} />
      <displayTime /> */}

      {/* <iframe
        width="560"
        height="315"
        src="https://spankbang.com/81f5x/embed/"
        frameborder="0"
        // scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/7dewc/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/7sv2h/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/7suuj/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/6m7rn/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/7sust/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/7xu09/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/7hjtj/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/80zi6/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/73fqv/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/6se8z/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/55tr1/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/55tr1/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/40f44/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/41t2c/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://spankbang.com/414fb/embed/"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe> */}
    </>
  );
}
// setInterval(Showsome, 1000);

export default Showsome;

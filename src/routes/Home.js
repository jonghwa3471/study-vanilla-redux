import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  console.log(toDos);
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);

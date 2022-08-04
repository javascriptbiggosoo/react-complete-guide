import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";
import { useRef, useState } from "react";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (ev) => {
    ev.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterdUserAge = ageInputRef.current.value;
    if (enterdName.trim().length === 0 || enterdUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "유효한 이름과 나이를 입력해줘잉",
      });
      return;
    }
    if (+enterdUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "1 이상의 나이를 입력해줘잉",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);

    props.onAddUser(enterdName, enterdUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

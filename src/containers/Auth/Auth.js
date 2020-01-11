import React, { Component } from "react";
import classes from "../Auth/Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input.js";
export default class Auth extends Component {
  registerHandler = () => {};
  loginHandler = () => {};
  SubmitHandler = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.SubmitHandler} className={classes.AuthForm}>
            <Input label="Email" />
            <Input label="Password" />

            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

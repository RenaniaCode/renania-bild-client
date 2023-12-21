import React, { useState } from "react";
import Modal from "./Modal";
import { Form, FormGroup, Label, Input} from "reactstrap";
import { LoginForm } from "./Admin/Auth"
import { Button } from "semantic-ui-react";
import "../App.scss";
import "../scss/colors.scss";

const LoginButton = (props) => {
  const { option } = props;
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <Button positive id="pinkButton" href="/admin/register">
        {option}
      </Button>
      <Modal active={active} toggle={toggle}>
      <div className="modalLogIn">
            <div id="logInFields">
            <Form>
                <FormGroup>
                    <Input
                    className="fieldLogIn"
                    name="email"
                    placeholder="   e-mail"
                    type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    className="fieldLogIn"
                    name="password"
                    placeholder="   contraseña"
                    type="password"
                    />
                </FormGroup>
            </Form>
            </div>
            <Button id="logInButtonForm" color='pink' content='Pink'>
                Iniciar sesión
            </Button>
            <Button id="logInButtonForm" onClick={toggle}>
                Cancelar
            </Button>
            </div>
      </Modal>
    </>
  );
};

export default LoginButton;

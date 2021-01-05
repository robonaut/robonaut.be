import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { actionCreators } from "../../redux/actions";
import { StyledForm, StyledInput, StyledTextArea } from "../../style/form";
import { CONTACT_FORM_WIDTH } from "../../style/sizes";

const mapDispatch = {
  contactSubmit: actionCreators.contactSubmit,
};

const connector = connect(null, mapDispatch);

const ContactForm = ({
  contactSubmit,
}: ConnectedProps<typeof connector>): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.MouseEvent): void => {
    e.preventDefault();
    contactSubmit({
      name,
      email,
      message,
    });
  };

  return (
    <StyledForm style={{ maxWidth: CONTACT_FORM_WIDTH }}>
      <StyledInput
        type="name"
        placeholder="Name"
        onChange={(e): void => setName(e.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="Email"
        onChange={(e): void => setEmail(e.target.value)}
      />
      <StyledTextArea
        placeholder="Message"
        onChange={(e): void => setMessage(e.target.value)}
      />
      <StyledInput type="submit" value="Submit!" onClick={submit} />
    </StyledForm>
  );
};

export default connector(ContactForm);

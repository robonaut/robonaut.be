import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, ConnectedProps } from "react-redux";

import { actionCreators } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import { formStateSelector } from "../../redux/selectors/contact";
import { StyledSuccessMessage } from "../../style/contact";
import { StyledForm, StyledInput, StyledTextArea } from "../../style/form";
import { CONTACT_FORM_WIDTH } from "../../style/sizes";

const mapState = (
  state: RootState
): {
  formState: ReturnType<typeof formStateSelector>;
} => ({
  formState: formStateSelector(state),
});

const mapDispatch = {
  contactSubmit: actionCreators.contactSubmit,
};

const connector = connect(mapState, mapDispatch);

const ContactForm = ({
  contactSubmit,
  formState,
}: ConnectedProps<typeof connector>): JSX.Element => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(
    t("pages.contact.emptyMessage")
  );

  useEffect(() => {
    if (formState.response) {
      setSuccessMessage(t("pages.contact.successMessage"));
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [formState]);

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
      <StyledSuccessMessage>{successMessage}</StyledSuccessMessage>
      <StyledInput
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e): void => setName(e.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e): void => setEmail(e.target.value)}
      />
      <StyledTextArea
        placeholder="Message"
        value={message}
        onChange={(e): void => setMessage(e.target.value)}
      />
      <StyledInput type="submit" value="Submit!" onClick={submit} />
    </StyledForm>
  );
};

export default connector(ContactForm);

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/actions';
import type { RootState } from '../../redux/reducers';
import { formStateSelector } from '../../redux/selectors/contact';
import { StyledSuccessMessage } from '../../style/contact';
import { StyledForm, StyledInput, StyledTextArea } from '../../style/form';
import { CONTACT_FORM_WIDTH } from '../../style/sizes';

const mapState = (
  state: RootState,
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(
    // t("pages", { keyPrefix: "pages.contact.errorMessage" })
    '',
  );

  useEffect(() => {
    if (formState.response) {
      setSuccessMessage(t('pages', { keyPrefix: 'pages.contact.successMessage' }));
      setName('');
      setEmail('');
      setMessage('');
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

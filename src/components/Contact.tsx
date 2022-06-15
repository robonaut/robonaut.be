import React from 'react';

import { getContent } from '../content';
import ContactForm from '../elements/contact/form';
import { StyledContactPage } from '../style/contact';

const Contact: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledContactPage>
      {getContent('contact')}
      <ContactForm />
    </StyledContactPage>
  );
};

export default Contact;

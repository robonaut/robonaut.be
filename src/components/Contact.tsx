import React from "react";

import { getContent } from "../content";
import ContactForm from "../elements/contact/form";

const Contact: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      {getContent("contact")}
      <ContactForm />
    </>
  );
};

export default Contact;

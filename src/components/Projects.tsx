import React from "react";
import { useTranslation } from "react-i18next";

import Table from "../elements/table";
import { StyledTableContainer, StyledTableTitle } from "../style/table";

const Processors = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <StyledTableTitle>{t("pages.projects.title")}</StyledTableTitle>
      <StyledTableContainer>
        <Table columns={[]} data={[]} />
      </StyledTableContainer>
    </>
  );
};

export default Processors;

import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("pages.home.intro")}</p>
    </>
  );
};

export default Home;

import React from "react";
import ApplicationPage from "../pages/ApplicationPage";
import IndexService from "../services/IndexService";

export default function ApplicationContainer({ history }) {
  const handleSaveCvApplication = async (cvApplication) => {
    IndexService.index(cvApplication)
      .then((response) => {
        history.push("search");
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return <ApplicationPage saveCvApplication={handleSaveCvApplication} />;
}

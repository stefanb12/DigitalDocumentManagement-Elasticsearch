export function setSingleOption(value) {
  let options = [];
  switch (value) {
    case "name":
      options.push({
        label: "Name",
        value: "name",
      });
      break;
    case "surname":
      options.push({
        label: "Surname",
        value: "surname",
      });
      break;
    case "degreeOfEducation":
      options.push({
        label: "Degree of education",
        value: "degreeOfEducation",
      });
      break;
    case "fileContent":
      options.push({
        label: "CV Document (PDF)",
        value: "fileContent",
      });
      break;
    default:
      break;
  }
  return options;
}

export function addOption(options, value) {
  let newOptions = options;
  switch (value) {
    case "name":
      newOptions.push({
        label: "Name",
        value: "name",
      });
      break;
    case "surname":
      newOptions.push({
        label: "Surname",
        value: "surname",
      });
      break;
    case "degreeOfEducation":
      newOptions.push({
        label: "Degree of education",
        value: "degreeOfEducation",
      });
      break;
    case "fileContent":
      newOptions.push({
        label: "CV Document (PDF)",
        value: "fileContent",
      });
      break;
    default:
      break;
  }
  return newOptions;
}

export function subOption(options, value) {
  return options.filter(function (option) {
    return option.value !== value;
  });
}

export function convertDegreeOfEducation(value) {
  let convertedValue = "I";
  switch (value) {
    case "1":
      convertedValue = "I";
      break;
    case "2":
      convertedValue = "II";
      break;
    case "3":
      convertedValue = "III";
      break;
    case "4":
      convertedValue = "IV";
      break;
    case "5":
      convertedValue = "V";
      break;
    case "6":
      convertedValue = "VI";
      break;
    case "7":
      convertedValue = "VII";
      break;
    case "8":
      convertedValue = "VII";
      break;
    default:
      convertedValue = "invalid";
      break;
  }
  return convertedValue;
}

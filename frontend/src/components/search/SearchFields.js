import React, { useState } from "react";
import "../../assets/css/searchStyle.css";
import SearchInputField from "./SearchInputField";
import { setSingleOption, subOption } from "../../util/Options";

const fieldNameOptions = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Surname",
    value: "surname",
  },
  {
    label: "Degree of education",
    value: "degreeOfEducation",
  },
  {
    label: "CV Document (PDF)",
    value: "fileContent",
  },
];

const initialSearchValues = {
  fieldName: "",
  value: "",
  operator: "",
};

export default function SearchFields(props) {
  const [numberOfSearchFields, setNumberOfSearchFields] = useState(1);
  const [firstFieldNameOptions, setFirstFieldNameOptions] =
    useState(fieldNameOptions);
  const [secondFieldNameOptions, setSecondFieldNameOptions] =
    useState(fieldNameOptions);
  const [thirdFieldNameOptions, setThirdFieldNameOptions] =
    useState(fieldNameOptions);
  const [fourthFieldNameOptions, setFourthFieldNameOptions] =
    useState(fieldNameOptions);
  const [firstSearchValues, setFirstSearchValues] = useState({
    fieldName: "name",
    value: "",
    operator: "AND",
  });
  const [secondSearchValues, setSecondSearchValues] =
    useState(initialSearchValues);
  const [thirdSearchValues, setThirdSearchValues] =
    useState(initialSearchValues);
  const [fourthSearchValues, setFourthSearchValues] =
    useState(initialSearchValues);

  const handleAddSearchInputField = (
    selectedFieldName,
    searchValue,
    selectedBoolOperator
  ) => {
    let currentNumber = numberOfSearchFields;
    if (currentNumber === 1) {
      setFirstSearchValues({
        fieldName: selectedFieldName,
        value: searchValue,
        operator: selectedBoolOperator,
      });
      if (firstFieldNameOptions.length > 1) {
        let newOptions = subOption(firstFieldNameOptions, selectedFieldName);
        setSecondFieldNameOptions(newOptions);
        setThirdFieldNameOptions(newOptions);
        setFourthFieldNameOptions(newOptions);
        setFirstFieldNameOptions(setSingleOption(selectedFieldName));
      }
      setNumberOfSearchFields((currentNumber += Number(1)));
    } else if (currentNumber === 2) {
      setSecondSearchValues({
        fieldName: selectedFieldName,
        value: searchValue,
        operator: selectedBoolOperator,
      });
      if (secondFieldNameOptions.length > 1) {
        let newOptions = subOption(secondFieldNameOptions, selectedFieldName);
        setThirdFieldNameOptions(newOptions);
        setFourthFieldNameOptions(newOptions);
        setSecondFieldNameOptions(setSingleOption(selectedFieldName));
      }
      setNumberOfSearchFields((currentNumber += Number(1)));
    } else if (currentNumber === 3) {
      setThirdSearchValues({
        fieldName: selectedFieldName,
        value: searchValue,
        operator: selectedBoolOperator,
      });
      if (thirdFieldNameOptions.length > 1) {
        let newOptions = subOption(thirdFieldNameOptions, selectedFieldName);
        setFourthFieldNameOptions(newOptions);
        setThirdFieldNameOptions(setSingleOption(selectedFieldName));
      }
      setNumberOfSearchFields((currentNumber += Number(1)));
    }
  };

  const handleSubSearchInputField = () => {
    let currentNumber = numberOfSearchFields;
    if (currentNumber === 2) {
      setSecondSearchValues(initialSearchValues);
      setThirdSearchValues(initialSearchValues);
      setFourthSearchValues(initialSearchValues);
    } else if (currentNumber === 3) {
      setThirdSearchValues(initialSearchValues);
      setFourthSearchValues(initialSearchValues);
    } else if (currentNumber === 4) {
      setFourthSearchValues(initialSearchValues);
    }
    setNumberOfSearchFields((currentNumber -= Number(1)));
  };

  // Field name
  const handleChangeFieldNameFirstSearchInput = (value) => {
    let changedFirstSearchValues = firstSearchValues;
    changedFirstSearchValues.fieldName = value;
    setFirstSearchValues(changedFirstSearchValues);
  };

  const handleChangeFieldNameSecondSearchInput = (value) => {
    let changedSecondSearchValues = secondSearchValues;
    changedSecondSearchValues.fieldName = value;
    setSecondSearchValues(changedSecondSearchValues);
  };

  const handleChangeFieldNameThirdSearchInput = (value) => {
    let changedThirdSearchValues = thirdSearchValues;
    changedThirdSearchValues.fieldName = value;
    setThirdSearchValues(changedThirdSearchValues);
  };

  const handleChangeFieldNameFourthSearchInput = (value) => {
    let changedFourthSearchValues = fourthSearchValues;
    changedFourthSearchValues.fieldName = value;
    setFourthSearchValues(changedFourthSearchValues);
  };

  // Search value
  const handleChangeSearchValueFirstSearchInput = (value) => {
    let changedFirstSearchValues = firstSearchValues;
    changedFirstSearchValues.value = value;
    setFirstSearchValues(changedFirstSearchValues);
  };

  const handleChangeSearchValueSecondSearchInput = (value) => {
    let changedSecondSearchValues = secondSearchValues;
    changedSecondSearchValues.value = value;
    setSecondSearchValues(changedSecondSearchValues);
  };

  const handleChangeSearchValueThirdSearchInput = (value) => {
    let changedThirdSearchValues = thirdSearchValues;
    changedThirdSearchValues.value = value;
    setThirdSearchValues(changedThirdSearchValues);
  };

  const handleChangeSearchValueFourthSearchInput = (value) => {
    let changedFourthSearchValues = fourthSearchValues;
    changedFourthSearchValues.value = value;
    setFourthSearchValues(changedFourthSearchValues);
  };

  // Operator
  const handleChangeBoolOperatorFirstSearchInput = (value) => {
    let changedFirstSearchValues = firstSearchValues;
    changedFirstSearchValues.operator = value;
    setFirstSearchValues(changedFirstSearchValues);
  };

  const handleChangeBoolOperatorSecondSearchInput = (value) => {
    let changedSecondSearchValues = secondSearchValues;
    changedSecondSearchValues.operator = value;
    setSecondSearchValues(changedSecondSearchValues);
  };

  const handleChangeBoolOperatorThirdSearchInput = (value) => {
    let changedThirdSearchValues = thirdSearchValues;
    changedThirdSearchValues.operator = value;
    setThirdSearchValues(changedThirdSearchValues);
  };

  const handleChangeBoolOperatorFourthSearchInput = (value) => {
    let changedFourthSearchValues = fourthSearchValues;
    changedFourthSearchValues.operator = value;
    setFourthSearchValues(changedFourthSearchValues);
  };

  const handleSearch = (
    selectedFieldName,
    searchValue,
    selectedBoolOperator
  ) => {
    let currentNumber = numberOfSearchFields;
    const queryData = [];
    let searchData = {
      fieldName: selectedFieldName,
      value: searchValue,
      operator: selectedBoolOperator,
    };
    if (currentNumber === 1) {
      setFirstSearchValues(searchData);
      if (
        secondSearchValues.fieldName !== "" &&
        secondSearchValues.value !== "" &&
        secondSearchValues.operator !== ""
      ) {
        queryData.push(secondSearchValues);
      }
      if (
        thirdSearchValues.fieldName !== "" &&
        thirdSearchValues.value !== "" &&
        thirdSearchValues.operator !== ""
      ) {
        queryData.push(thirdSearchValues);
      }
      if (
        fourthSearchValues.fieldName !== "" &&
        fourthSearchValues.value !== "" &&
        fourthSearchValues.operator !== ""
      ) {
        queryData.push(fourthSearchValues);
      }
    } else if (currentNumber === 2) {
      setSecondSearchValues(searchData);
      if (
        firstSearchValues.fieldName !== "" &&
        firstSearchValues.value !== "" &&
        firstSearchValues.operator !== ""
      ) {
        queryData.push(firstSearchValues);
      }
      if (
        thirdSearchValues.fieldName !== "" &&
        thirdSearchValues.value !== "" &&
        thirdSearchValues.operator !== ""
      ) {
        queryData.push(thirdSearchValues);
      }
      if (
        fourthSearchValues.fieldName !== "" &&
        fourthSearchValues.value !== "" &&
        fourthSearchValues.operator !== ""
      ) {
        queryData.push(fourthSearchValues);
      }
    } else if (currentNumber === 3) {
      setThirdSearchValues(searchData);
      if (
        firstSearchValues.fieldName !== "" &&
        firstSearchValues.value !== "" &&
        firstSearchValues.operator !== ""
      ) {
        queryData.push(firstSearchValues);
      }
      if (
        secondSearchValues.fieldName !== "" &&
        secondSearchValues.value !== "" &&
        secondSearchValues.operator !== ""
      ) {
        queryData.push(secondSearchValues);
      }
      if (
        fourthSearchValues.fieldName !== "" &&
        fourthSearchValues.value !== "" &&
        fourthSearchValues.operator !== ""
      ) {
        queryData.push(fourthSearchValues);
      }
    } else if (currentNumber === 4) {
      setFourthSearchValues(searchData);
      if (
        firstSearchValues.fieldName !== "" &&
        firstSearchValues.value !== "" &&
        firstSearchValues.operator !== ""
      ) {
        queryData.push(firstSearchValues);
      }
      if (
        secondSearchValues.fieldName !== "" &&
        secondSearchValues.value !== "" &&
        secondSearchValues.operator !== ""
      ) {
        queryData.push(secondSearchValues);
      }
      if (
        thirdSearchValues.fieldName !== "" &&
        thirdSearchValues.value !== "" &&
        thirdSearchValues.operator !== ""
      ) {
        queryData.push(thirdSearchValues);
      }
    }
    queryData.push(searchData);
    props.search(queryData);
  };

  return [...Array(numberOfSearchFields)].map((number, index) => {
    if (index === 0) {
      return (
        <SearchInputField
          key={index}
          search={handleSearch}
          addSearchInputField={handleAddSearchInputField}
          subSearchInputField={handleSubSearchInputField}
          changeFieldName={handleChangeFieldNameFirstSearchInput}
          changeSearchValue={handleChangeSearchValueFirstSearchInput}
          changeBoolOperator={handleChangeBoolOperatorFirstSearchInput}
          fieldNameOptions={firstFieldNameOptions}
          isSearchButtonVisible={index === numberOfSearchFields - 1}
        />
      );
    } else if (index === 1) {
      return (
        <SearchInputField
          key={index}
          search={handleSearch}
          addSearchInputField={handleAddSearchInputField}
          subSearchInputField={handleSubSearchInputField}
          changeFieldName={handleChangeFieldNameSecondSearchInput}
          changeSearchValue={handleChangeSearchValueSecondSearchInput}
          changeBoolOperator={handleChangeBoolOperatorSecondSearchInput}
          fieldNameOptions={secondFieldNameOptions}
          isSearchButtonVisible={index === numberOfSearchFields - 1}
        />
      );
    } else if (index === 2) {
      return (
        <SearchInputField
          key={index}
          search={handleSearch}
          addSearchInputField={handleAddSearchInputField}
          subSearchInputField={handleSubSearchInputField}
          changeFieldName={handleChangeFieldNameThirdSearchInput}
          changeSearchValue={handleChangeSearchValueThirdSearchInput}
          changeBoolOperator={handleChangeBoolOperatorThirdSearchInput}
          fieldNameOptions={thirdFieldNameOptions}
          isSearchButtonVisible={index === numberOfSearchFields - 1}
        />
      );
    } else {
      return (
        <SearchInputField
          key={index}
          search={handleSearch}
          addSearchInputField={handleAddSearchInputField}
          subSearchInputField={handleSubSearchInputField}
          changeFieldName={handleChangeFieldNameFourthSearchInput}
          changeSearchValue={handleChangeSearchValueFourthSearchInput}
          changeBoolOperator={handleChangeBoolOperatorFourthSearchInput}
          fieldNameOptions={fourthFieldNameOptions}
          isSearchButtonVisible={index === numberOfSearchFields - 1}
          isLastSearchInputField={true}
        />
      );
    }
  });
}

const isCharacterALetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

const isCharacterANumber = (number) => {
  return /[0-9]/.test(number);
};

const isCharacterASpecial = (special) => {
  return /["*,#;.!áéíóúÁÉÍÓÚ& "]/.test(special);
};

const identifyData = (information) => {
  const arrayData = Array.from(information);
  let isANumber = 0;
  let isALetter = 0;
  let isACharacter = 0;
  let characterIndex = null;

  arrayData.forEach((element) => {
    if (isCharacterALetter(element)) {
      isALetter = isALetter + 1;
    }
    if (isCharacterANumber(element)) {
      isANumber = isANumber + 1;
    }
    if (isCharacterASpecial(element)) {
      if (!characterIndex) {
        characterIndex = element;
      }
      isACharacter = isACharacter + 1;
    }
  });

  if (isACharacter) {
    return { name: "character", value: characterIndex };
  } else if (isANumber === arrayData.length) {
    return { name: "number" };
  } else if (isALetter === arrayData.length) {
    return { name: "text" };
  } else {
    return "notData";
  }
};

const byDataType = (dataObject, data) => {
  if (dataObject.name == "text") {
    const dataText = {
      type: dataObject.name,
      text: data.toString(),
      start: data[0],
      end: data[data.length - 1],
    };
    return dataText;
  }
  if (dataObject.name == "number") {
    const dataNumber = {
      type: dataObject.name,
      number: parseInt(data.toString()),
      accumulated: parseInt(data.toString()),
    };
    return dataNumber;
  }
  if (dataObject.name == "character") {
    const dataCharacter = {
      type: dataObject.name,
      character: dataObject.value,
    };
    return dataCharacter;
  }
  return { type: 0 };
};

const validatorHandle = (req, res, next) => {
  const newData = req.body.data;
  const dataType = identifyData(newData);
  const dataBody = byDataType(dataType, newData);

  if (!dataBody.type) {
    res.status(400).json({ Message: "Información no válida." });
  }
  req.body = dataBody;
  next();
};

module.exports = validatorHandle;

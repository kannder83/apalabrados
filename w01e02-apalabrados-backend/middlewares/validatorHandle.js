const isCharacterALetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

const isCharacterANumber = (number) => {
  return /[0-9]/.test(number);
};

const isCharacterASpecial = (special) => {
  return /["*,#;.!?"]/.test(special);
};

const validatorHandle = (req, res, next) => {
  const newData = req.body.data;
  const arrayData = Array.from(newData);
  let isANumber = 0;
  let isALetter = 0;
  let isACharacter = 0;

  arrayData.forEach((element) => {
    if (isCharacterALetter(element)) {
      console.log("Es una letra: ", element);
      isALetter = isALetter + 1;
    }

    if (isCharacterANumber(element)) {
      console.log("Es es un numero: ", element);
      isANumber = isANumber + 1;
    }
    if (isCharacterASpecial(element)) {
      console.log("Es especial: ", element);
      isACharacter = isACharacter + 1;
    }
  });

  if (isANumber === arrayData.length) {
    console.log("Todos son números.");
  }
  if (isALetter === arrayData.length) {
    console.log("Todas son letras.");
  }

  if (newData === 1) {
    const validateNumber = {
      type: 1,
      number: 23,
      accumulated: 455,
    };
    req.body = validateNumber;
    next();
  } else if (newData === 2) {
    const validateText = {
      type: 2,
      text: "Prueba",
      start: "P",
      end: "a",
    };
    req.body = validateText;
    next();
  } else if (newData === 3) {
    const validateCharacter = { type: 3, character: "#" };
    req.body = validateCharacter;
    next();
  } else {
    res.status(400).json({ Message: "Información no válida." });
  }
};

module.exports = validatorHandle;

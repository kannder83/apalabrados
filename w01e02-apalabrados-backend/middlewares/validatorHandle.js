const validatorHandle = (req, res, next) => {
  const newData = req.body.data;

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
    res.status(400).json({ Message: "No autorizado." });
  }
};

module.exports = validatorHandle;

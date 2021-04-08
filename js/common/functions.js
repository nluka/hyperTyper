const parseBool = (bool_str) => {
  const lowerCaseBool_str = bool_str.toLowerCase();
  switch (lowerCaseBool_str) {
    case "true":
      return true;
    case "false":
      return false;
  }
  return null;
};

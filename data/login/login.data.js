const validCredentials = {
  username: "Admin",
  password: "admin123",
};

const invalid_Username_And_Password = {
  username: "uioajdasdln",
  password: ";sdkfpos9alknsdfn",
};

const all_empty = {
  username: "",
  password: "",
};

const all_Blank = {
  username: "      ",
  password: "     ",
};

module.exports = {
  validCredentials,
  invalid_Username_And_Password,
  all_empty,
  all_Blank,
};

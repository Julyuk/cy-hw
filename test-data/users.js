export const users = [
  {
    testName: "all valid fields",
    first_name: "First name",
    last_name: "Last name",
    email: "email@test.com",
    comment: "comment",
  },

  {
    testName: "empty first name",

    last_name: "Last name",
    email: "email@test.com",
    comment: "comment",
  },
  {
    testName: "empty last name",

    first_name: "First name",
    email: "email@test.com",
    comment: "comment",
  },
  {
    testName: "empty email",
    first_name: "First name",
    last_name: "Last name",
    comment: "comment",
  },
  {
    testName: "empty comment",
    first_name: "First name",
    last_name: "Last name",
    email: "email@test.com",
  },
  {
    testName: "all invalid fields",
    first_name: "",
    last_name: "",
    email: "",
    comment: "",
  },
];

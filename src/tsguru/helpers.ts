type Maybe<T> = T | undefined;

type User = {
  id: string;
  name: string;
  phoneNumber: Maybe<string>;
};

// all ?
type OptionalUser = Partial<User>;

// type UserId = Pick<User, T>;
// Required<T>
// Readonly<T>

// config
// 'verbatimModuleSyntax': true
// import { foo } = require("./foo.cjs")

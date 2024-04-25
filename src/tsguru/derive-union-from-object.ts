const fruitCount = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type FruitCounts = typeof fruitCount;

// Take each key and set its T to empty object.
type NewSingleFruitCount = {
  [K in keyof FruitCounts]: unknown;
};

const singleFruitCount: NewSingleFruitCount = {
  apple: {},
  pear: {},
  banana: {},
};

// This has unwanted parent key.
type NewSingleFruitCountBad = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
};

// Rid of parent key by mapping over T.
// aka indexing of the the type to get its values as type.
type NewSingleFruitCountFinal = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

// Union T from Object.
const singleFruitCountFinal: NewSingleFruitCountFinal = {
  apple: 2,
};

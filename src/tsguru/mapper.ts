type Fruit = "apple" | "banana" | "orange";

type NewType = {
  [F in Fruit]: {
    name: F;
  };
};

type Person = {
  name: string;
  age: number;
};

// Powerful
type NullablePerson = {
  [P in keyof Person]: Person[P] | undefined;
};

// Mapping non-string unions with `as`
type EventTypes =
  | {
      type: "click";
      x: number;
      y: number;
    }
  | {
      type: "hover";
      element: HTMLElement;
    };

// Error if `[E in TEvent]` because TEvent is not assignable
// to types of keys i.e. `string | number | symbol`
// Fix: `as` to use `type` prop as each `E`
// WOW
type EventTypesMap = {
  [E in EventTypes as E["type"]]: (event: E) => void;
};

type KeysOfValue<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];

type User = {
  name: string;
  age: number;
};

type StringKeysOfObj = KeysOfValue<User, string>;
type NumericKeysOfOb = KeysOfValue<User, number>;

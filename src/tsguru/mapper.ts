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

// Examples
type CSSUnits = "px" | "em" | "rem" | "vw" | "vh";

/**
 * | {
 *   length: number;
 *   unit: 'px';
 * }
 * | {
 *   length: number;
 *   unit: 'em';
 * }
 * | {
 *   length: number;
 *   unit: 'rem';
 * }
 * | {
 *   length: number;
 *   unit: 'vw';
 * }
 * | {
 *   length: number;
 *   unit: 'vh';
 * }
 */
export type CSSLength = {
  [U in CSSUnits]: {
    length: number;
    unit: U;
  };
}[CSSUnits];

type SuccessResponseCode = 200;

type ErrorResponseCode = 400 | 500;

type ResponseCode = SuccessResponseCode | ErrorResponseCode;

/**
 * | {
 *   code: 200;
 *   body: {
 *     success: true;
 *   };
 * }
 * | {
 *   code: 400;
 *   body: {
 *     success: false;
 *     error: string;
 *   };
 * }
 * | {
 *   code: 500;
 *   body: {
 *     success: false;
 *     error: string;
 *   };
 * }
 */
type ResponseShape = {
  [C in ResponseCode]: {
    code: C;
    body: C extends SuccessResponseCode
      ? { sucess: true }
      : { sucess: false; error: string };
  };
}[ResponseCode];

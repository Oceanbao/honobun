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

function getKeys<T extends Record<string, unknown>>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

function removeKeys<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keysToRemove: K[],
): Omit<T, K> {
  const newObj = { ...obj };
  for (const key of keysToRemove) {
    delete newObj[key];
  }

  return newObj;
}

// compare arrays on type level
type CheckForBadArgs<Arg> = Arg extends any[]
  ? "You cannot compare two arrays using deepEqualCompare"
  : Arg;

const deepEqualCompare = <Arg>(
  a: CheckForBadArgs<Arg>,
  b: CheckForBadArgs<Arg>,
): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    throw new Error("You cannot compare two arrays using deepEqualCompare");
  }

  return true;
};

// -----------------------------------
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type IconSize = LooseAutocomplete<"sm" | "xs" | "sm">;

// -----------------------------------
export type ActionModule = typeof import("./constants");
export type Action = ActionModule[keyof ActionModule];

// -----------------------------------
type ObjWithAandB = {
  a: "a";
  a2: "a2";
  a3: "a3";
  b: "b";
  b1: "b1";
  b2: "b2";
};

type ValuesOfKeysStartingWithA<
  Obj,
  ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>,
> = {
  [K in ExtractedKeys]: Obj[K];
}[ExtractedKeys];

type ObjWithOnlyA = ValuesOfKeysStartingWithA<ObjWithAandB>;

// -----------------------------------
declare global {
  type GlobalReducerEvent = {
    LOG_IN: {};
  };
}

export type GlobalReducer<TState> = (
  state: TState,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
      type: EventType;
    } & GlobalReducerEvent[EventType];
  }[keyof GlobalReducerEvent],
) => TState;

// -----------------------------------
type Name1 = string;
type GoodName1 = VeryGoodName1 | "fred";
type VeryGoodName1 = "matt";

const isGoodName = (name: GoodName1) => {};

isGoodName("matt");

type Result1 = Name1 extends GoodName1 ? true : false;

// Predicates
function isKey<T extends Record<string, unknown>>(
  x: T,
  k: PropertyKey,
): k is keyof T {
  return k in x;
}
// if (isKey(user, key)) user[key]

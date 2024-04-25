function hasMessage(x: unknown): x is { message: string } {
  return Boolean(
    typeof x === "object" &&
      x &&
      "message" in x &&
      typeof x.message === "string",
  );
}

try {
  // some code
} catch (e) {
  // instanceof
  if (e instanceof Error) {
    console.log(e.message);
  }

  // type guard
  if (hasMessage(e)) {
    console.log(e.message);
  }
}

// Boolean literals
type SuccessState = {
  success: true;
  data: string;
};

type FailureState = {
  success: false;
  error: string;
};

// PropertyKey is global T repr string | number | symbol
// record with all possible types.
type RecordWithAllKeys = Record<PropertyKey, unknown>;

// interface cannot extend union types
// x | x -> interface Foo extends Union
// use intersection instead of `extends`
type ExampleUnion = { a: string } | { b: string };

// BUT this is AND
type IntersectTypes = ExampleUnion & {
  c: string;
};

// String as Key to Index
const myExampleUnion = {
  a: 1,
  b: 2,
};
const access = (str: keyof typeof myExampleUnion) => {
  return myExampleUnion[str];
};

// as const
// enforce return [] as () tuple
function returnTuple() {
  return [1, 2] as const;
}

// enforce literal as type
const buttonProps = {
  type: "button" as const,
};
console.log(buttonProps.type);

// 3 ways to define object type
// interface
// literal anonymous object
// type

// '@ts-ignore' is bad, prefer below
// const aa: number = "oooops";

// @ts-expect-error
const aaa: string = 1;

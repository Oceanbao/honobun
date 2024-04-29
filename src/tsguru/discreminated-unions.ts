type State =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: {
        id: string;
      };
    }
  | {
      status: "error";
      error: Error;
    };

// Error: Property 'data' is missing
const example3: State = {
  status: "success",
};

const example4: State = {
  status: "loading",
  // Error: Object literal may only specify known
  // properties, and 'error' does not exist
  error: new Error("Eek!"),
};

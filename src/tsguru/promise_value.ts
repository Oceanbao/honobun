type PromiseError = {
  type: "_network" | "_runtime";
  error: Error;
  message: string;
};

type PromiseReturn = {
  data: Record<string, unknown> | undefined;
  error: PromiseError | undefined;
};

async function getData(): Promise<PromiseReturn> {
  try {
    const res = await fetch("https://api.example.com");
    const data = (await res.json()) as Record<string, unknown>;
    return { data, error: undefined };
  } catch (error) {
    return {
      data: undefined,
      error: {
        type: "_network",
        error: error as Error,
        message: "Network Error from getData",
      },
    };
  }
}

const { data, error } = await getData();
if (error) throw new Error(error.message);

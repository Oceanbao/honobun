async function retry<T>(fn: () => Promise<T>, retries = 5): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries > 0) {
      console.log("Retrying...");
      return await retry(fn, retries - 1);
    }

    throw err;
  }
}

const getStringLater = async () => Promise.resolve("hello");

retry(getStringLater)
  .then((str) => {
    console.log(str);
  })
  .catch((err) => {
    console.log(err);
  });

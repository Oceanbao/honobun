const array = [
  { key: "name", value: "Daniel" },
  { key: "age", value: "26" },
  { key: "location", value: "UK" },
];

const grouped1 = array.reduce((obj: Record<string, string>, item) => {
  obj[item.key] = item.value;
  return obj;
}, {});

const grouped2 = array.reduce<Record<string, string>>((obj, item) => {
  obj[item.key] = item.value;
  return obj;
}, {});

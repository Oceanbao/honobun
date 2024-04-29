// https://www.totaltypescript.com/how-to-use-satisfies-operator
//
// Strongly typed URL Search Params
type GhIssueUrlParams = {
  title: string;
  body: string;
};

// Checking at work
const params = new URLSearchParams({
  title: "New Issue",
} satisfies GhIssueUrlParams);

// Strongly typed  POST request
type Post = {
  title: string;
  content: string;
};

fetch("/api/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "New Post",
    content: "Lorem ipsum.",
  } satisfies Post),
})
  .then((r) => r)
  .catch((err) => err);

// tuple better than as const
type MoreThanOneMember = [any, ...any[]];

const array = [1, 2, 3];

const maybeExists = array[3];

const maybeExists: number | undefined;

const tuple = [1, 2, 3] satisfies MoreThanOneMember;

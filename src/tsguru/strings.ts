type ObjectKey = "userId" | "postId" | "userName" | "postName";

type PostKey = Exclude<ObjectKey, `${string}${"user"}${string}`>;

type NonIdKey = Exclude<ObjectKey, `${string}${"id" | "Id"}${string}`>;

type NonNameKey = Exclude<ObjectKey, `${string}Name`>;

// Replace strings in type
type StringReplace<
  TString extends string,
  TToReplace extends string,
  TReplacement extends string,
> = TString extends `${infer TPrefix}${TToReplace}${infer TSuffix}`
  ? `${TPrefix}${TReplacement}${StringReplace<
      TSuffix,
      TToReplace,
      TReplacement
    >}`
  : TString;

type Result = StringReplace<"Matt Pocock III", " ", "-">;
//   ^? "Matt-Pocock-III"

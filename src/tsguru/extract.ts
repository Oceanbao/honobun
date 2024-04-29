type Event =
  | {
      type: "click";
      x: number;
      y: number;
    }
  | {
      type: "focus";
    }
  | {
      type: "blur";
    };

type ClickEvent = Extract<Event, { type: "click" }>;

// ---
type PossibleValues =
  | "admin"
  | "user"
  | "guest"
  | true
  | false
  | 1
  | 2
  | 3
  | number
  | boolean
  | undefined;

type StringOnly = Extract<PossibleValues, string>;
type NotNull = Extract<PossibleValues, {}>;

// Common members of unions
type EnglishSpeakingCountries = "UK" | "USA" | "Canada";
type CountriesInWesternHemisphere = "USA" | "Canada" | "Mexico";

type CommonCountries = Extract<
  EnglishSpeakingCountries,
  CountriesInWesternHemisphere
>;

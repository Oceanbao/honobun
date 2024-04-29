// When types are related
// Omit
// Pick

const albumTypes = {
  cd: "cd",
  vinyl: "vinyl",
  digital: "digital",
} as const;

type AlbumType = (typeof albumTypes)[keyof typeof albumTypes];

type User = {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
};

type UserWithoutId = Omit<User, "id">;

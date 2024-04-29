type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

// Goal: EntityWithId = | { type: "user" userId: string } | ...
type EntityWithIdA = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  };
};

type EntityWithIdB = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  };
}[Entity["type"]];

// WOW
// dynamic id prop using Record
type EntityWithIdC = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

const result: EntityWithIdC = {
  type: "user",
  // someCustomId: "123", error for bad Id key
  userId: "123",
};

import { faker } from "@faker-js/faker";

interface IUser {
  id: string;
  name: string;
  src: string;
}

export function createRandomUser(): IUser {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    src: faker.image.avatar(),
  };
}

export const userMap: IUser[] = faker.helpers.multiple(createRandomUser, {
  count: 7,
});

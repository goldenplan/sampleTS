import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };

  set(update: T): void {
    (<any>Object).assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

const attr = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: "fff",
});

const name = attr.get("name");
const age = attr.get("age");
const id = attr.get("id");

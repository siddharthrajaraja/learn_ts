import faker, { fake } from 'faker';
import { Mappable } from './CustomMap';
export const red = 'red';
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  description: string;
  type: string;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.description = 'Hello this is User!!';
    this.type = 'user';
  }
}

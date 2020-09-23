// This is re-usable Code implementing interface.

const oldCivic = {
  name: 'civic',
  year: 200,
  broken: true,
  summary(): string {
    return `Name is : ${this.name}`;
  },
};

const iplTeam = {
  name: 'MUMBAI INDIANS',
  year: 2008,
  summary(): string {
    return `${this.name} was established in ${this.year}`;
  },
};

interface Describer {
  summary(): string;
}

const describe = (item: Describer): void => {
  console.log(item.summary());
};

describe(oldCivic);
describe(iplTeam);

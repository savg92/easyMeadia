export type Note = {
  id: number;
  title?: string;
  body?: string;
  User?: User;
  updatedAt?: string;
}

type User = {
  id: number;
  name: string;
};

type JwtPayload = {
	iat: number;
	exp: number;
	data: {
		id: number;
		name: string;
		type: string;
	};
};

export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    User: {
      id: 1,
      name:'John Doe'
    },
    updatedAt: '2021-01-01',
  },
  {
    id: 2,
    title: 'Shakespeare',
    body: 'To be, or not to be: that is the question.',
    User: {
      id: 2,
      name: 'William Shakespeare',
    },
    updatedAt: '2021-01-02'
  },
  {
    id: 3,
    title: 'Albert Einstein',
    body: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    User: {
      id: 3,
      name: 'Albert Einstein',
    },
    updatedAt: '2021-01-03'
  },
];

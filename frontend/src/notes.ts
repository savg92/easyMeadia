export interface Note {
  id: number;
  title?: string;
  body?: string;
  user?: string;
  date?: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user: 'John Doe',
    date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Shakespeare',
    body: 'To be, or not to be: that is the question.',
    user: 'William Shakespeare',
    date: '2021-01-02'
  },
  {
    id: 3,
    title: 'Albert Einstein',
    body: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    user: 'Albert Einstein',
    date: '2021-01-03'
  },
];

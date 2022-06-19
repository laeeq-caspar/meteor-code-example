import { Mongo } from 'meteor/mongo';

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

export const LinksCollection = () => {

  const link1: Link =  {
    _id: '1',
    title: 'first Link',
    url: 'link.com',
    createdAt: new Date()
  }
  const link2: Link =  {
    _id: '2',
    title: 'second Link',
    url: 'link2.com',
    createdAt: new Date()
  }
  // console.log('Hello Hello World', link1)
  return [link1, link2];
};

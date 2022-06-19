import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function getLinks() {
 const links =  LinksCollection();

 console.log('Links ==>', links)
}

Meteor.startup(() => {
  getLinks()
});

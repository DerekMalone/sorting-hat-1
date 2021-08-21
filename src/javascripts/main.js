import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { domEvents } from '../javascripts/helpers/DOM/eventsDOM'

const houseColors = {
  gryffindor: '#7F0909',
  slytherin: '#0D6217',
  hufflepuff: '#EEE117',
  ravenclaw: '#000A90',
};

const errorMessage = (student) => {
  if (student) {
    document.querySelector('#error-message').innerHTML = '';
  } else {
    document.querySelector('#error-message').innerHTML = `
      <div style="color: red;margin-bottom: 10px;">
        <b>Please type a name</b>
      </div>`;
  }
};

let sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  sortingHat = houses[Math.floor(Math.random() * houses.length)];
  return sortingHat;
};



const init = () => {
  domEvents();
};

init();

const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const randomHouseHat = houses[Math.floor(Math.random() * houses.length)];
  return randomHouseHat;
};

export default sortingHat;

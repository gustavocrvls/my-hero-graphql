const heroes = [
  { id: 1, name: 'Luke', age: 80, friends: [{ id: 2, name: 'Leia', age: 80 }, { id: 3, name: 'C3-PO' }] },
  { id: 3, name: 'C3-PO', friends: [{ id: 1, name: 'Luke', age: 80 }] }
]

module.exports = {
  Query: {
    heroes: () => heroes,
    hero: (id) => heroes.find(hero => hero.id === id)
  },
};

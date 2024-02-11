import arrSort from '../app.js';

test('sort', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const heroesSort = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]

  const result = arrSort(heroes);
  expect(result).toEqual(heroesSort);
});
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
hogs = [
  {
    name: 'Mudblood',
    specialty: 'Mediocre magic',
    greased: false,
    'weight': 2.0,
    'award': 'bronze'
  },
  {
    name: 'Porkchop',
    specialty: 'Making friends',
    greased: true,
    'weight': 1.6,
    'award': 'silver'
  },
  {
    name: 'Cherub',
    specialty: 'truffle finder',
    greased: false,
    'weight': 0.7,
    'award': 'gold'
  },
  {
    name: 'Piggy smalls',
    specialty: 'Massivity',
    greased: true,
    'weight': 5.1,
    'award': 'platinum'
  },
  {
    name: 'Trouble',
    specialty: 'Racing',
    greased: true,
    'weight': 1.7,
    'award': 'gold'
  },
  {
    name: 'Sobriety',
    specialty: 'Expert Witness',
    greased: false,
    'weight': 2.2,
    'award': 'silver'
  },
  {
    name: 'Rainbowdash',
    specialty: 'Union Busting',
    greased: false,
    'weight': 3.7,
    'award': 'wood'
  },
  {
    name: 'TruffleShuffle',
    specialty: 'Finding truffles',
    greased: true,
    'weight': 4.0,
    'award': 'gold'
  },
  {
    name: 'Bay of Pigs',
    specialty: 'Hamphlet Distribution',
    greased: false,
    'weight': 2.8,
    'award': 'diamond'
  },
  {
    name: 'The Prosciutto Concern',
    specialty: 'truffle finder',
    greased: false,
    'weight': 2.3,
    'award': 'bronze'
  },
  {
    name: 'Galaxy Note',
    specialty: 'Airport Security',
    greased: true,
    'weight': 1.9,
    'award': 'diamond'
  },
  {
    name: 'Leggo My Eggo',
    specialty: 'Babysitting',
    greased: true,
    'weight': 3.3,
    'award': 'platinum'
  },
  {
    name: 'Augustus Gloop',
    specialty: 'Vacuum tubes',
    greased: true,
    'weight': 4.1,
    'award': 'wood'
  }
];

hogs.each do |hog|
  Hog.create(hog)
end

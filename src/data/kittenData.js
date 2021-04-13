const kittenUrls = [
  { url: 'https://placekitten.com/200/200' },
  { url: 'https://placekitten.com/200/204' },
  { url: 'https://placekitten.com/200/201' },
  { url: 'https://placekitten.com/200/202' },
  { url: 'https://placekitten.com/200/203' },
  { url: 'https://placekitten.com/200/205' },
  { url: 'https://placekitten.com/200/206' },
  { url: 'https://placekitten.com/200/207' },
  { url: 'https://placekitten.com/200/208' },
  { url: 'https://placekitten.com/200/209' },
  { url: 'https://placekitten.com/200/210' },
  { url: 'https://placekitten.com/200/211' },
  { url: 'https://placekitten.com/200/212' },
  { url: 'https://placekitten.com/200/213' },
  { url: 'https://placekitten.com/200/214' },
  { url: 'https://placekitten.com/200/215' },
  { url: 'https://placekitten.com/200/216' },
  { url: 'https://placekitten.com/200/217' },
  { url: 'https://placekitten.com/200/218' },
  { url: 'https://placekitten.com/200/219' },
  { url: 'https://placekitten.com/200/220' },
  { url: 'https://placekitten.com/200/221' },
  { url: 'https://placekitten.com/200/222' },
  { url: 'https://placekitten.com/200/223' },
  { url: 'https://placekitten.com/200/224' },
  { url: 'https://placekitten.com/200/225' },
  { url: 'https://placekitten.com/200/226' },
  { url: 'https://placekitten.com/200/227' },
  { url: 'https://placekitten.com/200/228' },
  { url: 'https://placekitten.com/200/229' },
  { url: 'https://placekitten.com/200/230' },
  { url: 'https://placekitten.com/200/231' },
  { url: 'https://placekitten.com/200/232' },
  { url: 'https://placekitten.com/200/233' },
  { url: 'https://placekitten.com/200/234' },
  { url: 'https://placekitten.com/200/235' },
  { url: 'https://placekitten.com/200/236' },
  { url: 'https://placekitten.com/200/237' },
  { url: 'https://placekitten.com/200/238' },
  { url: 'https://placekitten.com/200/239' },
  { url: 'https://placekitten.com/200/240' },
  { url: 'https://placekitten.com/200/241' },
  { url: 'https://placekitten.com/200/242' },
  { url: 'https://placekitten.com/200/243' },
  { url: 'https://placekitten.com/200/244' },
  { url: 'https://placekitten.com/200/245' },
  { url: 'https://placekitten.com/200/246' },
  { url: 'https://placekitten.com/200/247' },
  { url: 'https://placekitten.com/200/248' },
  { url: 'https://placekitten.com/200/249' },
  { url: 'https://placekitten.com/201/200' },
  { url: 'https://placekitten.com/202/200' },
  { url: 'https://placekitten.com/203/200' },
  { url: 'https://placekitten.com/204/200' },
  { url: 'https://placekitten.com/205/200' },
  { url: 'https://placekitten.com/206/200' },
  { url: 'https://placekitten.com/207/200' },
  { url: 'https://placekitten.com/208/200' },
  { url: 'https://placekitten.com/209/200' },
  { url: 'https://placekitten.com/210/200' },
  { url: 'https://placekitten.com/211/200' },
  { url: 'https://placekitten.com/212/200' },
  { url: 'https://placekitten.com/213/200' },
  { url: 'https://placekitten.com/214/200' },
  { url: 'https://placekitten.com/215/200' },
  { url: 'https://placekitten.com/216/200' },
  { url: 'https://placekitten.com/217/200' },
  { url: 'https://placekitten.com/218/200' },
  { url: 'https://placekitten.com/219/200' },
  { url: 'https://placekitten.com/220/200' },
  { url: 'https://placekitten.com/221/200' },
  { url: 'https://placekitten.com/222/200' },
  { url: 'https://placekitten.com/223/200' },
  { url: 'https://placekitten.com/224/200' },
  { url: 'https://placekitten.com/225/200' },
  { url: 'https://placekitten.com/226/200' },
  { url: 'https://placekitten.com/227/200' },
  { url: 'https://placekitten.com/228/200' },
  { url: 'https://placekitten.com/229/200' },
  { url: 'https://placekitten.com/230/200' },
  { url: 'https://placekitten.com/231/200' },
  { url: 'https://placekitten.com/232/200' },
  { url: 'https://placekitten.com/233/200' },
  { url: 'https://placekitten.com/234/200' },
  { url: 'https://placekitten.com/235/200' },
  { url: 'https://placekitten.com/236/200' },
  { url: 'https://placekitten.com/237/200' },
  { url: 'https://placekitten.com/238/200' },
  { url: 'https://placekitten.com/239/200' },
  { url: 'https://placekitten.com/240/200' },
  { url: 'https://placekitten.com/241/200' },
  { url: 'https://placekitten.com/242/200' },
  { url: 'https://placekitten.com/243/200' },
  { url: 'https://placekitten.com/244/200' },
  { url: 'https://placekitten.com/245/200' },
  { url: 'https://placekitten.com/246/200' },
  { url: 'https://placekitten.com/247/200' },
  { url: 'https://placekitten.com/248/200' },
  { url: 'https://placekitten.com/249/200' },
  { url: 'https://placekitten.com/250/200' }
]

const kittenNames = ["Ace",
"Buffy",
"Toast",
"Edward",
"Dude",
"Otto",
"Jimmy",
"Meatball",
"Tink",
"Chairman Meow",
"Timmy",
"Dewey",
"Hamlet",
"Bill",
"Thumper",
"Nimbus",
"Turbo",
"Rambo",
"Dotie",
"Angus",
"Hector",
"Stan",
"Jet",
"Tallulah",
"Bitty",
"Tesla",
"Fergus",
"Twinkle",
"Buttercup",
"Thunder",
"Bobo",
"Tiger Lily",
"Dory",
"Yogi",
"Tippy",
"Chai",
"Bugsy",
"Rooster",
"Buzz",
"Diesel",
"Birdie",
"Dwight",
"Turtle",
"Sparky",
"Morty",
"Ashes",
"Doodle",
"Toothless",
"Astro",
"Butter",
"Ducky",
"Fig",
"Peaches",
"Phil",
"Tofu",
"Comet",
"Mushu",
"Frodo",
"Captain",
"Cubby",
"Jules",
"Hades",
"Manny",
"Bagel",
"Baguette",
"Barley",
"Basil",
"Butterscotch",
"Cabbage",
"Carrot",
"Cashew",
"Cheddar",
"Chesnut",
"Chickpea",
"Churro",
"Cinnamon",
"Clementine",
"Coffee",
"Cranberry",
"Croissant",
"Crouton",
"Crumbs",
"Curry",
"Gumbo",
"Hoagie",
"Latke",
"Lentil",
"Linguini",
"Macaron",
"Marshmallow",
"Jasper",
"Milkshake",
"Spaghetti",
"Squash",
"Thyme",
"Turnip",
"Twinkie",
"Whiskey",
"Wonton",
"Yam"]

export {kittenUrls, kittenNames};

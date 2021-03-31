const listings = [
  {
    id: 201,
    title: "My cat Sphynxy got lost inside my own home and I am too scared to look. Why did I adopt this thing?! Please help I am FREAKED.",
    description: 'Please please help I am so scared...',
    images: [{ fileName: "sphynx" }],
    zip: 80052,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "There is a Kirby Vacuum salesman in my house. He won't leave and is bleeding from is his left armpit. Can somebody please come and intimidate him please?",
    images: [{ fileName: "kirby" }],
    categoryId: 5,
    zip: 80219,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Me again. My backup & the Kirby salesman have gotten into a tussle. They have already shattered 3 18th century oil paintings. Anybody got a 110v police airhorn I could borrow?",
    images: [{ fileName: "fight" }],
    zip: 80219,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Weird one here. My neighbor has been cutting spruce planks for the last 48 hours. I can't sleep. Could somebody pose as a Mormon and come talk to him about where he will spend eternity for long enough for me to take a nap?",
    images: [{ fileName: "tablesaw" }],
    zip: 80393,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "ISO free mattress...",
    images: [{ fileName: "freemattress" }],
    categoryId: 1,
    zip: 80202,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};

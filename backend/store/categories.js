const categories = [
  {
    id: 1,
    name: "Decor",
    icon: "sofa",
    backgroundColor: "maroon",
    color: "white"
  },
  {
    id: 2,
    name: "Labor",
    icon: "hammer",
    backgroundColor: "orange",
    color: "white"
  },
  {
    id: 3,
    name: "Moving",
    icon: "forklift",
    backgroundColor: "purple",
    color: "white"
  },
  {
    id: 4,
    name: "Digital",
    icon: "tablet-cellphone",
    backgroundColor: "navy",
    color: "white"
  },
  {
    id: 5,
    name: "Support",
    icon: "account-multiple",
    backgroundColor: "green",
    color: "white"
  },
  {
    id: 6,
    name: "Misc.",
    icon: "alien-outline",
    backgroundColor: "black",
    color: "white"
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};

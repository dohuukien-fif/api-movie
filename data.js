const faker = require("faker");
const fs = require("fs");
faker.locale = "vi";

// const randomCategorylisst = (n) => {
//   if (n <= 0) return [];
//   const cateLisst = [];
//   //loop
//   Array.from(new Array(n)).forEach(() => {
//     const category = {
//       id: faker.random.word().length + Date.now(),
//       name: faker.commerce.department(),

//       createdAt: Date.now(),
//       updatedAt: Date.now(),
//     };
//     cateLisst.push(category);
//   });
//   return cateLisst;
// };
// const randomCategoryCategory = (n) => {
//   if (n <= 0) return [];
//   const cateLisst = [];
//   //loop
//   Array.from(new Array(n)).forEach(() => {
//     const category = {
//       id: faker.datatype.uuid(),
//       name: faker.commerce.department(),

//       createdAt: Date.now(),
//       updatedAt: Date.now(),
//     };
//     cateLisst.push(category);
//   });
//   return cateLisst;
// };

const randomCategoryCategory = (n) => {
  if (n <= 0) return [];
  const cateLisst = [];
  //loop
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      nation: faker.datatype.array(),
      category: faker.datatype.array(),
      year: faker.datatype.array(),
      sort: faker.datatype.array(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    cateLisst.push(category);
  });
  return cateLisst;
};
const randomProductCategory = (categoryLisst, numberProduct) => {
  if (numberProduct <= 0) return [];
  const Products = [];
  for (const category of categoryLisst) {
    Array.from(new Array(numberProduct)).forEach(() => {
      const productList = {
        categoryName: category.name,
        id: faker.datatype.uuid(),
        nation: faker.commerce.productName(),
        category: faker.commerce.productName(),
        year: faker.commerce.productName(),
        sort: faker.commerce.productName(),

        name: faker.commerce.productName(),
        isPromotion: faker.datatype.boolean(),
        isFreeship: faker.datatype.boolean(),
        evaluate: Number.parseFloat(
          faker.commerce.price(((min = 1), (max = 5)))
        ),
        thumbnailUrl: faker.image.imageUrl(400, 400),
        date: faker.commerce.productName(),
        director: faker.commerce.productName(),
        time: faker.commerce.productName(),
        practice: faker.commerce.productName(),
        premiere: faker.commerce.productName(),
        cast: faker.commerce.productName(),
        movie: faker.datatype.array(),

        desName: faker.commerce.productName(),
        desContent: faker.commerce.productName(),
        desCast: faker.commerce.productName(),
        desTrailer: faker.commerce.productName(),
        description: faker.datatype.array(),

        // origin: faker.address.country(),
        // color: faker.internet.color(),
        // sex: faker.name.gender(),
        // Araray: faker.datatype.array(),
        // evaluate: faker.datatype.number(),

        // originalPrice: Number.parseFloat(faker.commerce.price(((min = 50000), (max = 200000)))),
        // price: Number.parseFloat(faker.commerce.price((min = 400000), (max = 1000000))),
        // promotionpencent: Number.parseInt(faker.commerce.price((min = 1), (max = 10))),
        // description: faker.commerce.productDescription(),
        // createdAt: Date.now(),
        // updatedAt: Date.now(),

        // SearchTerm: faker.commerce.productName(),
        // size: faker.datatype.number((max = 10)),
        // height: faker.datatype.number((max = 10)),
        // width: faker.datatype.number((max = 10)),

        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      Products.push(productList);
    });
  }

  return Products;
};

(() => {
  const randomCategory = randomCategoryCategory(10);
  const productLissts = randomProductCategory(randomCategory, 5);
  const db = {
    home: productLissts,
    seriesMove: productLissts,
    categoriesSeries: randomCategory,
    oldMove: productLissts,
    categoriesOld: randomCategory,
    anime: productLissts,
    categoriesAnime: randomCategory,
    cinimer: productLissts,
    categoriesCinimer: randomCategory,
  };
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("succer");
  });
})();

const db = require('./index.js');
const faker = require('faker');

const seedDatabase = () => {

  let firstEntry = [
    'Xbox One S',
    '["https://cdn.pocket-lint.com/r/s/1200x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg", "https://compass-ssl.surface.com/assets/9e/cc/9eccdb3c-e965-4ab7-97d2-651c5f5a7fbe.jpg?n=Consoles-Hub_Content-Placement_Hub-SX_788x444.jpg"]',
    '429.95',
    4.2,
    2041,
    '',
    [
      [ 'Brand', 'Xbox' ],
      [ 'Manufacturer Part Number', 'xb1' ],
      [ 'Assembled Product Dimensions (L x W x H)', '14.25 x 11.50 x 5.00 Inches' ]
    ],
    'mouse'
  ];
  firstEntry[6] = JSON.stringify(firstEntry[6]);

  let firstQuery = 'insert into products (name, images, price, reviews_avg, reviews_total, details, specifications, product_category) values (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(firstQuery, firstEntry, (error,results) => {
    error ? console.error(error) : console.log(results);
  });

  let initProducts = []
  while (initProducts.length < 499) {

    // * CREATE IMAGES ARRAY FOR PRODUCT



    // https://hrr50-fec-images.s3-us-west-1.amazonaws.com/images/img_69.jpeg


    let productImages = [];
    while (productImages.length < 10) {
      if (productImages.length % 3 == 0) {
        productImages.push('http://placeimg.com/640/480/any');
      }
      productImages.push('http://placeimg.com/640/480/tech');
    }
    productImages = JSON.stringify(productImages);

    let possibleSpecItems = [
      'Brand',
      'Manufacturer Part Number',
      'Assembed Product Dimensions (L x W x H)',
      'Color',
      'Compatible Devices',
      'Features',
      'Video Game Platform',
      'Manufacturer',
      'Contains Batteries',
      'Assembled Product Weight',
      'Release Date'
    ];

    let rand = Math.floor(Math.random() * 12);
    if (rand < 3) rand = 3;
    let specifications = [];
    for (let i = rand; i > 0; i--) {
      let index = Math.floor(Math.random() * 12);
      let entry = [possibleSpecItems[index], faker.commerce.productAdjective()];
      specifications.push(entry);
    }

    specifications = JSON.stringify(specifications);

    let product = [
      faker.commerce.productName(),
      productImages,
      faker.commerce.price(),
      (Math.random() * 5),
      Math.floor(Math.random() * 30000),
      faker.lorem.paragraphs(),
      specifications,
      faker.commerce.product()
    ];

    initProducts.push(product);
  }

  console.log(initProducts.length);

  initProducts.forEach((product) => {
    let queryString = 'insert into products (name, images, price, reviews_avg, reviews_total, details, specifications, product_category) values (?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(queryString, product, (error, results) => {
      error ? console.error(error) : console.log(results);
    });
  });

  db.end();
}

seedDatabase();



// Use with digital games only; console does not play physical discs. 4K at 120 FPS: Requires supported content and display; use on Xbox Series X as content becomes available. 8K: Requires supported content and display. Use on Xbox Series X as content becomes available. Xbox Game Pass: Membership sold separately. Game catalog varies over time and by region (xbox.com/gamepass). 120 FPS: Requires supported content and display; use on Xbox Series X & S as content becomes available. 4K streaming: with select apps, see xbox.com. Some apps require app provider-specific subscriptions and/or other requirements.
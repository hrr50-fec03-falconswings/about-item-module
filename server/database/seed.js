const db = require('./index.js');
const faker = require('faker');
const moment = require('moment');

const seedDatabase = () => {
  // first entry matches main product page for showcase
  let firstEntry = [
    `Xbox One S ${faker.company.bs()}`,
    '["https://cdn.pocket-lint.com/r/s/1200x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg", "https://compass-ssl.surface.com/assets/9e/cc/9eccdb3c-e965-4ab7-97d2-651c5f5a7fbe.jpg?n=Consoles-Hub_Content-Placement_Hub-SX_788x444.jpg"]',
    '229.95',
    4.2,
    2041,
    faker.lorem.paragraphs((Math.floor(Math.random() * 7))),
    [
      [ 'Brand', 'Xbox' ],
      [ 'Manufacturer Part Number', 'xb1' ],
      [ 'Assembled Product Dimensions (L x W x H)', '14.25 x 11.50 x 5.00 inches' ],
      ['Model', 'x14b633739831'],
      ['Release Date', moment(faker.date.past(10)).format('MMMM Do YYYY')]
    ],
    '',
    false,
    'mouse'
  ];
  firstEntry[6] = JSON.stringify(firstEntry[6]);

  let firstQuery = 'insert into products (name, images, price, reviews_avg, reviews_total, details, specifications, special, sponsored, product_category) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(firstQuery, firstEntry, (error,results) => {
    error ? console.error(error) : console.log(results);
  });

  let initProducts = []
  while (initProducts.length < 499) {

    // * CREATE IMAGES ARRAY FOR PRODUCT



    // https://hrr50-fec-images.s3-us-west-1.amazonaws.com/images/img_69.jpeg


    let productImages = [];
    while (productImages.length < 8) {
      let rand = Math.floor(Math.random() * (70 - 1) + 1);
      productImages.push(`https://hrr50-fec-images.s3-us-west-1.amazonaws.com/images/img_${rand}.jpeg`);
    }
    productImages = JSON.stringify(productImages);

    // * specifications column

    let possibleSpecItems = [
      ['Brand', faker.company.companyName()],
      ['Manufacturer Part Number', faker.finance.account(12)],
      ['Assembed Product Dimensions (L x W x H)', faker.fake("{{finance.account(2)}} x {{finance.account(2)}} x {{finance.account(2)}} inches")],
      ['Color', faker.commerce.color()],
      ['Compatible Devices', faker.commerce.productName()],
      ['Features', faker.commerce.productAdjective()],
      ['Video Game Platform', faker.lorem.sentence(2)],
      ['Manufacturer', faker.company.companyName()],
      ['Contains Batteries', 'No'],
      ['Assembled Product Weight', faker.fake("{{finance.account(2)}} grams {{finance.account(2)}} ounces")],
      ['Release Date', moment(faker.date.past(5)).format('MMMM Do YYYY')]
    ];

    let numSpecs = Math.floor(Math.random() * (12 - 3) + 3);
    let specifications = [];
    for (let i = 0; i < numSpecs; i++) {
      if (Math.random() > 0.25) specifications.push(possibleSpecItems[i]);
    }

    specifications = JSON.stringify(specifications);

    // * special column

    const specialOptions = [
      'rollback',
      'reduced',
      'lowstock',
      'newitem'
    ]

    let special = '';
    let sponsored = false;
    if (Math.random() > 0.90) {
      sponsored = true;
    }
    if (Math.random() < 0.05) {
      special = specialOptions[Math.floor(Math.random() * 4)];
    }

    let product = [
      (faker.commerce.productName() + ' ' + faker.company.bs()),
      productImages,
      faker.commerce.price(),
      (Math.random() * 5),
      Math.floor(Math.random() * 30000),
      faker.lorem.paragraphs((Math.floor(Math.random() * 7))),
      specifications,
      special,
      sponsored,
      faker.commerce.product()
    ];

    initProducts.push(product);
  }

  initProducts.forEach((product) => {
    let queryString = 'insert into products (name, images, price, reviews_avg, reviews_total, details, specifications, special, sponsored, product_category) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(queryString, product, (error, results) => {
      error ? console.error(error) : console.log(results);
    });
  });

  db.end();
}

seedDatabase();



// Use with digital games only; console does not play physical discs. 4K at 120 FPS: Requires supported content and display; use on Xbox Series X as content becomes available. 8K: Requires supported content and display. Use on Xbox Series X as content becomes available. Xbox Game Pass: Membership sold separately. Game catalog varies over time and by region (xbox.com/gamepass). 120 FPS: Requires supported content and display; use on Xbox Series X & S as content becomes available. 4K streaming: with select apps, see xbox.com. Some apps require app provider-specific subscriptions and/or other requirements.
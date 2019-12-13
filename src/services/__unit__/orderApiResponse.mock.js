export const orderApiResponse = {
  data: {
    '-LvpwjQMhYJull_sp6SB': {
      customer: {
        address: {
          country: 'Ireland',
          street: 'Street n1',
          zipCode: '41314',
        },
        email: 'costumer@email.com',
        name: 'Mr Costumer',
      },
      devliveryMethod: 'fast',
      ingredients: { bacon: 1, cheese: 1, meat: 1, salad: 1 },
      price: 7.9,
    },
    '-LvpzbrAAjDWEswRCMx9': {
      customer: {
        address: {
          country: 'Ireland',
          street: 'Street n1',
          zipCode: '41314',
        },
        email: 'costumer@email.com',
        name: 'Mr Costumer',
      },
      devliveryMethod: 'fast',
      ingredients: { bacon: 1, cheese: 1, meat: 1, salad: 1 },
      price: 7.9,
    },
    '-Lvq3Z4OoduoSiprfl5P': {
      customer: {
        address: {
          country: 'Ireland',
          street: 'Street n1',
          zipCode: '41314',
        },
        email: 'costumer@email.com',
        name: 'Mr Costumer',
      },
      devliveryMethod: 'fast',
      ingredients: { bacon: 2, cheese: 1, meat: 1, salad: 1 },
      price: 8.3,
    },
  },
};

export const orderResponseParsed = [
  {
    id: '-LvpwjQMhYJull_sp6SB',
    customer: {
      address: {
        country: 'Ireland',
        street: 'Street n1',
        zipCode: '41314',
      },
      email: 'costumer@email.com',
      name: 'Mr Costumer',
    },
    devliveryMethod: 'fast',
    ingredients: { bacon: 1, cheese: 1, meat: 1, salad: 1 },
    price: 7.9,
  },
  {
    id: '-LvpzbrAAjDWEswRCMx9',
    customer: {
      address: {
        country: 'Ireland',
        street: 'Street n1',
        zipCode: '41314',
      },
      email: 'costumer@email.com',
      name: 'Mr Costumer',
    },
    devliveryMethod: 'fast',
    ingredients: { bacon: 1, cheese: 1, meat: 1, salad: 1 },
    price: 7.9,
  },
  {
    id: '-Lvq3Z4OoduoSiprfl5P',
    customer: {
      address: {
        country: 'Ireland',
        street: 'Street n1',
        zipCode: '41314',
      },
      email: 'costumer@email.com',
      name: 'Mr Costumer',
    },
    devliveryMethod: 'fast',
    ingredients: { bacon: 2, cheese: 1, meat: 1, salad: 1 },
    price: 8.3,
  },
];

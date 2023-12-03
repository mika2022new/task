export const orders = [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products () { 
        return products.filter((item) => item.order === this.id);
      },
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products () { 
        return products.filter((item) => item.order === this.id);
      },
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      get products () { 
        return products.filter((item) => item.order === this.id);
      },
    },
  ];
  
  export const products = [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
      ],
      order: 1,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 2,
      serialNumber: 12345,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 2',
      type: 'Mouse',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 1100, symbol: 'USD', isDefault: 0},
        {value: 2500, symbol: 'UAH', isDefault: 1}
      ],
      order: 2,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 3,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 3',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
      ],
      order: 3,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 4,
      serialNumber: 12345,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 4',
      type: 'Keyboard',
      specification: 'Specification 3',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2700, symbol: 'UAH', isDefault: 1}
      ],
      order: 3,
      date: '2017-06-29 12:09:33'
    },
  ];
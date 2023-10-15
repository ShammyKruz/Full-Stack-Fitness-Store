import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from "./models/productModel";

export const sampleProducts:Product[] = [
    {
        name: 'Treadmill-Machine',
        slug: 'Treadmill-Machine',
        category: 'Fitness',
        image: '../images/treadmill.jpg',
        price: 120,
        countInStock: 10,
        brand: 'MMP',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality treadmill invention'
    },
    {
        name: 'Adjustable-Dumbells',
        slug: 'Adjustable-Dumbells',
        category: 'Gym',
        image: '../images/treadmill.jpg',
        price: 120,
        countInStock: 20,
        brand: 'MMP',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality dumbell inventions'
    },
    {
        name: 'Chest-Expander',
        slug: 'Chest-Expander',
        category: 'Fitness',
        image: '../images/treadmill.jpg',
        price: 120,
        countInStock: 10,
        brand: 'MMP',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality treadmill invention'
    },
    {
        name: 'Sit-up-bench',
        slug: 'Sit-up-bench',
        category: 'Fitness',
        image: '../images/treadmill.jpg',
        price: 120,
        countInStock: 10,
        brand: 'MMP',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality treadmill invention'
    },
    {
        name: 'Sit-up',
        slug: 'Sit-up',
        category: 'Fitness',
        image: '../images/treadmill.jpg',
        price: 120,
        countInStock: 10,
        brand: 'MMP',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality treadmill invention'
    },
    {
        name: 'Spinning-bike',
        slug: 'Spinning-bike',
        category: 'Fitness',
        image: '../images/treadmill.jpg',
        price: 120,
        countInStock: 10,
        brand: 'MMP',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality treadmill invention'
    },
]

export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]
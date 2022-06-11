import {faker} from '@faker-js/faker'

import {Comrade} from '~types/user'

export const mockUsers = (length = 20): Comrade[] =>
  Array.from({length}, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    tribe: faker.datatype.number({min: 1, max: 15}),
  }))

export const mockPrompts = (length = 90) =>
  Array.from({length}, () => faker.lorem.sentence())

export const mockTribes = (length = 15) =>
  Array.from({length}, (_, i) => ({
    id: faker.datatype.uuid(),
    number: i + 1,
    startDate: faker.date.past(),
    endDate: faker.date.past(),
    members: mockUsers(8),
    status: faker.helpers.arrayElement(['planned', 'started', 'finished']),
  }))

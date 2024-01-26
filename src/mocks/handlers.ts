import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Deepak Singh' },
        { id: 2, name: 'Abhishek Singh' },
        { id: 3, name: 'Tim cook' },
      ])
    )
  }),
]

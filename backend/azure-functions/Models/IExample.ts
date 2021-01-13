export interface IExample {
  [key: string]: unknown;
  id?: string;
  name: string;
}

// We can use Joi and add validation schemas here if we want,
// but this is just an example so I'm keeping it simple
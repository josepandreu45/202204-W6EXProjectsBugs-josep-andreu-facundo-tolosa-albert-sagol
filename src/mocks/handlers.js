import { rest } from "msw";
import mockProjects from "./projects";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProjects));
  }),
  rest.delete(`${process.env.REACT_APP_API_URL}1`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${process.env.REACT_APP_API_URL}1000`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];

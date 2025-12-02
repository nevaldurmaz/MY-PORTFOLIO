import { GraphQLClient } from "graphql-request";

// Önce direkt URL ile deneyelim
const endpoint =
  "https://ap-south-1.cdn.hygraph.com/content/cmgg1s5wk00ov07wfn2zyltsa/master";

// Environment değişkeni yerine direkt URL kullan
export const graphcms = new GraphQLClient(endpoint, {
  headers: {},
});

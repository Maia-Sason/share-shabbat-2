// TODO: Set up contentful endpoint and use it to read static data!! (blogs, preset blessings, etc)

import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

const getContentQuery = (params) => ({
  limit: 1,
  include: 10,
  locale: params.locale,
  "fields.slug": params.slug,
  content_type: params.pageContentType,
});

export async function getPage(params) {
  //   This will currently fetch ALL data from blessCategory
  const items = await getClient(false).getEntries({
    content_type: "product",
  });

  console.log(items);
  //   const page = items[0];

  //   return page;
}

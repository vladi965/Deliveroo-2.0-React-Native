import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: 'd8l30r8g',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
});

const build = imageUrlBuilder(client);

export const urlFor = (source) => build.image(source);

export default client;
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "cjvvr3l0",
  dataset: "production",
  apiVersion: "v1",
});

export default client;

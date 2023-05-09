const Hapi = require("@hapi/hapi");
const H2o2 = require("@hapi/h2o2");

const TENANT_ID = "97a35a21-0713-3b21-1264-39fb70ea7550";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });
  await server.register(H2o2);

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  server.route({
    method: "GET",
    path: "/webstories/{urlName}",
    handler: {
      proxy: {
        mapUri: (request) => {
          const urlName = request.params.urlName;
          return {
            uri: `https://stories.usestoryteller.com/webstories/${TENANT_ID}/${urlName}/amp.html`,
          };
        },
        passThrough: true,
      },
    },
  });

  server.route({
    method: "GET",
    path: "/webstories/sitemap.xml",
    handler: {
      proxy: {
        uri: `https://stories.usestoryteller.com/sitemap/${TENANT_ID}/sitemap.xml`,
        passThrough: true,
      },
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

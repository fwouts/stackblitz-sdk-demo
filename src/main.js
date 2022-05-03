/**
 * @type {import('@stackblitz/sdk')}
 */
const { default: sdk } = { default: window.StackBlitzSDK };

async function main() {
  await sdk.embedProject(
    "iframe",
    {
      files: {
        "main.js": `
const http = require("http");

const port = 9000;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from an in-browser Node environment, World!");
});
server.listen(port, () => {
  console.log("Server is running.");
});
`.trim(),
        "package.json": JSON.stringify({
          scripts: {
            dev: "node main.js",
          },
        }),
      },
      title: "Test",
      description: "",
      template: "node",
    },
    {
      openFile: "main.js",
      view: "preview",
      hideExplorer: true,
      hideNavigation: true,
      forceEmbedLayout: true,
      initialPath: "/",
    }
  );
}

main().catch(console.error);

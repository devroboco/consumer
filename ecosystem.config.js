module.exports = {
  apps: [
    {
      name: "IvaIOT - Backend",
      script: "./dist/main.js",
      node_args: "-r dotenv/config",
    },
  ],
};

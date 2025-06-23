module.exports = {
  apps: [
    {
      name: "StrucLive-Consumer",
      script: "./dist/worker.js",
      node_args: "-r dotenv/config",
    },
  ],
};

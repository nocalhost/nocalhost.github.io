module.exports = {
  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: "css",
      },
    ],
  ],
};

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["import"],
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "import/order": "warn",
    curly: "error",
  },
};

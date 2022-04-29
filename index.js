module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["import"],
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "import/order": "warn",
    curly: "error",
    "@typescript-eslint/array-type": "warn",
    eqeqeq: ["warn", "allow-null"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prefer-arrow-callback": "warn",
    "prefer-template": "warn",
    "prefer-const": "warn",
  },
};

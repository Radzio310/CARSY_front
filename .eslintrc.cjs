module.exports = {
   root: true,
   env: {
      browser: true,
      node: true,
   },
   parser: "@typescript-eslint/parser",
   plugins: ["@typescript-eslint"],
   overrides: [
      {
         parserOptions: {
            project: ["./tsconfig.json"],
         },
         extends: ["next/core-web-vitals", "plugin:@next/next/recommended"],
         files: ["*.ts", "*.tsx"],
         rules: {
            "react-hooks/rules-of-hooks": "error",
            "@typescript-eslint/array-type": ["warn", { default: "generic" }],
            "@typescript-eslint/ban-types": "error",
            "@typescript-eslint/consistent-indexed-object-style": "warn",
            "@typescript-eslint/consistent-type-exports": "warn",
            "@typescript-eslint/consistent-type-imports": "warn",
            "no-array-constructor": "off",
            "@typescript-eslint/no-array-constructor": "error",
            "@typescript-eslint/no-base-to-string": "error",
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/no-duplicate-type-constituents": "error",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/no-empty-interface": "warn",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-extra-non-null-assertion": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "no-implied-eval": "off",
            "@typescript-eslint/no-implied-eval": "error",
            "no-loss-of-precision": "off",
            "@typescript-eslint/no-loss-of-precision": "error",
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-mixed-enums": "error",
            "@typescript-eslint/no-namespace": "error",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-redundant-type-constituents": "error",
            "@typescript-eslint/no-throw-literal": "error",
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/no-unnecessary-type-constraint": "error",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-call": "error",
            "@typescript-eslint/no-unsafe-declaration-merging": "error",
            "@typescript-eslint/no-unsafe-enum-comparison": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/prefer-as-const": "error",
            "require-await": "off",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/restrict-template-expressions": "error",
            "@typescript-eslint/triple-slash-reference": "error",
            "@typescript-eslint/unbound-method": "error",
         },
      },
   ],
};

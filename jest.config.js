const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/arithmetic_function_module/",
    "/library_management_system_module/",
  ],
};



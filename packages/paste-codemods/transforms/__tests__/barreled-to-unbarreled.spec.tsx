const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "barreled-to-unbarreled", null, "barreled-to-unbarreled", { parser: "ts" });

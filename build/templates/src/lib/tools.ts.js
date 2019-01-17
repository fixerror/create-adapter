"use strict";
const createAdapter_1 = require("../../../src/lib/createAdapter");
module.exports = (answers => {
    const useTypeScript = answers.language === "TypeScript";
    if (!useTypeScript)
        return;
    return createAdapter_1.readFile("tools.raw.ts", __dirname);
});

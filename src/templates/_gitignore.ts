import { Answers } from "../lib/questions";

const templateFunction = (answers: Answers) => {

	const useNyc = answers.tools && answers.tools.indexOf("Code coverage") > -1;
	const useTypeScript = answers.language === "TypeScript";

	const template = `
.git
.idea
node_modules
nbproject

package-lock.json
${useTypeScript ? (`
# Sourcemaps
maps/
`) : ""}

# npm package files
iobroker.*.tgz

Thumbs.db
${useNyc ? `
# NYC coverage files
coverage
.nyc*

` : ""}
# i18n intermediate files
admin/i18n
`;
	return template.trim();
};

templateFunction.customPath = ".gitignore";
export = templateFunction;
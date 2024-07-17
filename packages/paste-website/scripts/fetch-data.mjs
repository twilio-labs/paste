import path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs/promises";

import { globby } from "globby-esm";

import { systemTable } from "../src/utils/airtable.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, "../data");

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
const getCategory = (pkgPath) => {
  if (pkgPath.startsWith("paste-core/components")) {
    return "allPasteComponent";
  } else if (pkgPath.startsWith("paste-core/primitives")) {
    return "allPastePrimitive";
  } else if (pkgPath.startsWith("paste-core/layout")) {
    return "allPasteLayout";
  } else if (pkgPath.startsWith("paste-libraries")) {
    return "allPasteLibraries";
  } else if (pkgPath.startsWith("paste-theme")) {
    return "allPasteThemePackage";
  } else if (pkgPath.startsWith("paste-design-tokens")) {
    return "allPasteDesignTokensPackage";
  }
  return "";
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, consistent-return
const getAllPatterns = async () => {
  try {
    const patterns = await systemTable
      .select({
        filterByFormula: 'AND({Component Category} = "pattern", Documentation, status, status != "in development")',
        sort: [{ field: "Feature" }],
        fields: ["Feature", "status"],
      })
      .all();

    return patterns.map(({ fields }) => fields);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("getAllPatterns fetch error:", error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, consistent-return
const getAllPageTemplates = async () => {
  try {
    const patterns = await systemTable
      .select({
        filterByFormula:
          'AND({Component Category} = "page_template", Documentation, status, status != "in development")',
        sort: [{ field: "Feature" }],
        fields: ["Feature", "status"],
      })
      .all();
    return patterns.map(({ fields }) => fields);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("getAllPageTemplates fetch error:", error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, consistent-return
const getAllExperiences = async () => {
  try {
    const experiences = await systemTable
      .select({
        filterByFormula: 'AND({Component Category} = "experience", Documentation, status, status != "in development")',
        sort: [{ field: "Feature" }],
        fields: ["Feature", "status"],
      })
      .all();
    return experiences.map(({ fields }) => fields);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("getAllExperiences fetch error:", error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getAllPackages = async () => {
  try {
    const root = path.resolve(process.cwd(), "../");
    const packages = await globby(["**/package.json", "!**/node_modules", "!**/core-bundle/**"], {
      cwd: root,
    });
    const data = {
      allPasteComponent: [],
      allPasteDesignTokensPackage: [],
      allPasteLayout: [],
      allPasteLibraries: [],
      allPastePrimitive: [],
      allPasteThemePackage: [],
      allPastePattern: [],
      allPastePageTemplate: [],
      allPasteExperience: [],
    };

    packages.forEach(async (packageJson) => {
      const category = getCategory(packageJson);
      if (category) {
        // eslint-disable-next-line unicorn/prefer-json-parse-buffer
        const fileContents = await fs.readFile(`${root}/${packageJson}`, "utf8");
        const { name, status, version, description } = JSON.parse(fileContents);
        data[category].push({ name, status: status || null, version, description });
      }
    });

    const patterns = await getAllPatterns();
    data.allPastePattern = [...patterns];

    const pageTemplates = await getAllPageTemplates();
    data.allPastePageTemplate = [...pageTemplates];

    const experiences = await getAllExperiences();
    data.allPasteExperience = [...experiences];

    await fs.mkdir(dataPath, { recursive: true }, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });

    await fs.writeFile(path.join(dataPath, "package-data.json"), JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("getAllPatterns fetch error:", error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getAllFeatures = async () => {
  try {
    const features = await systemTable
      .select({
        filterByFormula: "status",
        sort: [{ field: "Feature" }],
        fields: [
          "Component Category",
          "Feature",
          "Documentation",
          "Figma",
          "Design committee review",
          "Engineer committee review",
          "Code",
          "status",
          "Product suitability",
        ],
      })
      .all();
    const items = features.map(({ fields }) => fields);

    await fs.mkdir(dataPath, { recursive: true }, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });

    await fs.writeFile(path.join(dataPath, "feature-data.json"), JSON.stringify(items, null, 2), "utf8");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("getAllFeatures fetch error:", error);
  }
};

getAllPackages();
getAllFeatures();

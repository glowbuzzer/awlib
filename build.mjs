import esbuild from "esbuild"
import fs from "fs"
import svgrPlugin from "esbuild-plugin-svgr"

const GITHUB_TAG_PREFIX = "refs/tags/"
const [, , version_or_github_ref] = process.argv

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))

if (version_or_github_ref?.length) {
    const version = version_or_github_ref.startsWith(GITHUB_TAG_PREFIX)
        ? version_or_github_ref.substring(GITHUB_TAG_PREFIX.length)
        : version_or_github_ref

    console.log("Bumping version to", version)
    pkg.version = version
    fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2))
} else {
    console.log("No version specified, not bumping version")
}

const externals = [
    pkg.dependencies,
    pkg.devDependencies,
    pkg.peerDependencies,
    pkg.optionalDependencies
]
    .map(d => d && Object.keys(d))
    .filter(Boolean)
    .flat()

console.log("externals", externals)
esbuild
    .build({
        entryPoints: ["./src/index.ts"],
        bundle: true,
        outfile: "./dist/index.js",
        platform: "node",
        target: "node18",
        format: "esm",
        external: externals,
        plugins: [svgrPlugin({ namedExport: "ReactComponent", exportType: "named" })]
    })
    .catch(e => {
        console.log(e)
        return process.exit(1)
    })

import esbuild from "esbuild"
import fs from "fs"
import svgrPlugin from "esbuild-plugin-svgr"

const GITHUB_TAG_PREFIX = "refs/tags/"
const [, , arg1] = process.argv

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))

const watch = arg1 === "--watch"

if (watch) {
    console.log("Watching for changes...")
} else {
    if (arg1?.length) {
        const version = arg1.startsWith(GITHUB_TAG_PREFIX)
            ? arg1.substring(GITHUB_TAG_PREFIX.length)
            : arg1

        console.log("Bumping version to", version)
        pkg.version = version
        fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2))
    } else {
        console.log("No version specified, not bumping version")
    }
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
const options = {
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outfile: "./dist/index.js",
    platform: "node",
    target: "node18",
    format: "esm",
    external: externals,
    plugins: [
        svgrPlugin({ namedExport: "ReactComponent", exportType: "named" }),
        {
            name: "info",
            setup(build) {
                build.onEnd(() => console.log("Build complete", new Date().toISOString()))
            }
        }
    ]
}

if (watch) {
    esbuild.context(options).then(async c => {
        await c.watch()
    })
} else {
    esbuild.build(options).catch(() => process.exit(1))
}

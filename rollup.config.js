import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const devMode = process.env.NODE_ENV === "development";

export default [
  {
    input: "src/index.jsx",
    output: [
      {
        file: "dist/index.js",
        format: "es",
      },
    ],
    plugins: [
      resolve({ extensions: [".js", ".jsx"] }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"],
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      terser({
        ecma: 2020,
        module: true,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: !devMode,
          drop_debugger: !devMode,
        },
      }),
    ],
  },
];

import typescript2 from 'rollup-plugin-typescript2'

export default {
    input: './src/index.ts',
    output: [
        {
            file: `dist/math-es.js`,
            format: 'es'
        },
        {
            file: `dist/math-cjs.js`,
            format: 'cjs'
        }
    ],
    plugins: [
        typescript2()
    ]
}
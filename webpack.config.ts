import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, BuildPath} from "./config/build/types/config";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const mode: BuildMode = 'development';

const isDev = mode === 'development';
const port = 3000;

const config: webpack.Configuration = buildWebpackConfig( {
    mode,
    paths,
    isDev,
    port
})

export default config;
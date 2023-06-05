export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions{
    paths: BuildPath;
    mode: BuildMode;
    isDev: boolean;
    port: number
}
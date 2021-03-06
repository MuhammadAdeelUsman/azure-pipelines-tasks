// Type definitions for del v2.2.0
// Project: https://github.com/sindresorhus/del
// Definitions by: Asana <https://asana.com>, Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../glob/glob.d.ts"/>

declare module "del" {
    import glob = require("glob");

    function Del(pattern: string): Promise<string[]>;
    function Del(pattern: string, options: Del.Options): Promise<string[]>;

    function Del(patterns: string[]): Promise<string[]>;
    function Del(patterns: string[], options: Del.Options): Promise<string[]>;

    module Del {
        function sync(pattern: string, options?: Options): string[];
        function sync(patterns: string[], options?: Options): string[];

        interface Options extends glob.IOptions {
            force?: boolean;
            dryRun?: boolean;
        }
    }

    export = Del;
}

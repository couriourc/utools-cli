import { program } from "commander";
import * as pkg from "../package.json";
import { createUiTemplate, createNonUiTemplate } from "./create/index";
import { getCurExecPath } from "./utils/common";
// get version
program
    .version(`${pkg.version}`, '-v --version')
    .usage('<command> [options]');
// create plugin project
program
    .command('create <plugin-name>')
    .description('Create new plugin form => utools-cli create yourProjectName')
    .action(async (pluginName: string) => {
        await createUiTemplate(getCurExecPath(), pluginName)
    });
program
    .command('create:non-ui <plugin-name>')
    .description('Create new plugin from =>utools-cli create a non-ui utools-plugin')
    .action(async (pluginName: string) => {
        await createNonUiTemplate(getCurExecPath(), pluginName)

    })
program
    .parse(process.argv);
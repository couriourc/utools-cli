import  {program}  from "commander";
import * as pkg from "../package.json";
import { main } from "./create/index";
// get version
program
    .version(`${pkg.version}`,'-v --version')
    .usage('<command> [options]');
// create plugin project
program
    .command('create <plugin-name>')
    .description('Create new plugin form => utools-cli create yourProjectName')
    .action(async ( pluginName:string)=>{
        await main(pluginName)
    });

program
    .parse( process.argv );
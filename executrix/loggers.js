/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to the system-specified log file.
 * Some of the logic here is duplicated from the Haystacks repo, but kept super basic intentionally.
 * Logging from the plugin will remain hard-coded, because the data isn't loaded,
 * and by the time it is loaded its already useless to log.
 * So uncomment the lines in the plugin code if you need to log from the plugin, and leave them commented out if you don't need to log.
 * This is setup here so that the logs can be added to the application level log file,
 * especially to include data, as the data can be too much and will easily overflow the console buffer.
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/04/03
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import D from '../structures/pluginData.js';
// External imports
import hayConst from '@haystacks/constants';
import moment from 'moment';
import fs from 'fs';
import path from 'path';

const {bas, cfg, gen, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.hayD-CAF.executrix.loggers.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getLogFileNameAndPath
 * @description Determines, using the Haystacks configuration settings data passed as input to the plugin entry-point,
 * what the log file name and path should be.
 * @param {object} haystacksConfigData A JSON object that contains all of the configuration data including the log file name and path.
 * @return {string} The full path and file name for the log file.
 * @author Seth Hollingsead
 * @date 2023/04/03
 */
async function getLogFileNameAndPath(haystacksConfigData) {
  // let functionName = getLogFileNameAndPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // haystacksConfigData is:
  // console.log(msg.chaystacksConfigDataIs + JSON.stringify(haystacksConfigData));
  let logFile = haystacksConfigData[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cclientRootPath];
  if (logFile !== undefined) {
    logFile = path.join(logFile + bas.cForwardSlash + wrd.clogs + bas.cForwardSlash + haystacksConfigData[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.clogFileName]);
    logFile = path.normalize(logFile);
  }
  // logFile is:
  // console.log(msg.clogFileIs + logFile);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return logFile;
}

/**
 * @function consoleLog
 * @description 
 * @param {*} classPath 
 * @param {*} message 
 */
async function consoleLog(classPath, message) {

}
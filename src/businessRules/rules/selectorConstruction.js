/**
 * @file selectorConstruction.js
 * @module selectorConstruction
 * @description A file to hold all of the selector factory functions that,
 * add functionality to a CodeceptJS function object.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/04/03
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, gen, msg, num, wrd} = hayConst;

/**
 * @function mapSelectorMetaDataToBusinessRule
 * @description Maps a selector meta-data name to an actual business rule name.
 * @param {string} inputData The Selector meta-data name business rule that should be converted to an actual business rule name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A modified string that represents an actual business rule that can be executed by the system.
 * @author Seth Hollingsead
 * @date 2023/04/03
 */
async function mapSelectorMetaDataToBusinessRule(inputData, inputMetaData) {
  let functionName = mapSelectorMetaDataToBusinessRule.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';

  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  mapSelectorMetaDataToBusinessRule
}
/**
 * @file plugin.command.constants.validation.js
 * @module plugin.command.constants.validation
 * @description Contains all validations for named plugin command constants.
 * @requires module:plugin.command.constants
 * @author Seth Hollingsead
 * @date 2023/04/04
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_cmd from '../../constants/plugin.command.constants.js';

/**
 * @function pluginCommandConstantsValidation
 * @description Initializes the plugin command constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/04/04
 */
export const pluginCommandConstantsValidation = [
  // ********************************
  // dCafCommands commands in order
  // ********************************
  {Name: 'cbuildBrowserActionFunction', Actual: plg_cmd.cbuildBrowserActionFunction, Expected: 'buildBrowserActionFunction'}
];
/**
 * @file plugin.business.constants.validation.js
 * @module plugin.business.constants.validation
 * @description Contains all validations for named plugin business rule constants.
 * @requires module:plugin.business.constants
 * @author Seth Hollingsead
 * @date 2023/04/04
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_biz from '../../constants/plugin.business.constants.js';

/**
 * @function pluginBusinessConstantsValidation
 * @description Initializes the plugin business rules constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/04/04
 */
export const pluginBusinessConstantsValidation = [
  // ********************************
  // selectorConstruction rules in order
  // ********************************
  {Name: 'cmapSelectorMetaDataToBusinessRule', Actual: plg_biz.cmapSelectorMetaDataToBusinessRule, Expected: 'mapSelectorMetaDataToBusinessRule'}
];
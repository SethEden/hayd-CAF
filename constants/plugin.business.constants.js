/**
 * @file plugin.business.constants.js
 * @module plugin.business.constants
 * @description A file to hold all of the plugin business rules constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/04/03
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, num, wrd} = hayConst;

// ********************************
// hayD-CAF rules in order
// ********************************
export const cDcafRule01 = bas.cDc + bas.caf + wrd.cRule + num.c01; // DcafRule01
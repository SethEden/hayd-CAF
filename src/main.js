/**
 * @file main.js
 * @module main
 * @description This is the main initialization for the plugin.
 * It contains the entry point and all public functions for the plugin.
 * @requires module:plugin.constants
 * @requires module:warden
 * @requires module:allPluginConstantsValidationMetadata
 * @requires module:loggers
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/04/03
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from './constants/plugin.constants.js';
import warden from 
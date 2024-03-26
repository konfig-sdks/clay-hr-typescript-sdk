/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SkillsCreateNewSkillRequestSkillTypeModel
 */
export interface SkillsCreateNewSkillRequestSkillTypeModel {
    /**
     * The ID of the user who is creating skill.
     * @type {number}
     * @memberof SkillsCreateNewSkillRequestSkillTypeModel
     */
    'createUserId'?: number;
    /**
     * Description of the skill type.
     * @type {string}
     * @memberof SkillsCreateNewSkillRequestSkillTypeModel
     */
    'skillTypeDesc'?: string;
    /**
     * The ID of the assessment scale.
     * @type {number}
     * @memberof SkillsCreateNewSkillRequestSkillTypeModel
     */
    'skillTypeId': number;
    /**
     * Name of the skill type.
     * @type {string}
     * @memberof SkillsCreateNewSkillRequestSkillTypeModel
     */
    'skillTypeName'?: string;
}


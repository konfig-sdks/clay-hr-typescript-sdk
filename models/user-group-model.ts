/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Timestamp } from './timestamp';

/**
 * 
 * @export
 * @interface UserGroupModel
 */
export interface UserGroupModel {
    /**
     * 
     * @type {string}
     * @memberof UserGroupModel
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserGroupModel
     */
    'cid'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserGroupModel
     */
    'createuserid'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserGroupModel
     */
    'functionid'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserGroupModel
     */
    'membershipGuidance'?: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof UserGroupModel
     */
    'updatets'?: Timestamp;
    /**
     * 
     * @type {number}
     * @memberof UserGroupModel
     */
    'usergroupid'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserGroupModel
     */
    'usergroupname'?: string;
}


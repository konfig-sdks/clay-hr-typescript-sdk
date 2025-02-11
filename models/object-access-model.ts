/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DepartmentModel } from './department-model';
import { LocationModel } from './location-model';
import { Timestamp } from './timestamp';
import { UserGroupModel } from './user-group-model';
import { UserViewModel } from './user-view-model';

/**
 * 
 * @export
 * @interface ObjectAccessModel
 */
export interface ObjectAccessModel {
    /**
     * 
     * @type {string}
     * @memberof ObjectAccessModel
     */
    'accessCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'atchfolderid'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'atchid'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'cfid'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'cid'?: number;
    /**
     * 
     * @type {Timestamp}
     * @memberof ObjectAccessModel
     */
    'createTimestamp'?: Timestamp;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'createUserId'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'departmentId'?: number;
    /**
     * 
     * @type {DepartmentModel}
     * @memberof ObjectAccessModel
     */
    'departmentModel'?: DepartmentModel;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'locationId'?: number;
    /**
     * 
     * @type {LocationModel}
     * @memberof ObjectAccessModel
     */
    'locationModel'?: LocationModel;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'objectAccessId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjectAccessModel
     */
    'obtype'?: string;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'userGroupId'?: number;
    /**
     * 
     * @type {UserGroupModel}
     * @memberof ObjectAccessModel
     */
    'userGroupModel'?: UserGroupModel;
    /**
     * 
     * @type {UserViewModel}
     * @memberof ObjectAccessModel
     */
    'userViewModel'?: UserViewModel;
    /**
     * 
     * @type {number}
     * @memberof ObjectAccessModel
     */
    'userid'?: number;
}


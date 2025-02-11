/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomTableColumnValueModel } from './custom-table-column-value-model';
import { Timestamp } from './timestamp';
import { UserViewModel } from './user-view-model';

/**
 * 
 * @export
 * @interface CustomTableValueModel
 */
export interface CustomTableValueModel {
    /**
     * 
     * @type {number}
     * @memberof CustomTableValueModel
     */
    'candidateId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomTableValueModel
     */
    'cid'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomTableValueModel
     */
    'createUserId'?: number;
    /**
     * 
     * @type {Timestamp}
     * @memberof CustomTableValueModel
     */
    'createts'?: Timestamp;
    /**
     * 
     * @type {Array<CustomTableColumnValueModel>}
     * @memberof CustomTableValueModel
     */
    'ctColumnValueList'?: Array<CustomTableColumnValueModel>;
    /**
     * 
     * @type {number}
     * @memberof CustomTableValueModel
     */
    'ctValueId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomTableValueModel
     */
    'customTableId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomTableValueModel
     */
    'userId'?: number;
    /**
     * 
     * @type {UserViewModel}
     * @memberof CustomTableValueModel
     */
    'userModel'?: UserViewModel;
}


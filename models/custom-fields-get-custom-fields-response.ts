/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsGetCustomFieldsResponseDataInner } from './custom-fields-get-custom-fields-response-data-inner';

/**
 * 
 * @export
 * @interface CustomFieldsGetCustomFieldsResponse
 */
export interface CustomFieldsGetCustomFieldsResponse {
    /**
     * 
     * @type {Array<CustomFieldsGetCustomFieldsResponseDataInner>}
     * @memberof CustomFieldsGetCustomFieldsResponse
     */
    'data'?: Array<CustomFieldsGetCustomFieldsResponseDataInner>;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldsGetCustomFieldsResponse
     */
    'message'?: string;
}


/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CandidatesGetResponseDataInner } from './candidates-get-response-data-inner';

/**
 * 
 * @export
 * @interface CandidatesGetResponse
 */
export interface CandidatesGetResponse {
    /**
     * 
     * @type {Array<CandidatesGetResponseDataInner>}
     * @memberof CandidatesGetResponse
     */
    'data'?: Array<CandidatesGetResponseDataInner>;
    /**
     * 
     * @type {string}
     * @memberof CandidatesGetResponse
     */
    'message'?: string;
}


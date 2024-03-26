/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressModel } from './address-model';

/**
 * 
 * @export
 * @interface ContactModel
 */
export interface ContactModel {
    /**
     * 
     * @type {Array<AddressModel>}
     * @memberof ContactModel
     */
    'addressModelList'?: Array<AddressModel>;
    /**
     * 
     * @type {number}
     * @memberof ContactModel
     */
    'candidateId'?: number;
    /**
     * 
     * @type {number}
     * @memberof ContactModel
     */
    'cid'?: number;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'contactType'?: string;
    /**
     * 
     * @type {number}
     * @memberof ContactModel
     */
    'contactid'?: number;
    /**
     * 
     * @type {number}
     * @memberof ContactModel
     */
    'createuserid'?: number;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'email1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'notes'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'otherRelationToUser'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'phone1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'phone1type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'phone2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'phone2type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'phone3'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'phone3type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'relationToUser'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactModel
     */
    'taxNumber'?: string;
    /**
     * 
     * @type {number}
     * @memberof ContactModel
     */
    'userId'?: number;
}


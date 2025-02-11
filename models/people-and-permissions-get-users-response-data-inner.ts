/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleAndPermissionsGetUsersResponseDataInnerUserReporterList } from './people-and-permissions-get-users-response-data-inner-user-reporter-list';

/**
 * 
 * @export
 * @interface PeopleAndPermissionsGetUsersResponseDataInner
 */
export interface PeopleAndPermissionsGetUsersResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'resourceId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'position'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'assignments'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'allocation'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'endDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'workerType'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'location'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'timeZone'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'notes'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'emailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'im'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'imageName'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'customFieldList'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'department'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'departmentLabel'?: string;
    /**
     * 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'profileName'?: string;
    /**
     * 
     * @type {PeopleAndPermissionsGetUsersResponseDataInnerUserReporterList}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'userReporterList'?: PeopleAndPermissionsGetUsersResponseDataInnerUserReporterList;
    /**
     * The unique identity of the employee. 
     * @type {string}
     * @memberof PeopleAndPermissionsGetUsersResponseDataInner
     */
    'empId'?: string;
}


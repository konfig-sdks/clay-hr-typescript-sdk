/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetGoalResponseAssignedUserModelDepartmentModel } from './goals-get-goal-response-assigned-user-model-department-model';
import { GoalsGetGoalResponseAssignedUserModelLocationModel } from './goals-get-goal-response-assigned-user-model-location-model';
import { GoalsGetGoalResponseAssignedUserModelUserProfileModel } from './goals-get-goal-response-assigned-user-model-user-profile-model';

/**
 * 
 * @export
 * @interface GoalsGetGoalResponseAssignedUserModel
 */
export interface GoalsGetGoalResponseAssignedUserModel {
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'cid'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'empId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'position'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'shortName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'displayFullName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userStartdate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userEnddate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'cellPhone'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userName'?: string;
    /**
     * 
     * @type {GoalsGetGoalResponseAssignedUserModelUserProfileModel}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userProfileModel'?: GoalsGetGoalResponseAssignedUserModelUserProfileModel;
    /**
     * 
     * @type {GoalsGetGoalResponseAssignedUserModelDepartmentModel}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'departmentModel'?: GoalsGetGoalResponseAssignedUserModelDepartmentModel;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'prefixSalutation'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'secondLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'middleName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'namePronunciation'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'familySuffix'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'ptoannual'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'ptobalance'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'im'?: string;
    /**
     * 
     * @type {number}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'createts'?: number;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'timezone'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'practiceId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'imageName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'thumbnail'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'profileId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'allocation'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'countryId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'lastupdateuserid'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'lastupdatets'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'workingDaysSchedule'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userdateFormat'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'hrPortal'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'userDisplayName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'star'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'timecardPeriodPref'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'languagePreference'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'tosVersion'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'guid'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'jobGrade'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'paId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'workingDays'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'hasAccess'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'notifications'?: string;
    /**
     * 
     * @type {GoalsGetGoalResponseAssignedUserModelLocationModel}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'locationModel'?: GoalsGetGoalResponseAssignedUserModelLocationModel;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'isView'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseAssignedUserModel
     */
    'view'?: string;
}


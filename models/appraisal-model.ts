/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AssessmentModel } from './assessment-model';
import { UserModel } from './user-model';
import { UserViewModel } from './user-view-model';

/**
 * 
 * @export
 * @interface AppraisalModel
 */
export interface AppraisalModel {
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'appraisalId'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'appraisalName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'appraisalType'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'candidatePositionId'?: number;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'cid'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'completionDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'createUserId'?: number;
    /**
     * 
     * @type {UserModel}
     * @memberof AppraisalModel
     */
    'createUserModel'?: UserModel;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'createts'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'endDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'finalComment'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'finalValue'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'finalValueStr'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'managerId'?: number;
    /**
     * 
     * @type {UserModel}
     * @memberof AppraisalModel
     */
    'managerUserModel'?: UserModel;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'obtype'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'preFinalComment'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'preFinalValue'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'preFinalValueStr'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'reviewMode'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'saveForLater'?: number;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'scoreTemplateId'?: number;
    /**
     * 
     * @type {AssessmentModel}
     * @memberof AppraisalModel
     */
    'scoreTemplateModel'?: AssessmentModel;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'showFinalValue'?: number;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'showWeightedTotal'?: number;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppraisalModel
     */
    'statusCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'userId'?: number;
    /**
     * 
     * @type {UserModel}
     * @memberof AppraisalModel
     */
    'userModel'?: UserModel;
    /**
     * 
     * @type {UserViewModel}
     * @memberof AppraisalModel
     */
    'userViewModel'?: UserViewModel;
    /**
     * 
     * @type {number}
     * @memberof AppraisalModel
     */
    'workflowId'?: number;
}


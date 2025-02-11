/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalsGetGoalResponseGoalTypeModelAssessmentModelRangeModelListInner } from './goals-get-goal-response-goal-type-model-assessment-model-range-model-list-inner';

/**
 * 
 * @export
 * @interface GoalsGetGoalResponseGoalTypeModelAssessmentModel
 */
export interface GoalsGetGoalResponseGoalTypeModelAssessmentModel {
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'scoretemplateid'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'cid'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'scoreMin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'scoreMax'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'scoreMaxValidation'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'scoringInstructions'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'scoreName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'allowFractional'?: string;
    /**
     * 
     * @type {Array<GoalsGetGoalResponseGoalTypeModelAssessmentModelRangeModelListInner>}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'rangeModelList'?: Array<GoalsGetGoalResponseGoalTypeModelAssessmentModelRangeModelListInner>;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'visualizationType'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalsGetGoalResponseGoalTypeModelAssessmentModel
     */
    'status'?: string;
}


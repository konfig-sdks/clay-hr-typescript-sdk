/* tslint:disable */
/* eslint-disable */
/*
Expense Reports

API Documentation

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PerformanceReviewAssignmentApi - axios parameter creator
 * @export
 */
export const PerformanceReviewAssignmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve Performance Review Assignments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignments: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/appraisal/assignment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "sec0", configuration })
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "userid", keyParamName: "sec1", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/appraisal/assignment',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PerformanceReviewAssignmentApi - functional programming interface
 * @export
 */
export const PerformanceReviewAssignmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PerformanceReviewAssignmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve Performance Review Assignments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssignments(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAssignments(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PerformanceReviewAssignmentApi - factory interface
 * @export
 */
export const PerformanceReviewAssignmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PerformanceReviewAssignmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve Performance Review Assignments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignments(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getAssignments(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PerformanceReviewAssignmentApiGenerated - object-oriented interface
 * @export
 * @class PerformanceReviewAssignmentApiGenerated
 * @extends {BaseAPI}
 */
export class PerformanceReviewAssignmentApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Retrieve Performance Review Assignments
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PerformanceReviewAssignmentApiGenerated
     */
    public getAssignments(options?: AxiosRequestConfig) {
        return PerformanceReviewAssignmentApiFp(this.configuration).getAssignments(options).then((request) => request(this.axios, this.basePath));
    }
}

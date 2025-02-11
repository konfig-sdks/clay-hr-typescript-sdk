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
// @ts-ignore
import { JobProfilesGetJobProfiles401Response } from '../models';
// @ts-ignore
import { JobProfilesGetJobProfilesResponseInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobProfilesApi - axios parameter creator
 * @export
 */
export const JobProfilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve job profiles
         * @param {'OPEN' | 'A' | 'ARCHV'} status Status of the job profile A- Active, OPEN- Open, ARCHV- Archive
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobProfiles: async (status: 'OPEN' | 'A' | 'ARCHV', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'status' is not null or undefined
            assertParamExists('getJobProfiles', 'status', status)
            const localVarPath = `/api/jobprofiles`;
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
            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/jobprofiles',
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
 * JobProfilesApi - functional programming interface
 * @export
 */
export const JobProfilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobProfilesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve job profiles
         * @param {JobProfilesApiGetJobProfilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobProfiles(requestParameters: JobProfilesApiGetJobProfilesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<JobProfilesGetJobProfilesResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobProfiles(requestParameters.status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobProfilesApi - factory interface
 * @export
 */
export const JobProfilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobProfilesApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve job profiles
         * @param {JobProfilesApiGetJobProfilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobProfiles(requestParameters: JobProfilesApiGetJobProfilesRequest, options?: AxiosRequestConfig): AxiosPromise<Array<JobProfilesGetJobProfilesResponseInner>> {
            return localVarFp.getJobProfiles(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getJobProfiles operation in JobProfilesApi.
 * @export
 * @interface JobProfilesApiGetJobProfilesRequest
 */
export type JobProfilesApiGetJobProfilesRequest = {
    
    /**
    * Status of the job profile A- Active, OPEN- Open, ARCHV- Archive
    * @type {'OPEN' | 'A' | 'ARCHV'}
    * @memberof JobProfilesApiGetJobProfiles
    */
    readonly status: 'OPEN' | 'A' | 'ARCHV'
    
}

/**
 * JobProfilesApiGenerated - object-oriented interface
 * @export
 * @class JobProfilesApiGenerated
 * @extends {BaseAPI}
 */
export class JobProfilesApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Retrieve job profiles
     * @param {JobProfilesApiGetJobProfilesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobProfilesApiGenerated
     */
    public getJobProfiles(requestParameters: JobProfilesApiGetJobProfilesRequest, options?: AxiosRequestConfig) {
        return JobProfilesApiFp(this.configuration).getJobProfiles(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

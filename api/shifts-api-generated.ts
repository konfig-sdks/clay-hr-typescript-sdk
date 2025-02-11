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
 * ShiftsApi - axios parameter creator
 * @export
 */
export const ShiftsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Shifts
         * @param {number} [projectId] projectId
         * @param {string} [startDate] startDate
         * @param {string} [endDate] endDate
         * @param {string} [status] status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listShiftsUsingGET: async (projectId?: number, startDate?: string, endDate?: string, status?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/shifts`;
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
            if (projectId !== undefined) {
                localVarQueryParameter['projectId'] = projectId;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

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
                pathTemplate: '/api/shifts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save Shift
         * @param {string} body shiftBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveShift: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('saveShift', 'body', body)
            const localVarPath = `/api/shifts/save`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "sec0", configuration })
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "userid", keyParamName: "sec1", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/shifts/save',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShiftsApi - functional programming interface
 * @export
 */
export const ShiftsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShiftsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Shifts
         * @param {ShiftsApiListShiftsUsingGETRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listShiftsUsingGET(requestParameters: ShiftsApiListShiftsUsingGETRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listShiftsUsingGET(requestParameters.projectId, requestParameters.startDate, requestParameters.endDate, requestParameters.status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Save Shift
         * @param {ShiftsApiSaveShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveShift(requestParameters: ShiftsApiSaveShiftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const body: string = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveShift(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShiftsApi - factory interface
 * @export
 */
export const ShiftsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShiftsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Shifts
         * @param {ShiftsApiListShiftsUsingGETRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listShiftsUsingGET(requestParameters: ShiftsApiListShiftsUsingGETRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listShiftsUsingGET(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save Shift
         * @param {ShiftsApiSaveShiftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveShift(requestParameters: ShiftsApiSaveShiftRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.saveShift(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listShiftsUsingGET operation in ShiftsApi.
 * @export
 * @interface ShiftsApiListShiftsUsingGETRequest
 */
export type ShiftsApiListShiftsUsingGETRequest = {
    
    /**
    * projectId
    * @type {number}
    * @memberof ShiftsApiListShiftsUsingGET
    */
    readonly projectId?: number
    
    /**
    * startDate
    * @type {string}
    * @memberof ShiftsApiListShiftsUsingGET
    */
    readonly startDate?: string
    
    /**
    * endDate
    * @type {string}
    * @memberof ShiftsApiListShiftsUsingGET
    */
    readonly endDate?: string
    
    /**
    * status
    * @type {string}
    * @memberof ShiftsApiListShiftsUsingGET
    */
    readonly status?: string
    
}

/**
 * Request parameters for saveShift operation in ShiftsApi.
 * @export
 * @interface ShiftsApiSaveShiftRequest
 */
export type ShiftsApiSaveShiftRequest = string

/**
 * ShiftsApiGenerated - object-oriented interface
 * @export
 * @class ShiftsApiGenerated
 * @extends {BaseAPI}
 */
export class ShiftsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Shifts
     * @param {ShiftsApiListShiftsUsingGETRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftsApiGenerated
     */
    public listShiftsUsingGET(requestParameters: ShiftsApiListShiftsUsingGETRequest = {}, options?: AxiosRequestConfig) {
        return ShiftsApiFp(this.configuration).listShiftsUsingGET(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save Shift
     * @param {ShiftsApiSaveShiftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShiftsApiGenerated
     */
    public saveShift(requestParameters: ShiftsApiSaveShiftRequest, options?: AxiosRequestConfig) {
        return ShiftsApiFp(this.configuration).saveShift(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

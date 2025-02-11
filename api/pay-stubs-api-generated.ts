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
import { PayStubsGetDetails409Response } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PayStubsApi - axios parameter creator
 * @export
 */
export const PayStubsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve my pay stubs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/paystub`;
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
                pathTemplate: '/paystub',
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
 * PayStubsApi - functional programming interface
 * @export
 */
export const PayStubsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PayStubsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve my pay stubs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PayStubsApi - factory interface
 * @export
 */
export const PayStubsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PayStubsApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve my pay stubs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getDetails(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PayStubsApiGenerated - object-oriented interface
 * @export
 * @class PayStubsApiGenerated
 * @extends {BaseAPI}
 */
export class PayStubsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Retrieve my pay stubs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayStubsApiGenerated
     */
    public getDetails(options?: AxiosRequestConfig) {
        return PayStubsApiFp(this.configuration).getDetails(options).then((request) => request(this.axios, this.basePath));
    }
}

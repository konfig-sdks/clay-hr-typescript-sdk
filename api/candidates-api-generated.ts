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
import { CandidatesExtractPdfResume401Response } from '../models';
// @ts-ignore
import { CandidatesExtractPdfResumeRequest } from '../models';
// @ts-ignore
import { CandidatesExtractPdfResumeResponse } from '../models';
// @ts-ignore
import { CandidatesGet401Response } from '../models';
// @ts-ignore
import { CandidatesGetBasicDetails404Response } from '../models';
// @ts-ignore
import { CandidatesGetBasicDetails409Response } from '../models';
// @ts-ignore
import { CandidatesGetBasicDetailsResponse } from '../models';
// @ts-ignore
import { CandidatesGetCandidateDetailByRecruitid404Response } from '../models';
// @ts-ignore
import { CandidatesGetCandidateDetailByRecruitid409Response } from '../models';
// @ts-ignore
import { CandidatesGetCandidateDetailByRecruitidResponse } from '../models';
// @ts-ignore
import { CandidatesGetResponse } from '../models';
// @ts-ignore
import { CandidatesSubmitNewCandidate401Response } from '../models';
// @ts-ignore
import { CandidatesSubmitNewCandidate409Response } from '../models';
// @ts-ignore
import { CandidatesSubmitNewCandidateResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CandidatesApi - axios parameter creator
 * @export
 */
export const CandidatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a candidate from pdf resume
         * @param {CandidatesExtractPdfResumeRequest} [candidatesExtractPdfResumeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        extractPdfResume: async (candidatesExtractPdfResumeRequest?: CandidatesExtractPdfResumeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/resume`;
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
                requestBody: candidatesExtractPdfResumeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/resume',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(candidatesExtractPdfResumeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve candidates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
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
                pathTemplate: '/',
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
         * @summary Retrieve candidates with basic details
         * @param {number} [page] Page number.
         * @param {number} [pageSize] Number of candidates per page.
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBasicDetails: async (page?: number, pageSize?: number, search?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/list`;
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
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/list',
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
         * @summary Retrieve the candidate detail by recruitid
         * @param {number} recruitid The ID of the recruiter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCandidateDetailByRecruitid: async (recruitid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recruitid' is not null or undefined
            assertParamExists('getCandidateDetailByRecruitid', 'recruitid', recruitid)
            const localVarPath = `/detail/{recruitid}`
                .replace(`{${"recruitid"}}`, encodeURIComponent(String(recruitid !== undefined ? recruitid : `-recruitid-`)));
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
                pathTemplate: '/detail/{recruitid}',
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
         * @summary Create new candidate
         * @param {string} [name] Name of the candidate.
         * @param {string} [email] Email ID of the candidate.
         * @param {'true' | 'false'} [isNewCand] Is this new candidate?
         * @param {number} [phone] Phone number of the candidate.
         * @param {string} [source] The source from which the candidate is being created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitNewCandidate: async (name?: string, email?: string, isNewCand?: 'true' | 'false', phone?: number, source?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
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
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (isNewCand !== undefined) {
                localVarQueryParameter['isNewCand'] = isNewCand;
            }

            if (phone !== undefined) {
                localVarQueryParameter['phone'] = phone;
            }

            if (source !== undefined) {
                localVarQueryParameter['source'] = source;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/',
                httpMethod: 'POST'
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
 * CandidatesApi - functional programming interface
 * @export
 */
export const CandidatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CandidatesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a candidate from pdf resume
         * @param {CandidatesApiExtractPdfResumeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async extractPdfResume(requestParameters: CandidatesApiExtractPdfResumeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CandidatesExtractPdfResumeResponse>> {
            const candidatesExtractPdfResumeRequest: CandidatesExtractPdfResumeRequest = {
                file: requestParameters.file
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.extractPdfResume(candidatesExtractPdfResumeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve candidates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CandidatesGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve candidates with basic details
         * @param {CandidatesApiGetBasicDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBasicDetails(requestParameters: CandidatesApiGetBasicDetailsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CandidatesGetBasicDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBasicDetails(requestParameters.page, requestParameters.pageSize, requestParameters.search, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve the candidate detail by recruitid
         * @param {CandidatesApiGetCandidateDetailByRecruitidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCandidateDetailByRecruitid(requestParameters: CandidatesApiGetCandidateDetailByRecruitidRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CandidatesGetCandidateDetailByRecruitidResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCandidateDetailByRecruitid(requestParameters.recruitid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create new candidate
         * @param {CandidatesApiSubmitNewCandidateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitNewCandidate(requestParameters: CandidatesApiSubmitNewCandidateRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CandidatesSubmitNewCandidateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitNewCandidate(requestParameters.name, requestParameters.email, requestParameters.isNewCand, requestParameters.phone, requestParameters.source, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CandidatesApi - factory interface
 * @export
 */
export const CandidatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CandidatesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a candidate from pdf resume
         * @param {CandidatesApiExtractPdfResumeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        extractPdfResume(requestParameters: CandidatesApiExtractPdfResumeRequest, options?: AxiosRequestConfig): AxiosPromise<CandidatesExtractPdfResumeResponse> {
            return localVarFp.extractPdfResume(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve candidates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(options?: AxiosRequestConfig): AxiosPromise<CandidatesGetResponse> {
            return localVarFp.get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve candidates with basic details
         * @param {CandidatesApiGetBasicDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBasicDetails(requestParameters: CandidatesApiGetBasicDetailsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CandidatesGetBasicDetailsResponse> {
            return localVarFp.getBasicDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve the candidate detail by recruitid
         * @param {CandidatesApiGetCandidateDetailByRecruitidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCandidateDetailByRecruitid(requestParameters: CandidatesApiGetCandidateDetailByRecruitidRequest, options?: AxiosRequestConfig): AxiosPromise<CandidatesGetCandidateDetailByRecruitidResponse> {
            return localVarFp.getCandidateDetailByRecruitid(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create new candidate
         * @param {CandidatesApiSubmitNewCandidateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitNewCandidate(requestParameters: CandidatesApiSubmitNewCandidateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CandidatesSubmitNewCandidateResponse> {
            return localVarFp.submitNewCandidate(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for extractPdfResume operation in CandidatesApi.
 * @export
 * @interface CandidatesApiExtractPdfResumeRequest
 */
export type CandidatesApiExtractPdfResumeRequest = {
    
} & CandidatesExtractPdfResumeRequest

/**
 * Request parameters for getBasicDetails operation in CandidatesApi.
 * @export
 * @interface CandidatesApiGetBasicDetailsRequest
 */
export type CandidatesApiGetBasicDetailsRequest = {
    
    /**
    * Page number.
    * @type {number}
    * @memberof CandidatesApiGetBasicDetails
    */
    readonly page?: number
    
    /**
    * Number of candidates per page.
    * @type {number}
    * @memberof CandidatesApiGetBasicDetails
    */
    readonly pageSize?: number
    
    /**
    * 
    * @type {string}
    * @memberof CandidatesApiGetBasicDetails
    */
    readonly search?: string
    
}

/**
 * Request parameters for getCandidateDetailByRecruitid operation in CandidatesApi.
 * @export
 * @interface CandidatesApiGetCandidateDetailByRecruitidRequest
 */
export type CandidatesApiGetCandidateDetailByRecruitidRequest = {
    
    /**
    * The ID of the recruiter.
    * @type {number}
    * @memberof CandidatesApiGetCandidateDetailByRecruitid
    */
    readonly recruitid: number
    
}

/**
 * Request parameters for submitNewCandidate operation in CandidatesApi.
 * @export
 * @interface CandidatesApiSubmitNewCandidateRequest
 */
export type CandidatesApiSubmitNewCandidateRequest = {
    
    /**
    * Name of the candidate.
    * @type {string}
    * @memberof CandidatesApiSubmitNewCandidate
    */
    readonly name?: string
    
    /**
    * Email ID of the candidate.
    * @type {string}
    * @memberof CandidatesApiSubmitNewCandidate
    */
    readonly email?: string
    
    /**
    * Is this new candidate?
    * @type {'true' | 'false'}
    * @memberof CandidatesApiSubmitNewCandidate
    */
    readonly isNewCand?: 'true' | 'false'
    
    /**
    * Phone number of the candidate.
    * @type {number}
    * @memberof CandidatesApiSubmitNewCandidate
    */
    readonly phone?: number
    
    /**
    * The source from which the candidate is being created.
    * @type {string}
    * @memberof CandidatesApiSubmitNewCandidate
    */
    readonly source?: string
    
}

/**
 * CandidatesApiGenerated - object-oriented interface
 * @export
 * @class CandidatesApiGenerated
 * @extends {BaseAPI}
 */
export class CandidatesApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create a candidate from pdf resume
     * @param {CandidatesApiExtractPdfResumeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandidatesApiGenerated
     */
    public extractPdfResume(requestParameters: CandidatesApiExtractPdfResumeRequest, options?: AxiosRequestConfig) {
        return CandidatesApiFp(this.configuration).extractPdfResume(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve candidates
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandidatesApiGenerated
     */
    public get(options?: AxiosRequestConfig) {
        return CandidatesApiFp(this.configuration).get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve candidates with basic details
     * @param {CandidatesApiGetBasicDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandidatesApiGenerated
     */
    public getBasicDetails(requestParameters: CandidatesApiGetBasicDetailsRequest = {}, options?: AxiosRequestConfig) {
        return CandidatesApiFp(this.configuration).getBasicDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve the candidate detail by recruitid
     * @param {CandidatesApiGetCandidateDetailByRecruitidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandidatesApiGenerated
     */
    public getCandidateDetailByRecruitid(requestParameters: CandidatesApiGetCandidateDetailByRecruitidRequest, options?: AxiosRequestConfig) {
        return CandidatesApiFp(this.configuration).getCandidateDetailByRecruitid(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create new candidate
     * @param {CandidatesApiSubmitNewCandidateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CandidatesApiGenerated
     */
    public submitNewCandidate(requestParameters: CandidatesApiSubmitNewCandidateRequest = {}, options?: AxiosRequestConfig) {
        return CandidatesApiFp(this.configuration).submitNewCandidate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

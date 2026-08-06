import localVarRequest from 'request';

export * from './accessTokenCreateRequest';
export * from './accessTokenCreateResponse';
export * from './ackResponse';
export * from './attachment';
export * from './corpus';
export * from './corpusCreateRequest';
export * from './corpusCreateResponse';
export * from './corpusItemResponse';
export * from './corpusListResponse';
export * from './corpusUpdateRequest';
export * from './corpusUpdateResponse';
export * from './document';
export * from './documentDownloadUrl';
export * from './documentInit';
export * from './documentInitRequest';
export * from './documentListResponse';
export * from './documentPreviewUrl';
export * from './documentPreviewUrls';
export * from './documentStatus';
export * from './documentUpdateRequest';
export * from './modelError';
export * from './modelListResponse';
export * from './post';
export * from './postAttachmentResponse';
export * from './postItemResponse';
export * from './postListResponse';
export * from './session';
export * from './sessionCreateRequest';
export * from './sessionCreateResponse';
export * from './sessionListResponse';
export * from './sessionUpdateRequest';
export * from './usage';
export * from './usageCount';
export * from './usageTokens';
export * from './whoAmI';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessTokenCreateRequest } from './accessTokenCreateRequest';
import { AccessTokenCreateResponse } from './accessTokenCreateResponse';
import { AckResponse } from './ackResponse';
import { Attachment } from './attachment';
import { Corpus } from './corpus';
import { CorpusCreateRequest } from './corpusCreateRequest';
import { CorpusCreateResponse } from './corpusCreateResponse';
import { CorpusItemResponse } from './corpusItemResponse';
import { CorpusListResponse } from './corpusListResponse';
import { CorpusUpdateRequest } from './corpusUpdateRequest';
import { CorpusUpdateResponse } from './corpusUpdateResponse';
import { Document } from './document';
import { DocumentDownloadUrl } from './documentDownloadUrl';
import { DocumentInit } from './documentInit';
import { DocumentInitRequest } from './documentInitRequest';
import { DocumentListResponse } from './documentListResponse';
import { DocumentPreviewUrl } from './documentPreviewUrl';
import { DocumentPreviewUrls } from './documentPreviewUrls';
import { DocumentStatus } from './documentStatus';
import { DocumentUpdateRequest } from './documentUpdateRequest';
import { ModelError } from './modelError';
import { ModelListResponse } from './modelListResponse';
import { Post } from './post';
import { PostAttachmentResponse } from './postAttachmentResponse';
import { PostItemResponse } from './postItemResponse';
import { PostListResponse } from './postListResponse';
import { Session } from './session';
import { SessionCreateRequest } from './sessionCreateRequest';
import { SessionCreateResponse } from './sessionCreateResponse';
import { SessionListResponse } from './sessionListResponse';
import { SessionUpdateRequest } from './sessionUpdateRequest';
import { Usage } from './usage';
import { UsageCount } from './usageCount';
import { UsageTokens } from './usageTokens';
import { WhoAmI } from './whoAmI';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Document.StatusEnum": Document.StatusEnum,
        "DocumentPreviewUrl.SizeEnum": DocumentPreviewUrl.SizeEnum,
        "DocumentStatus.StatusEnum": DocumentStatus.StatusEnum,
        "Post.OwnerEnum": Post.OwnerEnum,
        "Usage.TimeframeEnum": Usage.TimeframeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccessTokenCreateRequest": AccessTokenCreateRequest,
    "AccessTokenCreateResponse": AccessTokenCreateResponse,
    "AckResponse": AckResponse,
    "Attachment": Attachment,
    "Corpus": Corpus,
    "CorpusCreateRequest": CorpusCreateRequest,
    "CorpusCreateResponse": CorpusCreateResponse,
    "CorpusItemResponse": CorpusItemResponse,
    "CorpusListResponse": CorpusListResponse,
    "CorpusUpdateRequest": CorpusUpdateRequest,
    "CorpusUpdateResponse": CorpusUpdateResponse,
    "Document": Document,
    "DocumentDownloadUrl": DocumentDownloadUrl,
    "DocumentInit": DocumentInit,
    "DocumentInitRequest": DocumentInitRequest,
    "DocumentListResponse": DocumentListResponse,
    "DocumentPreviewUrl": DocumentPreviewUrl,
    "DocumentPreviewUrls": DocumentPreviewUrls,
    "DocumentStatus": DocumentStatus,
    "DocumentUpdateRequest": DocumentUpdateRequest,
    "ModelError": ModelError,
    "ModelListResponse": ModelListResponse,
    "Post": Post,
    "PostAttachmentResponse": PostAttachmentResponse,
    "PostItemResponse": PostItemResponse,
    "PostListResponse": PostListResponse,
    "Session": Session,
    "SessionCreateRequest": SessionCreateRequest,
    "SessionCreateResponse": SessionCreateResponse,
    "SessionListResponse": SessionListResponse,
    "SessionUpdateRequest": SessionUpdateRequest,
    "Usage": Usage,
    "UsageCount": UsageCount,
    "UsageTokens": UsageTokens,
    "WhoAmI": WhoAmI,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

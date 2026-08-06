export * from './authApi';
import { AuthApi } from './authApi';
export * from './configurationApi';
import { ConfigurationApi } from './configurationApi';
export * from './corpusApi';
import { CorpusApi } from './corpusApi';
export * from './documentApi';
import { DocumentApi } from './documentApi';
export * from './postApi';
import { PostApi } from './postApi';
export * from './sessionApi';
import { SessionApi } from './sessionApi';
export * from './usageApi';
import { UsageApi } from './usageApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthApi, ConfigurationApi, CorpusApi, DocumentApi, PostApi, SessionApi, UsageApi];

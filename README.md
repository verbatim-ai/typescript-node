# Verbatim AI Typescript Node APi Client

Typescript Node APi Client for Backend API of the **Verbatim AI** Retrieval-Augmented-Generation (RAG) platform.

## Concepts

- **Corpus** — a knowledge base. Holds documents, sessions, and is bound to an embedding model and a summary LLM.
- **Document** — a file ingested into a corpus (PDF, DOCX, HTML…).
- **Session** — a conversation thread bound to one or more corpora.
- **Post** — a single user query or system answer inside a session. Answers reference attachments (document chunks used as context).

## Authentication

Two authentication methods are accepted on endpoints:

| Method | Header | Allowed HTTP methods | Use case |
|--------|--------|----------------------|----------|
| **JWT Bearer** | `Authorization: Bearer <jwt>` | All | Server-to-server calls with your RSA-signed JWT |
| **Access Token** | `X-Access-Token: <token>` | **Defined by the scope of the token** | Short-lived tokens issued by `POST /v1/access-token/` |

## Conventions

- **Pagination** — list endpoints accept `pageSize` (default `25`) and `pageIndex` (default `0`).
- **IDs** — all resource identifiers are UUIDv4 strings.
- **Timestamps** — ISO-8601 (`2026-04-23T04:06:51Z`).
- **Errors** — non-2xx responses return a JSON body matching the `Error` schema.


## Requirements.

Node 

## Installation & Usage

```shell
npm install
npm run build
````


## Documentation for API Endpoints

All URIs are relative to *https://api.verbatim-ai.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**create2**](docs/AuthApi.md#create2) | **POST** /v1/auth/access-token | Create an access token
*AuthApi* | [**revoke**](docs/AuthApi.md#revoke) | **DELETE** /v1/auth/access-token/{token} | Revoke an access token
*AuthApi* | [**whoami**](docs/AuthApi.md#whoami) | **GET** /v1/auth/whoami | Who am I
*ConfigurationApi* | [**list4**](docs/ConfigurationApi.md#list4) | **GET** /v1/config/model | List supported LLM models
*CorpusApi* | [**create1**](docs/CorpusApi.md#create1) | **POST** /v1/corpus/ | Create a corpus
*CorpusApi* | [**delete2**](docs/CorpusApi.md#delete2) | **DELETE** /v1/corpus/{corpusId} | Delete a corpus
*CorpusApi* | [**get2**](docs/CorpusApi.md#get2) | **GET** /v1/corpus/{corpusId} | Get a corpus
*CorpusApi* | [**list**](docs/CorpusApi.md#list) | **GET** /v1/corpus/ | List corpora
*CorpusApi* | [**update2**](docs/CorpusApi.md#update2) | **PATCH** /v1/corpus/{corpusId} | Update a corpus
*DocumentApi* | [**commit_upload**](docs/DocumentApi.md#commit_upload) | **POST** /v1/doc/{id}/commit | Commit a previously initialized upload
*DocumentApi* | [**delete1**](docs/DocumentApi.md#delete1) | **DELETE** /v1/doc/{id} | Delete a document
*DocumentApi* | [**download_url1**](docs/DocumentApi.md#download_url1) | **GET** /v1/doc/{id}/download-url | Get a presigned download URL
*DocumentApi* | [**get1**](docs/DocumentApi.md#get1) | **GET** /v1/doc/{id} | Get a document
*DocumentApi* | [**init_upload**](docs/DocumentApi.md#init_upload) | **POST** /v1/doc/init | Initialize a direct-to-storage upload
*DocumentApi* | [**list3**](docs/DocumentApi.md#list3) | **GET** /v1/doc/ | List documents
*DocumentApi* | [**list_supported_documents**](docs/DocumentApi.md#list_supported_documents) | **GET** /v1/doc/accept | List accepted content types
*DocumentApi* | [**preview_urls1**](docs/DocumentApi.md#preview_urls1) | **GET** /v1/doc/{id}/preview-urls | Get presigned preview URLs
*DocumentApi* | [**reinit_upload**](docs/DocumentApi.md#reinit_upload) | **PUT** /v1/doc/{id}/init | Re-initialize a document for a new upload
*DocumentApi* | [**status**](docs/DocumentApi.md#status) | **GET** /v1/doc/{id}/status | Get a document&#39;s status
*DocumentApi* | [**summary**](docs/DocumentApi.md#summary) | **GET** /v1/doc/{id}/summary | Get a document summary
*DocumentApi* | [**update1**](docs/DocumentApi.md#update1) | **PATCH** /v1/doc/{id} | Update a document
*PostApi* | [**attachment**](docs/PostApi.md#attachment) | **GET** /v1/post/attachment/{postId} | Attachments from a post
*PostApi* | [**delete3**](docs/PostApi.md#delete3) | **DELETE** /v1/post/{postId} | Delete a post
*PostApi* | [**download_url**](docs/PostApi.md#download_url) | **GET** /v1/post/attachment/{docId}/download-url | Get a presigned download URL
*PostApi* | [**get3**](docs/PostApi.md#get3) | **GET** /v1/post/{postId} | Get a post
*PostApi* | [**list2**](docs/PostApi.md#list2) | **GET** /v1/post/ | List posts
*PostApi* | [**preview_urls**](docs/PostApi.md#preview_urls) | **GET** /v1/post/attachment/{docId}/preview-urls | Get presigned preview URLs
*PostApi* | [**query**](docs/PostApi.md#query) | **GET** /v1/post/q | Send a query
*SessionApi* | [**create**](docs/SessionApi.md#create) | **POST** /v1/session/ | Create a session
*SessionApi* | [**delete**](docs/SessionApi.md#delete) | **DELETE** /v1/session/{sessionId} | Delete a session
*SessionApi* | [**get**](docs/SessionApi.md#get) | **GET** /v1/session/{sessionId} | Get a session
*SessionApi* | [**list1**](docs/SessionApi.md#list1) | **GET** /v1/session/byCorpus | List sessions attached to a corpus
*SessionApi* | [**list_by_metadata**](docs/SessionApi.md#list_by_metadata) | **GET** /v1/session/byMetadata | List sessions matching a metadata fragment
*SessionApi* | [**list_by_organization**](docs/SessionApi.md#list_by_organization) | **GET** /v1/session/byOrganization | List every session in the caller&#39;s organization
*SessionApi* | [**list_by_user**](docs/SessionApi.md#list_by_user) | **GET** /v1/session/byUser | List sessions owned by a user
*SessionApi* | [**update**](docs/SessionApi.md#update) | **PATCH** /v1/session/{sessionId} | Update a session
*UsageApi* | [**usage**](docs/UsageApi.md#usage) | **GET** /v1/usage/all | Organization usage
*UsageApi* | [**usage_by_corpus**](docs/UsageApi.md#usage_by_corpus) | **GET** /v1/usage/corpus/{corpusId} | Corpus usage
*UsageApi* | [**usage_by_user**](docs/UsageApi.md#usage_by_user) | **GET** /v1/usage/user/{userId} | User usage


## Documentation For Models

- [AccessTokenCreateRequest](docs/AccessTokenCreateRequest.md)
- [AccessTokenCreateResponse](docs/AccessTokenCreateResponse.md)
- [AckResponse](docs/AckResponse.md)
- [Attachment](docs/Attachment.md)
- [Corpus](docs/Corpus.md)
- [CorpusCreateRequest](docs/CorpusCreateRequest.md)
- [CorpusCreateResponse](docs/CorpusCreateResponse.md)
- [CorpusItemResponse](docs/CorpusItemResponse.md)
- [CorpusListResponse](docs/CorpusListResponse.md)
- [CorpusUpdateRequest](docs/CorpusUpdateRequest.md)
- [CorpusUpdateResponse](docs/CorpusUpdateResponse.md)
- [Document](docs/Document.md)
- [DocumentDownloadUrl](docs/DocumentDownloadUrl.md)
- [DocumentInit](docs/DocumentInit.md)
- [DocumentInitRequest](docs/DocumentInitRequest.md)
- [DocumentListResponse](docs/DocumentListResponse.md)
- [DocumentPreviewUrl](docs/DocumentPreviewUrl.md)
- [DocumentPreviewUrls](docs/DocumentPreviewUrls.md)
- [DocumentStatus](docs/DocumentStatus.md)
- [DocumentUpdateRequest](docs/DocumentUpdateRequest.md)
- [Error](docs/Error.md)
- [ModelListResponse](docs/ModelListResponse.md)
- [Post](docs/Post.md)
- [PostAttachmentResponse](docs/PostAttachmentResponse.md)
- [PostItemResponse](docs/PostItemResponse.md)
- [PostListResponse](docs/PostListResponse.md)
- [Session](docs/Session.md)
- [SessionCreateRequest](docs/SessionCreateRequest.md)
- [SessionCreateResponse](docs/SessionCreateResponse.md)
- [SessionListResponse](docs/SessionListResponse.md)
- [SessionUpdateRequest](docs/SessionUpdateRequest.md)
- [Usage](docs/Usage.md)
- [UsageCount](docs/UsageCount.md)
- [UsageTokens](docs/UsageTokens.md)
- [WhoAmI](docs/WhoAmI.md)


## Documentation For Authorization
Authentication schemes defined for the API:
### JWT

- **Type**: Bearer authentication (JWT)

<a id="AccessToken"></a>
### AccessToken

- **Type**: API key
- **API key parameter name**: X-Access-Token
- **Location**: HTTP header


## Author

contact@verbatim-ai.com





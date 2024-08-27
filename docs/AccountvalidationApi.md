# SendVerifyApi.AccountvalidationApi

All URIs are relative to *https://api-stag.sendverify.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validationRouterCount**](AccountvalidationApi.md#validationRouterCount) | **GET** /account/validation/count | 
[**validationRouterDeductCredits**](AccountvalidationApi.md#validationRouterDeductCredits) | **POST** /account/validation/deduct | 
[**validationRouterGetAll**](AccountvalidationApi.md#validationRouterGetAll) | **GET** /account/validation/ | 
[**validationRouterValidateEmailBulk**](AccountvalidationApi.md#validationRouterValidateEmailBulk) | **POST** /account/validation/bulk | 
[**validationRouterValidateEmailList**](AccountvalidationApi.md#validationRouterValidateEmailList) | **POST** /account/validation/ | 
[**validationRouterValidateListEmailBulk**](AccountvalidationApi.md#validationRouterValidateListEmailBulk) | **POST** /account/validation/list/bulk | 


<a name="validationRouterCount"></a>
# **validationRouterCount**
> ModelsCountStat validationRouterCount(xAccountApiKey)



Count Total Validations <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterCount(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterDeductCredits"></a>
# **validationRouterDeductCredits**
> validationRouterDeductCredits(xSendPostSubAccountApiKey, body)



Deduct Credits <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountvalidationApi();

var xSendPostSubAccountApiKey = "xSendPostSubAccountApiKey_example"; // String | Account API Key

var body = new SendVerifyApi.ModelsCreditsInfo(); // ModelsCreditsInfo | Used Credits Info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.validationRouterDeductCredits(xSendPostSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSendPostSubAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsCreditsInfo**](ModelsCreditsInfo.md)| Used Credits Info | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterGetAll"></a>
# **validationRouterGetAll**
> [ModelsValidationJob] validationRouterGetAll(xAccountApiKey, opts)



Get all validation <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsValidationJob]**](ModelsValidationJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterValidateEmailBulk"></a>
# **validationRouterValidateEmailBulk**
> ModelsBulkResponse validationRouterValidateEmailBulk(fileinput, xAccountApiKey)



Validate Emails In File Asynchronously

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountvalidationApi();

var fileinput = "/path/to/file.txt"; // File | CSV whose emails need to be validated

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterValidateEmailBulk(fileinput, xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileinput** | **File**| CSV whose emails need to be validated | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="validationRouterValidateEmailList"></a>
# **validationRouterValidateEmailList**
> ModelsValidatedEmailList validationRouterValidateEmailList(xAccountApiKey, body)



Validate Email List Synchronously <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendVerifyApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterValidateEmailList(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The email list to be sent for being validated | 

### Return type

[**ModelsValidatedEmailList**](ModelsValidatedEmailList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterValidateListEmailBulk"></a>
# **validationRouterValidateListEmailBulk**
> ModelsBulkResponse validationRouterValidateListEmailBulk(xAccountApiKey, body)



Validate Emails In File Asynchronously <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendVerifyApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterValidateListEmailBulk(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The email list to be sent for being validated | 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


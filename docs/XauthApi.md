# SendVerifyApi.XauthApi

All URIs are relative to *https://api.sendverify.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**xAuthRouterAccedptSendpostValidationWebhookResult**](XauthApi.md#xAuthRouterAccedptSendpostValidationWebhookResult) | **POST** /xauth/sendpost/webhook/{sendpostApiKey} | 
[**xAuthRouterCreateAccountViaAPI**](XauthApi.md#xAuthRouterCreateAccountViaAPI) | **POST** /xauth/create | 


<a name="xAuthRouterAccedptSendpostValidationWebhookResult"></a>
# **xAuthRouterAccedptSendpostValidationWebhookResult**
> ModelsAccount xAuthRouterAccedptSendpostValidationWebhookResult(sendpostApiKey, body)



Accedpt Sendpost validation webhook result <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.XauthApi();

var sendpostApiKey = 789; // Number | The sendpost subaccount api key of related sendverify account

var body = new SendVerifyApi.ModelsEAccount(); // ModelsEAccount | The Account content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.xAuthRouterAccedptSendpostValidationWebhookResult(sendpostApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendpostApiKey** | **Number**| The sendpost subaccount api key of related sendverify account | 
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="xAuthRouterCreateAccountViaAPI"></a>
# **xAuthRouterCreateAccountViaAPI**
> ModelsAccount xAuthRouterCreateAccountViaAPI(body, xMasterAccountApiKey)



Create Account, sub-account and member <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.XauthApi();

var body = new SendVerifyApi.ModelsEAccount(); // ModelsEAccount | The Account content

var xMasterAccountApiKey = "xMasterAccountApiKey_example"; // String | Master Account Api Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.xAuthRouterCreateAccountViaAPI(body, xMasterAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 
 **xMasterAccountApiKey** | **String**| Master Account Api Key | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


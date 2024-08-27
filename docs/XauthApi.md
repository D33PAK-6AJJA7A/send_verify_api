# SendVerifyApi.XauthApi

All URIs are relative to *http://127.0.0.1:8083/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**xAuthRouterCreateAccountViaAPI**](XauthApi.md#xAuthRouterCreateAccountViaAPI) | **POST** /xauth/create | 


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


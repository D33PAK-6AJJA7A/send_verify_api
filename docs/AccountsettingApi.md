# SendVerifyApi.AccountsettingApi

All URIs are relative to *http://127.0.0.1:8083/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountSettingRouterGetAccount**](AccountsettingApi.md#accountSettingRouterGetAccount) | **GET** /account/setting/ | 


<a name="accountSettingRouterGetAccount"></a>
# **accountSettingRouterGetAccount**
> ModelsAccount accountSettingRouterGetAccount(xAccountApiKey)



get latest account details <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountsettingApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountSettingRouterGetAccount(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


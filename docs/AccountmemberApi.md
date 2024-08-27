# SendVerifyApi.AccountmemberApi

All URIs are relative to *https://api-stag.sendverify.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memberRouterDelete**](AccountmemberApi.md#memberRouterDelete) | **DELETE** /account/member/{memberId} | 
[**memberRouterGet**](AccountmemberApi.md#memberRouterGet) | **GET** /account/member/{memberId} | 
[**memberRouterGetAll**](AccountmemberApi.md#memberRouterGetAll) | **GET** /account/member/ | 


<a name="memberRouterDelete"></a>
# **memberRouterDelete**
> ModelsDeleteResponse memberRouterDelete(xAccountApiKey, memberId)



Delete Member <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | The MemberId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterDelete(xAccountApiKey, memberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| The MemberId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="memberRouterGet"></a>
# **memberRouterGet**
> ModelsMember memberRouterGet(xAccountApiKey, memberId)



Find Member by MemberId <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | the MemberId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterGet(xAccountApiKey, memberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| the MemberId you want to get | 

### Return type

[**ModelsMember**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="memberRouterGetAll"></a>
# **memberRouterGetAll**
> [ModelsMember] memberRouterGetAll(xAccountApiKey)



Get All Members <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterGetAll(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsMember]**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


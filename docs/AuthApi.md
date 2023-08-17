# SendVerifyApi.AuthApi

All URIs are relative to *https://api-stag.sendverify.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authRouterCreate**](AuthApi.md#authRouterCreate) | **POST** /auth/create | 
[**authRouterGetAuthInfo**](AuthApi.md#authRouterGetAuthInfo) | **POST** /auth/info | 
[**authRouterUpdateAuthInfo**](AuthApi.md#authRouterUpdateAuthInfo) | **PUT** /auth/info | 


<a name="authRouterCreate"></a>
# **authRouterCreate**
> ModelsAccount authRouterCreate(body, xToken)



Create Account, sub-account and member <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AuthApi();

var body = new SendVerifyApi.ModelsEAccount(); // ModelsEAccount | The Account content

var xToken = "xToken_example"; // String | Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRouterCreate(body, xToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRouterGetAuthInfo"></a>
# **authRouterGetAuthInfo**
> ModelsAuthInfo authRouterGetAuthInfo(body, xToken)



Get Auth Info Details <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AuthApi();

var body = new SendVerifyApi.ModelsEAccount(); // ModelsEAccount | The Account content

var xToken = "xToken_example"; // String | Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRouterGetAuthInfo(body, xToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRouterUpdateAuthInfo"></a>
# **authRouterUpdateAuthInfo**
> ModelsAuthInfo authRouterUpdateAuthInfo(body, xToken)



Updates member and accounts related for email verification and on boarding answers <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AuthApi();

var body = new SendVerifyApi.ModelsEAccountMember(); // ModelsEAccountMember | The Account Member content

var xToken = "xToken_example"; // String | Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRouterUpdateAuthInfo(body, xToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsEAccountMember**](ModelsEAccountMember.md)| The Account Member content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


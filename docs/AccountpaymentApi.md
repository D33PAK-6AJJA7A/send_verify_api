# SendVerifyApi.AccountpaymentApi

All URIs are relative to *http://127.0.0.1:8083/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentRouterApplyCouponToStripeCustomer**](AccountpaymentApi.md#paymentRouterApplyCouponToStripeCustomer) | **POST** /account/payment/customer/coupon | 
[**paymentRouterCreateCustomerPortal**](AccountpaymentApi.md#paymentRouterCreateCustomerPortal) | **POST** /account/payment/portal | 
[**paymentRouterCreatePaymentInvoice**](AccountpaymentApi.md#paymentRouterCreatePaymentInvoice) | **POST** /account/payment/invoice | 
[**paymentRouterGetAllCountries**](AccountpaymentApi.md#paymentRouterGetAllCountries) | **GET** /account/payment/pricing/countries | 
[**paymentRouterGetCouponCodes**](AccountpaymentApi.md#paymentRouterGetCouponCodes) | **GET** /account/payment/coupons | 
[**paymentRouterGetPricingPlans**](AccountpaymentApi.md#paymentRouterGetPricingPlans) | **GET** /account/payment/pricing | 
[**paymentRouterGetTaxRateByAddress**](AccountpaymentApi.md#paymentRouterGetTaxRateByAddress) | **POST** /account/payment/tax/address | 
[**paymentRouterGetTaxRateByIP**](AccountpaymentApi.md#paymentRouterGetTaxRateByIP) | **GET** /account/payment/tax/ip | 
[**paymentRouterHandlePaymentWebhook**](AccountpaymentApi.md#paymentRouterHandlePaymentWebhook) | **POST** /account/payment/webhook | 


<a name="paymentRouterApplyCouponToStripeCustomer"></a>
# **paymentRouterApplyCouponToStripeCustomer**
> paymentRouterApplyCouponToStripeCustomer(xAccountApiKey, body)



Apply Coupon to Stripe Customer <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendVerifyApi.ModelsCouponOptions(); // ModelsCouponOptions | Coupon Code Options


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentRouterApplyCouponToStripeCustomer(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsCouponOptions**](ModelsCouponOptions.md)| Coupon Code Options | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterCreateCustomerPortal"></a>
# **paymentRouterCreateCustomerPortal**
> ModelsBillingPortalSession paymentRouterCreateCustomerPortal(xAccountApiKey)



Create Customer Portal for account <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterCreateCustomerPortal(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsBillingPortalSession**](ModelsBillingPortalSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterCreatePaymentInvoice"></a>
# **paymentRouterCreatePaymentInvoice**
> ModelsPaymentStatus paymentRouterCreatePaymentInvoice(xAccountApiKey, body)



Create Payment Invoice for Stripe <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendVerifyApi.ModelsPaymentOptions(); // ModelsPaymentOptions | PaymentOptions content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterCreatePaymentInvoice(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsPaymentOptions**](ModelsPaymentOptions.md)| PaymentOptions content | 

### Return type

[**ModelsPaymentStatus**](ModelsPaymentStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterGetAllCountries"></a>
# **paymentRouterGetAllCountries**
> [ModelsCountry] paymentRouterGetAllCountries()



Responds back with slice of all countries <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterGetAllCountries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelsCountry]**](ModelsCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterGetCouponCodes"></a>
# **paymentRouterGetCouponCodes**
> [ModelsCoupon] paymentRouterGetCouponCodes()



Responds back with slice of coupon codes <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterGetCouponCodes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelsCoupon]**](ModelsCoupon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterGetPricingPlans"></a>
# **paymentRouterGetPricingPlans**
> [ModelsPricing] paymentRouterGetPricingPlans()



Responds back with slice of pricing plans <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterGetPricingPlans(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelsPricing]**](ModelsPricing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterGetTaxRateByAddress"></a>
# **paymentRouterGetTaxRateByAddress**
> ModelsTaxDetails paymentRouterGetTaxRateByAddress(body)



Responds back with tax details <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var body = new SendVerifyApi.ModelsPaymentAddress(); // ModelsPaymentAddress | Address parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterGetTaxRateByAddress(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsPaymentAddress**](ModelsPaymentAddress.md)| Address parameters | 

### Return type

[**ModelsTaxDetails**](ModelsTaxDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterGetTaxRateByIP"></a>
# **paymentRouterGetTaxRateByIP**
> ModelsTaxDetails paymentRouterGetTaxRateByIP()



Responds back with tax details <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterGetTaxRateByIP(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModelsTaxDetails**](ModelsTaxDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterHandlePaymentWebhook"></a>
# **paymentRouterHandlePaymentWebhook**
> paymentRouterHandlePaymentWebhook()



Handle Payment Related Webhooks <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.AccountpaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentRouterHandlePaymentWebhook(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


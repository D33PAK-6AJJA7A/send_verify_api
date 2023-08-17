# SendVerifyApi.ClusterApi

All URIs are relative to *https://api-stag.sendverify.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfEveryNodeInCluster) | **DELETE** /cluster/cache | 
[**clusterRouterGetItemFromCacheOfSpecificNodeInCluster**](ClusterApi.md#clusterRouterGetItemFromCacheOfSpecificNodeInCluster) | **DELETE** /cluster/cache/node | 


<a name="clusterRouterDeleteItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**
> clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts)



Delete item from cache of every node in cluster <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterGetItemFromCacheOfSpecificNodeInCluster"></a>
# **clusterRouterGetItemFromCacheOfSpecificNodeInCluster**
> clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts)



Get item from cache of specific node in cluster <br>

### Example
```javascript
var SendVerifyApi = require('send_verify_api');

var apiInstance = new SendVerifyApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


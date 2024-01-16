

# BackendAPI
Marketplace for `boo` application 

## Introduction
This API facilitates the management of assets, enabling operations such as listing, creating, updating, and deleting asset records.

## Schema Overview
```javascript
const AssetsSchema = new mongoose.Schema({
    name: String,
    value: Number,
    image: String,
    status: String, // [available, sold]
    createdAt: String,
    updatedAt: String,
    paymentCode: String,
    transactionHash: String,
});
```

## API Endpoints
- **GET /api/v1/assets**: List all assets.
- **POST /api/v1/assets**: Create a new asset.
- **DELETE /api/v1/assets/:id**: Delete an asset by ID.
- **PUT /api/v1/assets/:id**: Update an asset by ID.

## Using Postman
### List Assets
**Method**: GET  
**URL**: `http://localhost:3000/api/v1/assets`

### Create Asset
**Method**: POST  
**URL**: `http://localhost:3000/api/v1/assets`  
**Body**:
```json
{
  "name": "Asset Name",
  "value": 100,
  "image": "image_url",
  "status": "available",
  "createdAt": "2021-01-01",
  "updatedAt": "2021-01-01",
  "paymentCode": "12345",
  "transactionHash": "abcd"
}
```

### Delete Asset
**Method**: DELETE  
**URL**: `http://localhost:3000/api/v1/assets/{id}`

### Update Asset
**Method**: PUT  
**URL**: `http://localhost:3000/api/v1/assets/{id}`  
**Body**:
```json
{
  "name": "Updated Asset Name",
  "value": 150,
  ...
}
```

## Using HTTPie
### List Assets
```bash
http GET http://localhost:3000/api/v1/assets
```

### Create Asset
```bash
http POST http://localhost:3000/api/v1/assets name='Asset Name' value:=100 ...
```

### Delete Asset
```bash
http DELETE http://localhost:3000/api/v1/assets/{id}
```

### Update Asset
```bash
http PUT http://localhost:3000/api/v1/assets/{id} name='Updated Asset Name' ...
```

## Response Examples
(Provide JSON examples of responses for each endpoint)

## Error Handling
(Explain common error responses and codes)

## Authentication
(If applicable, detail the method of authentication)

Note: Replace `http://localhost:3000` with your actual server's URL and adjust parameters as necessary for your API.

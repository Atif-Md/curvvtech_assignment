[curvetech_assignment.postman_collection.json](https://github.com/user-attachments/files/21904613/curvetech_assignment.postman_collection.json)
{
	"info": {
		"_postman_id": "d3d0b6bd-308b-43ee-bf6a-f9c023b97eff",
		"name": "curvetech_assignment",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "36422222",
		"_collection_link": "https://aaaaaa-1866.postman.co/workspace/bd36311f-efa1-45c0-88ee-245224b21e60/collection/36422222-d3d0b6bd-308b-43ee-bf6a-f9c023b97eff?action=share&source=collection_link&creator=36422222"
	},
	"item": [
		{
			"name": "user login",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"email\": \"lala@example.com\",\r\n  \"password\": \"mypassword123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all device",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Living Room Light\",\n  \"type\": \"light\",\n  \"status\": \"active\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/device",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device"
					]
				}
			},
			"response": []
		},
		{
			"name": "register device",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Authorization",
						"value": "Bearer <your_jwt_token>"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Device A\",\n  \"type\": \"sensor\",\n  \"status\": \"active\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/device",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device"
					]
				}
			},
			"response": []
		},
		{
			"name": "update device",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Authorization",
						"value": "Bearer <your_jwt_token>"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"status\": \"inactive\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/device/68a4bcea1829d3fe3c39f5dc",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device",
						"68a4bcea1829d3fe3c39f5dc"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete device",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer <token>"
					}
				],
				"url": {
					"raw": "http://localhost:3000/api/device/68a4bcea1829d3fe3c39f5dc",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device",
						"68a4bcea1829d3fe3c39f5dc"
					]
				}
			},
			"response": []
		},
		{
			"name": "device heartbeat",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer <token>"
					}
				],
				"url": {
					"raw": "http://localhost:3000/api/device/68a4dd1f211ddb79540a30bb/heartbeat",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device",
						"68a4dd1f211ddb79540a30bb",
						"heartbeat"
					]
				}
			},
			"response": []
		},
		{
			"name": "log create",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer <token>"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"event\":\"units_consumed\",\"value\":2.5}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/device/68a4dd1f211ddb79540a30bb/logs",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device",
						"68a4dd1f211ddb79540a30bb",
						"logs"
					]
				}
			},
			"response": []
		},
		{
			"name": "get logs",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer <token>"
					}
				],
				"url": {
					"raw": "http://localhost:3000/api/device/68a4dd1f211ddb79540a30bb/logs?limit=10",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device",
						"68a4dd1f211ddb79540a30bb",
						"logs"
					],
					"query": [
						{
							"key": "limit",
							"value": "10"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Aggregated usage.",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTM4NzM3YzcxMmM2Nzc0YTI0MDZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NjgxOTU0LCJleHAiOjE3NTU2ODU1NTR9.ay11tgUwPVMbbZFjkGH5fEJ0Mm3rShV-wnCS5N3U__o",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer <token>"
					}
				],
				"url": {
					"raw": "http://localhost:3000/api/device/68a4dd1f211ddb79540a30bb/usage?range=24h",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"device",
						"68a4dd1f211ddb79540a30bb",
						"usage"
					],
					"query": [
						{
							"key": "range",
							"value": "24h"
						}
					]
				}
			},
			"response": []
		}
	]
}

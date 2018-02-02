#test-setup

This repo contains a broken server setup you are expected to fix. The server then needs to give the correct responses to the below questions. 

To run the server, invoke
```
$npm install
$npm start
```

Steps to perform:

1. Fork this repo

2. Debug the errors which are causing the server to crash at initialization.

3. Modify the Api endpoint `/hello` to accept an optional query such that
	* if `/hello` is queried, response is `Hello, World`
	* if `/hello?name=harish` is queried, response is `Hello, Harish`

4. Create an api endpoint in `src/api/prodapis/handlers.js` called `/csv2json` which accepts a csv file as an input and then sends a json object as response.
	For eg:
		
        Payload:
		| Name    | Age  | Sex  |
		| :---:   | :-:  | :-: |
		| Harish  | 10   | M 	|
		| Suresh  | 20   | M 	|
		| Chanda  | 30   | F 	|
	
    	Response: 
        [
        	{	
        		"name"	: "Harish",
        		"age"	: "10",
        		"sex"	: "M"
        
        	},
        	{	
        		"name"	: "Suresh",
        		"age"	: "20",
        		"sex"	: "M"
        
        	},
        	{	
        		"name"	: "Chanda",
        		"age"	: "30",
        		"sex"	: "F"
        
        	}
        ]

5. Api endpoint `/loop` processes an array and is supposed to reply the output of function `adder`, when the array is serially processed through it. Function `adder` might seem to be performing an overcomplicated addition, but assume it to be a proxy for any asynchronous operation.

We are currently passing an array `[1,2,3,4,5,6,7,8,9,10]` to the function adder. Calling this api will currently give you:

`Response = 0` 
and on the console : 
```
Trying to add 1
Trying to add 2
Trying to add 3
Trying to add 4
Trying to add 5
Trying to add 6
Trying to add 7
Trying to add 8
Trying to add 9
Trying to add 10
Current sum is 1
Current sum is 2
Current sum is 3
Current sum is 4
Current sum is 5
Current sum is 6
Current sum is 7
Current sum is 8
Current sum is 9
Current sum is 10
```

This is obviously incorrect, and the correct method should be:
`Response = 55`
with console printing:
```
Trying to add 1
Current sum is 1
Trying to add 2
Current sum is 3
Trying to add 3
Current sum is 6
Trying to add 4
Current sum is 10
Trying to add 5
Current sum is 15
Trying to add 6
Current sum is 21
Trying to add 7
Current sum is 28
Trying to add 8
Current sum is 36
Trying to add 9
Current sum is 45
Trying to add 10
Current sum is 55
```

Modify ONLY and only the handler `loop` to get the expected response. Do not make any changes to `function adder`. I am interested in receving both the correct response as well as the correct logging on console (showing perfectly that the operation is happening serially, and not parallely). The actual step of addition needs to be performed using `function adder`, and not bypassing it by any means.

BONUS Question:

Print on console every api call made, along with the response time (in milliseconds) of the API. The log should have the format:
```method=get, path=/loop, responseTimeMs=124, statusCode=200```
Measure response time as the best approximation of the time between server receiving a request and replying to it.


Tip:
1. You are free to use any publicly available npm library
2. This code was tested in `node v8.1.0` and `npm v5.0.3`. Please update node/npm before starting.
3. You may need to remove the node modules folder and reinstall. Perform by:
```
$rm -rf node_modules/
$npm install
```

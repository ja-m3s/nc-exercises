# Instrumentation

When dealing with large scale applications, it can be difficult to keep eyes on all the moving parts and pieces. How do we know when one function is taking longer than usual? How can we tell that some users are having issue with signing up? Thats where instrumentation comes in.

Instrumentation is the process of adding code to your applications that track various metrics such as the amount of times a function is called or how long it takes for something to execute. We can track these metrics using various counters and gauges, then expose them on an endpoint so we can access these metrics from anywhere.

Your task this morning is to add some instrumentation to the Node app given to you in this repo. After you make changes to your JavaScript code, you can run the application with by first installing the packages with `npm install` and then `npm start` to start the server listening. After each change, you will need to restart the server.

1. Install `prom-client` to your repo and require it into the file as `const client = require("prom-client")`.

2. Convert one of your endpoint functions to an async function by adding the keyword `async` before the function declaration like this

`app.get("/interesting-quote", async (req,res)=>.......)`

2. Use console.log to log `await client.register.metrics()` to the console inside the async function.

3. Start your server again and request this endpoint. You will notice in your terminal, that every time you make a request it logs out a couple of blank lines. This is where the metrics you're about to create will be.

4. Try and create a metrics counter within your App using the [`prom-client` docs](https://github.com/siimon/prom-client) to count each time the endpoint is requested. You'll know its worked when you start to see something in the terminal like this

```bash
> server@1.0.0 start
> node app.js

Server is running on port 30000
# HELP quotes_served the amount of quotes served
# TYPE quotes_served counter
quotes_served 1

# HELP quotes_served the amount of quotes served
# TYPE quotes_served counter
quotes_served 2

# HELP quotes_served the amount of quotes served
# TYPE quotes_served counter
quotes_served 3
```

4. Create and implement a new counter to each of your endpoints so you can track the amount of request to each endpoint.

5. Finally lets try and expose these metrics, currently we can only see them in the terminal which doesn't seem all that useful in a production setting.

Set up an endpoint of `/metrics` on the server that will serve back the metrics you are collecting rather than just logging them in the server.

6. Once you're happy with this, build the image and deploy it to your local cluster with 2 replicas and a LoadBalancer service.

If you request the endpoints a couple of times each and then check the metrics page you'll see your custom metrics. Refreshing this page however might give you different numbers for your metrics. This is because currently these metrics only count the requests in each container and the LoadBalancer is sending the requests to different containers each time. Tomorrow, we will look at a tool that will aggregate these messages for us so we can see the metrics from many containers, together.

## Extension

If you manage to get counters set up for each of these functions and serve them to an endpoint, have a look at the other types of metrics and see if you can set up a `Gauge` metric.

### Gauge

1 . Create a `/login` endpoint that increases the gauge by 1 and a `/logout` endpoint that decreases it by 1.

2. Expose a metric that tells you the current amount of users logged in.

## Links

[prom-client docs](https://github.com/siimon/prom-client)

# buildSimHub Demo with Node-Red

This is a demonstration for using [node-red](http://www.nodered.com) to interact with [Build Sim Hub](http://buildsim.io)

A complete overview of the project can be found on [the bimlauncher blog](https://www.bimlauncher.com/new-blog/2018/3/31/buildsimhub-an-agile-environmental-analysis-workflow)

- BuildSimHub is a cloud-based building energy model platform that brings energyplus and openstudio together to offer these platforms as a service.
- Node-red is a tool for wiring IoT devices/ web services via visual programming interface


### Run

Following this process, you will have a running API at http://localhost:8000/api/RunSimulationCustomize_API which is compatible with the [buildSimHub OpenAPI spec](https://raw.githubusercontent.com/weilix88/buildsimhub_python_api/master/bsh_openapi.yaml).

Make sure docker is installed on your machine, then:
```
$ docker run -p 8000:8000 bimlauncher/node-red-buildsimhub
```

Open your favourite browser, then open node-red flow:
```
$ localhost:8000
```
BuildSimHub is a cloud-based building energy model platform that can be used to automate building energy modelling workflows.

It brings energyplus and openstudio together to offer these powerful platforms combined and as a service.

BuildSimHub have began to support an openAPI specification (currently only with two endpoints required for the Demo.)

“openAPI is awesome as I explore it more. Thank you for introduce this tool to me." - Weili @ buildsimhub

The BIM Launcher platform supports openAPI through the node-red-swagger-contrib module which provides a visual programming environment so that users can build custom automation workflows to assess energy modelling performance on models created in BIM authoring platforms. 

The user case for this demo involves a user retrieving Zone Load Information pertaining to thier BIM model. The BuildSimHub API takes a gbXML file which is a file format for storing and sharing building properties between 3D Architectural and Engineering Analysis Software and an epw file which is a file format for weather data file saved in the standard EnergyPlus format to produce Zone Load Information for the building design.

Currently, the Forge data management API does not support conversion from BIM files to gbXML (Not sure if this is a simple process?), so a user must make a gbXML file available to the app. This can be done in a number of ways including hosting on BIM360 platform or similar service so that this app can find that file to process. This demo will support user upload direct through the sample app. The same process applies for the epw file.

How-to-guide for app:
1. Client: User select gbXML
2. Client: User select epw
3. Server: Post job to buildsimhub API.
4. Server: Poll /TrackSimulation_API to get simulation status with tracking string returned from 3. If {has_more: false}, job is complete.
5. Server: Once simulation is completed, call /GetZoneLoadInfo_API with NetSiteEUI request_data field. 
6. Server: Call /getZoneLoadInfo_API to retrieve model's zone load information
7. Client: Display prettified JSON zone load (EUI) information
Done! :)

Demo by @bimlauncher



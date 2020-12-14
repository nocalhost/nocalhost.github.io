### DevMode

DevMode describes the entire development process (start development, test verification and final development). When DevMode starts, development begins, and when DevMode ends, development ends.

#### DevMode start
When DevMode is started for a microservice in the application, Nocalhost will perform the following operations:
* Replace the container of the microservice with the DevContainer specified by the configuration.
* Create a background process to detect changes in the source code and automatically synchronize the source code with DevContainer.
* Forward the port of DevContainer to the local for subsequent debugging.

#### DevMode end
DevSpace resources will be restored to the state when DevMode was turned on, such as:
* DevContainer will restore to the container that was stopped when DevMode was turned on.
* Stop the background process of file synchronization.
* Release the local port forwarded from DevContainer.
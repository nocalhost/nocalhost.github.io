DevContainer

DevContainer is the container carrier for DevMode development and debugging. Its life cycle runs through the entire development and debugging process. It is created when DevMode starts and ends when DeVMode ends. During the life cycle, local source code changes will be automatically synchronized to DevContainer, and can be directly compiled and deployed in the container.

note:
* The docker used by DevContainer is defined in the application directory .nocalhost/config
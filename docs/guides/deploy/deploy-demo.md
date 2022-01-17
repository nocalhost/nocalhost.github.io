import useBaseUrl from '@docusaurus/useBaseUrl';

# Deploy Demo Application

Nocalhost IDE plugin has a built-in demo application called bookinfo. You can quickly install it through the following steps:

1. Select any namespace from the cluster tree
2. Click on the <img src={useBaseUrl('/img/icons/install-app-icon.jpg')} width="20" /> icon to deploy application
3. Select `Deploy Demo` to install the demo application

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/deploy-demo.gif')} />
  <figcaption>Install the quick demo application</figcaption>
</figure>

:::tip Access Demo

Quick demo application comes with port-forward configured. After demo has successfully deployed (check the deployment status from the cluster tree), you can access the demo from your local web browser by visiting [http://127.0.0.1:39080](http://127.0.0.1:39080) 

:::

## Introduction to the bookinfo application

Bookinfo is a typical microservice architecture application, which derives from Istio samples(https://github.com/istio/istio/tree/master/samples/bookinfo). However, we commit some changes to demonstrate nocalhost better. Here are some main changes we have made:

- Simplifying different version of reviews service to one version. Nocalhost does not target on how to manage service traffic or canary deployment.
- Splitting source codes from mono-repo into five independent repositories. In fact, diffrent microservices are developed by diffrent teams with different access rules.
- Switching the framework of reviews service to spring-boot. Everyone loves spring-boot.
- Configuring GitHub Action for every microservice to automatically build Docker images.
- Adding a .nocalhost directory to support development with nocalhost. 

This demo application consists of the following 5 services:

- productpage(Request Entrance): https://github.com/nocalhost/bookinfo-productpage
- reviews: https://github.com/nocalhost/bookinfo-reviews
- details: https://github.com/nocalhost/bookinfo-details
- ratings: https://github.com/nocalhost/bookinfo-ratings
- authors: https://github.com/nocalhost/bookinfo-authors

Every service has its own program language and runtime environment. All of them have been configured to use docker as the container runtime, you can find Dockerfile in their corresponding repositories.

The microservices' structure of bookinfo is shown by the following image: 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/structure-of-bookinfo.png')} />
  <figcaption>Microservices' structure of bookinfo</figcaption>
</figure>
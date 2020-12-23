`Nocalhost` 支持 Major:"1", Minor:"12+" 以上的 k8s 版本，不过我们推荐使用 v1.16+。



因为 1.16+ 可以支持 [服务依赖功能](/References/service-dependency)：

- Ensure that the Kubernetes cluster is at least as new as v1.16 (to use `admissionregistration.k8s.io/v1`), or v1.9 (to use `admissionregistration.k8s.io/v1beta1`).
- Ensure that MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission controllers are enabled. [Here](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#is-there-a-recommended-set-of-admission-controllers-to-use) is a recommended set of admission controllers to enable in general.
- Ensure that the `admissionregistration.k8s.io/v1` or `admissionregistration.k8s.io/v1beta1` API is enabled.

可以看看 k8s 的文档 [adminssion web hooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#prerequisites).
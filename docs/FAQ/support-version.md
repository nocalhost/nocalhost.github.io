`Nocalhost` supports Major:"1", Minor:"12+" versions of kubernetes, but we recommend that you to use v1.16+.



That's because if your want to use [service dependencies](/References/service-dependency) control between services:

- Ensure that the Kubernetes cluster is at least as new as v1.16 (to use `admissionregistration.k8s.io/v1`), or v1.9 (to use `admissionregistration.k8s.io/v1beta1`).
- Ensure that MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission controllers are enabled. [Here](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#is-there-a-recommended-set-of-admission-controllers-to-use) is a recommended set of admission controllers to enable in general.
- Ensure that the `admissionregistration.k8s.io/v1` or `admissionregistration.k8s.io/v1beta1` API is enabled.

see [adminssion web hooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#prerequisites).
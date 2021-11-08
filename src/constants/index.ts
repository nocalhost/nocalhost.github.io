export const IMAGE_OPTIONS = [
  {
    label: "java:11",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/java:11",
  },
  {
    label: "ruby:3.0",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0",
  },
  {
    label: "node:14",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/node:14",
  },
  {
    label: "python:3.9",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/python:3.9",
  },
  {
    label: "golang:latest",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:latest",
  },
  {
    label: "perl:latest",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/perl:latest",
  },
  {
    label: "rust:latest",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/rust:latest",
  },
  {
    label: "php:latest",
    value: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/php:latest",
  },
];
import { MenuItem, Container } from "../types";
export const CONFIG_TYPE: MenuItem[] = [
  { name: "Basic Config", status: "reject", type: "Basic" },
  { name: "File Synchronization", status: "pending", type: "FileSync" },
  { name: "Run And Debug", status: "pending", type: "RunAndDebug" },
  { name: "Volume", status: "pending", type: "Volume" },
  { name: "Resource Limit", status: "pending", type: "ResourceLimit" },
  { name: "Development Variable", status: "pending", type: "DevEnv" },
  { name: "Port Forward", status: "pending", type: "PortForward" },
  {
    name: "Patches",
    status: "pending",
    type: "Patches",
  },
];

export const SYNC_FILE_TYPE = [
  {
    label: "send",
    value: "send",
  },
  {
    label: "sendReceive",
    value: "sendReceive",
  },
];

export const WORKLOAD_TYPE = [
  {
    label: "Deployment",
    value: "deployment",
  },
  { label: "StatefulSet", value: "statefulSet" },
  {
    label: "DaemonSet",
    value: "daemonSet",
  },
  { label: "Job", value: "job" },
  { label: "CronJob", value: "cornJob" },
  { label: "Pods", value: "pods" },
];

export const BASE_URL = "http://127.0.0.1:30125";

export const DEFAULT_CONTAINER: Container = {
  dev: {
    gitUrl: "",
    image: "",
    shell: "bash",
    workDir: "",
    storageClass: "",
    resources: {
      limits: {
        memory: "2048Mi",
        cpu: "2",
      },
      requests: {
        memory: "512Mi",
        cpu: "0.5",
      },
    },
    persistentVolumeDirs: [],
    command: {
      run: [],
      debug: [],
    },
    debug: {},
    hotReload: false,
    sync: {
      type: "send",
      mode: "pattern",
      filePattern: ["."],
      ignoreFilePattern: [".git"],
    },
    env: [],
    portForward: [],
    sidecarImage: "",
  },
};

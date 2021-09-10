export const IMAGE_OPTIONS = [
  {
    label: 'java:11',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/java:11',
  },
  {
    label: 'ruby:3.0',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0',
  },
  {
    label: 'node:14',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/node:14',
  },
  {
    label: 'python:3.9',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/python:3.9',
  },
  {
    label: 'golang:latest',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:latest',
  },
  {
    label: 'perl:latest',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/perl:latest',
  },
  {
    label: 'rust:latest',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/rust:latest',
  },
  {
    label: 'php:latest',
    value: 'nocalhost-docker.pkg.coding.net/nocalhost/dev-images/php:latest',
  },
]
import { MenuItem, Container } from '../types'
export const CONFIG_TYPE: MenuItem[] = [
  { name: 'Basic Config', status: 'reject', type: 'Basic' },
  { name: 'File synchronization', status: 'pending', type: 'FileSync' },
  { name: 'Run && Debug', status: 'pending', type: 'RunAndDebug' },
  { name: 'Volume', status: 'pending', type: 'Volume' },
  { name: 'Resource Limit', status: 'pending', type: 'ResourceLimit' },
  { name: 'Development Variable', status: 'pending', type: 'DevEnv' },
  { name: 'Port Forward', status: 'pending', type: 'PortForward' },
]

export const SYNC_FILE_TYPE = [
  {
    label: 'send',
    value: 'send',
  },
  {
    label: 'sendreceive',
    value: 'sendreceive',
  },
]

export const WORKLOAD_TYPE = [
  {
    label: 'Deployment',
    value: 'Deployment',
  },
  { label: 'StatefulSet', value: 'StatefulSet' },
  {
    label: 'DaemonSet',
    value: 'DaemonSet',
  },
  { label: 'Job', value: 'Job' },
  { label: 'CronJob', value: 'CornJob' },
  { label: 'Pods', value: 'Pods' },
]

export const BASE_URL = 'http://127.0.0.1:30125'

export const DEFAULT_CONTAINER: Container = {
  dev: {
    shell: 'bash',
    sync: {
      type: 'send',
      filePattern: ['.'],
      ignoreFilePattern: ['.git'],
    },
    resources: {
      limits: {
        memory: '2048Mi',
        cpu: '2',
      },
      requests: {
        memory: '512Mi',
        cpu: '0.5',
      },
    },
  },
}

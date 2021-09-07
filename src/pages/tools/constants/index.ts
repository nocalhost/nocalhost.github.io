export const IMAGE_OPTIONS = [
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:11',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:11',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/node:14',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/node:14',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.9',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.9',
  },
  {
    label:
      'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest',
    value:
      'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/perl:latest',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/perl:latest',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/rust:latest',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/rust:latest',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:latest',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:latest',
  },
]
import { MenuItem } from '../types'
export const CONFIG_TYPE: MenuItem[] = [
  { name: 'Basic Config', status: 'reject', type: 'Basic' },
  { name: 'File synchronization', status: 'pending', type: 'FileSync' },
  { name: 'Run && Debug', status: 'pending', type: 'RunAndDebug' },
  { name: 'Volume', status: 'pending', type: 'Volume' },
  { name: 'Resource Limit', status: 'pending', type: 'ResourceLimit' },
  { name: 'Development Variable', status: 'pending', type: 'DevEnv' },
]

export const SYNC_FILE_TYPE = [
  {
    label: 'send',
    value: 'send',
  },
]

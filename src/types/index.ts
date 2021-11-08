export interface SearchParams {
  name?: string;
  type?: string;
  [index: string]: string;
}
export type ConfigType =
  | "Basic"
  | "FileSync"
  | "RunAndDebug"
  | "Volume"
  | "ResourceLimit"
  | "DevEnv"
  | "PortForward"
  | "Patches";

export interface MenuItem {
  name: string;
  status: string;
  type: ConfigType;
}

export interface Container {
  name?: string;
  dev?: {
    gitUrl?: string;
    image?: string;
    shell?: string;
    workDir?: string;
    storageClass?: string;
    resources?: {
      limits?: {
        memory?: string;
        cpu?: string;
      };
      requests?: {
        memory?: string;
        cpu?: string;
      };
    };
    persistentVolumeDirs?: {
      path: string;
      capacity: string;
    }[];
    command?: {
      build?: string[];
      run?: string[];
      debug?: string[];
      hotReloadRun?: string[];
      hotReloadDebug?: string[];
    };
    debug?: {
      remoteDebugPort?: string;
    };
    hotReload?: boolean;
    useDevContainer?: string;
    sync?: {
      type: string;
      filePattern?: string[];
      ignoreFilePattern?: string[];
      mode: "pattern" | "gitIgnore";
    };
    env?: {
      name: string;
      value: string;
    }[];
    portForward?: string[];
    sidecarImage?: string;
  };
}
export interface YamlObj {
  name: string;
  serviceType: string;
  containers: Container[];
}

export interface SaveInfo {
  application: string;
  name: string;
  namespace: string;
  type: string;
  config: string;
  kubeconfig: string;
  container?: string;
  from?: string;
}

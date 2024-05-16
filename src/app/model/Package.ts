import { Size } from './Size';

export interface Package {
    name: string;
    version: string;
    description: string;
    architecture: string;
    url: string;
    licences: string;
    groups: string[];
    provides: string[];
    depends: string[];
    optionalDependencies: string[];
    requestedBy: string[];
    optionalFor: string[];
    inConflictWith: string[];
    replaces: string[];
    size: Size;
    manager: string;
    creationDateTime: string;
    installDateTime: string;
    reasonInstallation: string;
    installationScript: boolean;
    validatedBy: string;
}
import { ApiConfig } from "./ApiConfig";

export class ForeignPackagesApiUrl {
    public static readonly GET_EXPLICIT_INSTALLED_PACKAGES_API_URL = `${ApiConfig.BASE_URL}/api/v1/foreign/packages/installed/explicit`;
    public static readonly GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL = `${ApiConfig.BASE_URL}/api/v1/foreign/packages/installed/explicit/lite`;
    public static readonly GET_PACKAGES_TO_UPGRADE_API_URL = `${ApiConfig.BASE_URL}/api/v1/foreign/packages/upgrade?password=`;
    public static readonly GET_PACKAGE_BY_NAME_API_URL = `${ApiConfig.BASE_URL}/api/v1/foreign/packages/`;
}
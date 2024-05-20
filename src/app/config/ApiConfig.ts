import { environment } from "../../environments/environment";

export class ApiConfig {
    public static readonly SERVER = environment.SERVER_IP;
    public static readonly PORT = environment.SERVER_PORT;
    public static readonly BASE_URL = `http://${ApiConfig.SERVER}:${ApiConfig.PORT}`;
}
import { EnvironmentVariables } from "../environments/env";

export const Constants = {
    VERSION: "0.1.0",
    ENVIRONMENT: EnvironmentVariables.environmentName.toUpperCase(),
    API_URL: EnvironmentVariables.api,
    MOCK_API: EnvironmentVariables.mockApi ?? false,
}

const SERVER_IP = "localhost:1909";

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api/V1.0.0`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login"
    },
};
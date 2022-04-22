const POST_URL = "http://192.168.0.171:8080/openapi-service/upload";
const LIST_URL = "http://192.168.0.171:8080/openapi-service/applications?accountName=dac";
const DEPLOY_URL =
  "http://192.168.0.171:8080/proxy-generator-service/deploy";


const CUSTOMIZE_CSV_URL =
  "http://34.133.59.251:8080/openapi-util/utils/update-data?link=gs://dac-self-service-sandbox/web-spec-uploads";
const UPDATE_CSV_URL =
  "http://34.133.59.251:8080/openapi-util/utils/update-entry";
const CREATE_CSV_URL =
  "http://34.133.59.251:8080/openapi-util/utils/create-entry";
const DOWNLOAD_SEED_URL =
  "http://34.133.59.251:8080/openapi-util/utils/download-seed-data";

const DOWNLOAD_URL =
  "http://192.168.0.171:8080/openapi-service/download-openapi";

const SEED_URL =
  "http://34.133.59.251:8080/openapi-util/utils/download-seed-data";

const UPLOAD_URL =
  "https://dev.usbank.digitalapicraft.com/seed-data-upload/dac/self-service/upload/seed-data";
const AUTO_URL =
  "http://192.168.0.171:8080/openapi-service/auto-generate";

export {
  POST_URL,
  // CRUMBID_URL,
  LIST_URL,
  // POSTJENKIN_URL,
  // GETJENKIN_URL,
  DEPLOY_URL,
  CUSTOMIZE_CSV_URL,
  UPDATE_CSV_URL,
  CREATE_CSV_URL,
  DOWNLOAD_SEED_URL,
  DOWNLOAD_URL,
  SEED_URL,
  UPLOAD_URL,
  AUTO_URL
};

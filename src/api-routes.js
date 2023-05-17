import { userApi } from "./api/user-api.js";
import { donationApi } from "./api/donation-api.js";
import { candidateApi } from "./api/candidate-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/donations", config: donationApi.findAll },
  { method: "GET", path: "/api/candidates/{id}/donations", config: donationApi.findByCandidate },
  { method: "POST", path: "/api/candidates/{id}/donations", config: donationApi.makeDonation },
  { method: "DELETE", path: "/api/donations", config: donationApi.deleteAll },

  { method: "GET", path: "/api/candidates", config: candidateApi.find },
  { method: "GET", path: "/api/candidates/{id}", config: candidateApi.findOne },
  { method: "POST", path: "/api/candidates", config: candidateApi.create },
  { method: "DELETE", path: "/api/candidates/{id}", config: candidateApi.deleteOne },
  { method: "DELETE", path: "/api/candidates", config: candidateApi.deleteAll },
];
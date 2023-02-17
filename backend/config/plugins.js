module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_nfy9iDQH65uBULuEgjyAzYXiORPI/DnSuch2W2t",
      apiToken: "rMca4MvbWr3p2UH5xCsNSyi4",
      appFilter: "ruvento",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
# Storyteller Web Stories Demo

<p>
  <a href="https://getstoryteller.com" target="_blank"><img alt="What is Storyteller?" src="./img/what-is-storyteller-btn.png" width="302" height="48"></a>&nbsp;&nbsp;&nbsp;
  <a href="https://docs.getstoryteller.com/documents/web-sdk" target="_blank"><img alt="Storyteller Web Documentation" src="./img/docs-btn.png" width="280" height="48"></a>
</p>

[Web SDK Documentation](https://www.getstoryteller.com/documentation/web/quickstart)

Storyteller is also available for [iOS](https://github.com/getstoryteller/storyteller-sample-ios), [Android](https://github.com/getstoryteller/storyteller-sample-android) and [React Native](https://github.com/getstoryteller/storyteller-sdk-react-native).

For help with Storyteller, please check our [Documentation and User Guide](https://www.getstoryteller.com/user-guide) or contact [support@getstoryteller.com](mailto:support@getstoryteller.com?Subject=web%20Sample%20App).

These samples demonstrate how you can setup your website to work with Storyteller & Google Web Stories.

Linking to your Web Stories using the methods in these samples and adding your Web Story URLs to a Sitemap file helps Google to index and discover your Stories. A Sitemap file is automatically generated for your tenant by Storyteller, and will be provided to you by the Storyteller team.

### **Storyteller API Key & Tenant ID**

To correctly run these sample, you will need the API key for your Storyteller Web App and the ID of your Storyteller tenant.

The API key for your Web App can be found in the CMS, by selecting "Apps" in the left menu. More information about Storyteller Apps can be found [here](https://www.getstoryteller.com/user-guide/users-and-settings/apps).

Please contact the Storyteller team to retrieve your tenant ID.

# Express Sample

### **What is included**?

The sample contains a Storyteller row implemented using the Storyteller Web SDK. A reverse-proxy is setup in `app.js` to target any requests to the route `/stories/:urlName` at the Storyteller CDN, where the corresponding valid Google Web Story HTML is returned for the Story.

### **Running the sample**

1. Make sure you are using node version 16.
2. Insert your Storyteller Web App API Key in `index.js`.
3. Insert your Storyteller Tenant ID in `app.js`.
4. Run `npm install` to install all dependencies.
5. Run `npm start` to run the sample. This will start the server on `http://localhost:3000`.

# hapi Sample

### **What is included**?

The `/webstories/{urlName}` route defined in `index.js` creates a reverse-proxy to target any requests to the route at the Storyteller CDN, where the corresponding Google Web Story HTML is returned for the Story.

### **Running the sample**

1. Make sure you are using node version 16.
2. Insert your Storyteller Tenant ID in `index.js`.
3. Run `npm install` to install all dependencies.
4. Run `node index.js` to run the sample. This will start the server on `http://localhost:3000`.

# NEXT.js Sample

### **What is included**?

The sample contains a Storyteller Grid implemented using the Storyteller Web SDK. The `rewrites()` function in `next.config.js` creates a reverse-proxy to target any requests to the route `/stories/:urlName` at the Storyteller CDN, where the corresponding valid Google Web Story HTML is returned for the Story.

### **Running the sample**

1. Make sure you are using node version 16.
2. Insert your Storyteller Web App API Key in `constants.js`
3. Insert your Storyteller Tenant ID in `next.config.js`.
4. Run `npm install` to install all dependencies.
5. Run `npm run dev` to run the sample. This will start the server on `http://localhost:3000`.

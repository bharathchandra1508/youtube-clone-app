- Creating the React App
    - **npx create-react-app youtube-clone-app**

    - If there is any issue related to dependencies, run the following command to bypass the strict peer dependency check
        **npm install --legacy-peer-deps**

    - Install web-vitals library. The web-vitals library is a tool provided by Google to measure and report essential web performance metrics, collectively known as Web Vitals. These metrics focus on providing insights into the real-world user experience of a web application, such as loading speed, responsiveness, and visual stability.
        **npm install web-vitals**

- Running the App
    - **npm run start**

- Setting up Tailwind CSS
    - Follow the steps mentioned in the below link.
    - https://tailwindcss.com/docs/guides/create-react-app

- Setting up Redux Store
    - **npm i @reduxjs/toolkit**
    - **npm i react-redux**

- Get the Youtube API Key from developers.google.com

- Setting up React Routing
    - **npm i react-router-dom**

- Handling Live Data
    - Web Sockets (These are bi-directional in nature. Web Sockets does not have regular interval. Examples: Trading Platforms like Zerodha, Groww)
    - API Polling (UI requests the Server, but data flows from server to UI, It is uni-directional in nature. API Polling has some set of interval. Examples: Gmail, CricBuzz, YouTube Live Chat)

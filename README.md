# Project Name : LeftOverLift

LeftOverLift is a web application that aims to revolutionize the way we manage food waste. It is built using Next.js, Tailwind CSS, Mantine, Prisma, Smarrow SMS, and Leaflet.

The application allows users to track their food waste, and it also provides a way to redistribute surplus food to those in need. The application uses geolocation to connect food providers with charities and food banks in the area.

# Installation

To run LeftOverLift, you will need to have Node.js and npm installed on your system. You can install them from the official website.

Once you have the dependencies installed, you can clone the repository and install the required packages by running the following commands:

```
git clone https://github.com/projectashik/meta-goblins-vertex

yarn install
or
npm install
```

Note : You also need to install prisma client and configure it with your database by following the instruction in prisma documentation.

# Usage

To start the development server, run the following command:

```
npm run dev
or
yarn dev
```

This will start a development server on http://localhost:3000. You can access the application by going to that URL in your web browser.

# Code documentation

The codebase is organized into several key directories:

- `pages/` : This directory contains the Next.js pages of the application.
- `components/` : This directory contains the reusable components used throughout the application.
- `lib/` : This directory contains the utility functions and libraries used in the application.
- `public/` : This directory contains the static assets of the application such as images, fonts, and styles.
- `context/` : This directory contains all the contexts.
- `data/` : This directory contains all the datas.
- `hooks/` : This directory contains the custom hooks.
- `layouts/` : This directory contains the custom layouts for our website.
- `libs/` : This directory contains the configurations related to the third-party apis.

# License

LeftOverLift is released under the MIT License.

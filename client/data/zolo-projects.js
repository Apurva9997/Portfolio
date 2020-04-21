export default {
  attributesOrder: ['description', 'technology', 'builtOn', 'frameWorkVersion', 'rolePlayed'],
  attributesDisplayName: {
    name: 'Name',
    description: 'Description',
    technology: 'Technology',
    builtOn: 'Javascript framework used',
    frameWorkVersion: 'Framework version',
    rolePlayed: 'Role in the team'
  },
  applications: [
    {
      title: "CRM",
      name: "CRM",
      description: "CRM for zolo",
      technology: ["Angular"],
      builtOn: "Angular",
      frameWorkVersion: "1",
      rolePlayed: "Incorporated all the new feature/enhancement requests for more than a year."
    },
    {
      title: "Customer Website",
      name: "Customer Website",
      description: "Customer Website",
      technology: ["SSR", "Lazy loading of images", "Lazy loading of components/sections", "PWA - (Workbox)", "Adaptive design"],
      buildOn: "React",
      frameWorkVersion: "17",
      rolePlayed: "Was part of the team, who revamped the whole zolo website in one month, my role in the team was to develop pages (mostly for mobile)."
    },
    // {
    //   name: "Omega Dashboard",
    //   description: "Micro frontend wrapper",
    //   technology: ["Ca"]
    // }
  ]
};
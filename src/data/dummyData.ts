const vsExplorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "images",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "mainImages",
                isFolder: true,
                items: [
                    {
                        id:"1",
                        name: "profile.png",
                        isFolder: false,
                        items: []
                      },
                ]
              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"6",
            name: "icons",
            isFolder: true,
            items: []
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "App.tsx",
            isFolder: false,
            items: []
          },
          {
            id:"9",
            name: "index.tsx",
            isFolder: false,
            items: []
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"11",
        name: ".gitignore",
        isFolder: false,
        items: []
      },
      {
        id:"12",
        name: "package.json",
        isFolder: false,
        items: []
      },
      {
        id:"13",
        name: "node_modules",
        isFolder: true,
        items: []
      }
    ]
  }
  
  export default vsExplorer;
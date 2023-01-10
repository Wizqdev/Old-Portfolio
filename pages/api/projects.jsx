export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/940850824496697385/1062292726734925874/image.png",
      name: "Portfolio",
      description: "My Portfolio Website",
      github: "https://github.com/Prajwal433/Portfolio",
      live: "https://prajwaldev.xyz",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/940850824496697385/1062312659921416242/image.png",
      name: "Jylo Discord Bot",
      description: "A Fully Multi-Purpose Discord Bot!",
      github: "",
      live: "https://jylo.io",
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/1061206144271519854/1062259724550144010/image.png?size=2048",
      name: "Hosting Template",
      description: "A Free Hosting Template Made For Hosting",
      github: "https://github.com/Prajwal433/Hosting-Website",
      live: "https://demo-1.prajwaldev.xyz",
    },
    {
      id: 4,
      image: "https://cdn.discordapp.com/attachments/940850824496697385/1062302161813393428/image.png?size=2048",
      name: "Hosting Template 2",
      description: "A Free Hosting Template Made For Hosting",
      github: "https://github.com/Prajwal433/Hosting-Website-2",
      live: "https://demo-2.prajwaldev.xyz",
    }
  ];
  res.status(200).json(data);
};

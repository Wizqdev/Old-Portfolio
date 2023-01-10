export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/786952203209277441/cc682b52c3a3b5048562c9b5831278de.png?size=2048",
      name: "Jylo Discord Bot",
      description: "A Fully Multi-Purpose Discord Bot!",
      github: "",
      live: "https://jylo.io",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1061206144271519854/1062259724550144010/image.png?size=2048",
      name: "Hosting Template",
      description: "A Free Hosting Template Made For Hosting",
      github: "https://github.com/Prajwal433/Hosting-Website",
      live: "https://demo-1.prajwaldev.xyz",
    }
  ];
  res.status(200).json(data);
};

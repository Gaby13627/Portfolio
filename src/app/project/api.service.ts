import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  projectService(){
    return [
      {
        id: 1,
        project_name: "DiscordJS Bot JS (v12/13)",
        tags: ["JS", "MongoDB"],
        description : "Development of different bot related to Japanese culture and video games allowing access to data from API and a MongoDB database",
        link : "",
        img: "https://jquery-plugins.net/image/plugin/discordjs-powerful-javascript-library-for-interacting-with-the-discord-api.png"
      },
      {
        id: 2,
        project_name: "Space Invaders Game",
        tags: ["HTML","CSS","JS"],
        description : "Small space invader game coded in javascript, CSS and HTML",
        link : "https://github.com/Gaby13627/Space-Invaders-Game",
        img: "https://imgur.com/UEGIbrR.png"
      },
      {
        id: 1,
        project_name: "Pacman Game",
        tags: ["JS"],
        description : "PacMan game coded in javascript, CSS and HTML",
        link : "https://github.com/Gaby13627/PacmanGame",
        img: "https://imgur.com/ZMBQyku.png"
      },
      {
        id: 1,
        project_name: "Easy Save",
        tags: ["C#"],
        description : "Data backup and archiving software created with C# as part of a study project",
        link : "https://github.com/Gaby13627/EasySave",
        img: "https://imgur.com/iGf6WZE.png"
      },
      {
        id: 1,
        project_name: "Uptobox-tool",
        tags: ["HTML","CSS","JS"],
        description : "File management tool for the Website Uptobox built with ElectronJs which use HTML and CSS as interface",
        link : "https://github.com/Gaby13627/Uptobox-tool",
        img: "https://imgur.com/dVlmwyo.png"
      }
    ]
  }


}

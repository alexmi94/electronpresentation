const { shell, ipcRenderer, powerSaveBlocker  } = require("electron");
const path = require("path")
const fs = require('fs');

document.addEventListener("DOMContentLoaded", function() {

    // Folder

    let ButtonDisplayFolder = document.getElementById("displayfolder");
    let ButtonCreateFile = document.getElementById("buttoncreatefile");
    let ButtonRemoveFile = document.getElementById("buttonremovefile");

    ButtonDisplayFolder.addEventListener("click", () => {
        shell.openPath(path.resolve("./file"))
    })

    ButtonCreateFile.addEventListener("click", () => {
            fs.writeFileSync( path.resolve("./file/Monfichier.txt"), 'Mon Fichier texte', 'utf-8'); 
    })

    
    ButtonRemoveFile.addEventListener("click", () => {
        try{
        fs.unlinkSync(path.resolve("./file/Monfichier.txt"))
        }catch{
            
        }
    })

    // Notification

    const ButtonNotification = document.getElementById("buttonnotification");

    ButtonNotification.addEventListener("click", () => {
        const NOTIFICATION_TITLE = 'Hey'
        const NOTIFICATION_BODY = 'Une belle notification '
        new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY, icon: path.resolve("./asset/notif.png")}).onclick = () => {
            alert("Notification ouverte")
        }
    })


    //Batterie

    let ButtonBatterie = document.getElementById("buttonbatterie");

    ButtonBatterie.addEventListener("click", async () => {
            const result = await ipcRenderer.invoke('batterie-status')
            if(result){
                alert("Votre ordinateur est sur batterie")
            }else{
                alert("votre ordinateur est alimenté sur une prise secteur")
            }
          
    })




   
})
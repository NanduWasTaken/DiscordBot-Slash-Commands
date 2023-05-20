# DiscordBot-Slash-Commands
A simple discord bot equiped with slash command & event handlers to start your journey.  
Available commands:-

/avatar:- shows users avatar.  
/option:- echo backs a message.  
/ping:- replies with pong.  
/prune:- deletes a specfic amount of messages.  
/server:- shows server info.  
/user:- shows user info.  


# Forking the github respository
Type this into the terminal
`git clone https://github.com/NanduWasTaken/DiscordBot-Slash-Commands.git`

# Setting Up Config Files
```json
{
  "TOKEN": "bot_token",
  "CLIENT_ID": "bot_id",
  "STATUS": "dnd",
  "ACTIVITY_NAME": "SCRIBLLING THINGS"
}
```
Replace `bot_token` with your bot token you can obtain your bot token from discord developer portal.

Replace  `bot_id` with your bot's client id.
_____________________________________________

### Optional Configuration.

Status name can be changed by changing the `SCRIBLLING THINGS` with whatever you want it to be.  
Status `dnd` can be changed into 'dnd', 'idle', 'online' and 'invinsible'.  
If you want to change your activity type of your bot go into ready.js in events folder and change it.  

# Deleting All Your Commands.
To delete all of your slash commands.
Type `node delete.js` into your terminal.  
Note: Your Slash Comamnds Register Automatically When The Bot Starts.

# Starting Your Bot
To start your bot.
Type `node index.js` into your terminal.

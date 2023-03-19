<h1 align="center">World Bot</h1>
<h2 align="center">Welcome!</h2>
<p>This project is a Discord bot that has 2 simple commands. <i>Yes, this took me 4 hours to get working.</i></p>
<p>You <b>must</b> self-host this bot. There is no pre-hosted, public bot availible right now.</p>
<hr>
<h2 align="center">Self-host</h2>
<h3>Pre-requisites</h3>
<ul>
    <li>A Discord Bot (see "Setting up your bot")</li>
    <li><a href="https://nodejs.org/download/release/v18.15.0/">Node.js v18</a></li>
    <li><a href="https://discord.js.org/">Discord.js v14</a></li>
    <li>A package manager, such as <a href="https://www.npmjs.com">npm</a>, <a href="https://yarnpkg.com">yarn</a>, or <a href="https://pnpm.io">pnpm</a>.
    <li>Optional: An IDE, such as <a href="https://code.visualstudio.com">Visual Studio Code</a></li>
</ul>

<h3>Setting up your bot</h3>

1. Open the [Discord Developer Portal](https://discord.com/developers).

2. Click "New Application".

3. Give your application a name!

4. Agree to the Developer ToS and Developer Policy.

5. Click "Create".

6. Under "Bot", click "Add Bot".

<h3>How-to self-host</h3>

1. Download the [latest release of this repository](https://github.com/buildingthingsdev/world-bot/releases).

2. Extract the files.

3. Open a terminal/command prompt window where you extracted the files.

4. [Install discord.js into the directory](https://discordjs.guide/preparations/#installing-discord-js).

| npm                      | yarn                  | pnpm                  |
| ------------------------ | --------------------- | --------------------- |
| `npm install discord.js` | `yarn add discord.js` | `pnpm add discord.js` |

5. Rename `config-ex.json` to `config.json`.

6. Fill out `config.json` with info.

```json
{
	"token": "your bot's token", 
	"clientId": "your bot's client id",
	"guildId": "your server id",
	"announceChannel": "announcement channel id"
}
```
<small>Need help? Join the suppport server.</small>

7. In your console, run `node cmds.js`. This will intialize the commands.

8. After your commands are intialized, run `node index.js`. You should see a message stating that the bot is ready. Run `/status` to update the status, or run `/announce` to send an embed with your custom text to your specified announcement channel.

Thanks for your interest!

<h3>Contributing</h3>

To contribute, open a [pull request](https://github.com/buildingthingsdev/world-bot/pulls). 

<h3>License</h3>

This project is licensed under the [GNU General Public License v3.0](https://github.com/buildingthingsdev/world-bot/blob/main/LICENSE).
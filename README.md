# Oracle Commerce Cloud Helper CLI

> The OCC Helper CLI tool was not built to be an alternative to the [Design Code Utility](https://docs.oracle.com/cd/E97801_04/Cloud.19B/ExtendingCC/html/s4705usethedcutograbanduploadsourceco01.html) as it uses the DCU package for all its server operations.

The **Oracle Commerce Cloud Helper CLI** will ask you for the environment URL and your application key then will store it in a `.env` file so it can be used for the `grab`, `put` and `putAll` commands available in the CLI (you can still use DCU for the rest of the commands)

The main purpose of this package is to make it easier and faster for me as a developer to download, update and switch between environments without the need to manually enter the env. URL and application key manually all the time.

###Documentation

- [Support (OS Terminals)](#user-content-support-os-terminals)
- [Installation](#user-content-installation)
- [Initiate Workspace](#user-content-initiate-workspace)
- [Show Environment variables](#user-content-show-environment-variables)
- [Download resources / widgets](#user-content-download-all-modifiable-resources)
- [Update a specific file](#user-content-update-a-specific-file)
- [Update a directory](#user-content-update-a-directory)
- [Commands List](#user-content-commands-list)

---

### Support (OS Terminals)

You should expect mostly good support for the CLI below, but not limited to :

- **Mac OS:** Terminal.app, iTerm
- **Windows:** ConEmu, cmd.exe, Powershell, Cygwin
- **Linux :** gnome-terminal (Terminal GNOME), konsole

---

### Installation

In order for the OCC Helper CLI to work you should have the [Design Code Utility](https://docs.oracle.com/cd/E97801_04/Cloud.19B/ExtendingCC/html/s4705usethedcutograbanduploadsourceco01.html) installed globally.

To install the OCC Helper CLI execute the below command.

```bash
npm install -g occ-helper-cli
# OR
yarn global add occ-helper-cli
```

You can check if the package is installed correctly with this command and you should get the version installed on your machine:

```bash
occ --version
```

---

#### Initiate Workspace

You need first to create a folder then `cd` into that folder and run the below command

```bash
occ init
```

You will be prompted to enter the Environment path which is same as the full Admin URL `example: https://the-admin-url.com`

![alt text](/docs/assets/occInit.png)

If you choose `yes` for Grabbing Widgets, the helper cli will execute the `dcu --grab --clean` command line under the hood and you will be downdloading all your OCC resources in the created folder.

---

#### Show Environment variables

To check your stored credentials (Admin URL and App key), you can always use the below command

```bash
occ env
```

---

#### Download all modifiable resources

Takes a copy of all available user modifiable source code and metadata from the specified Commerce Cloud server and creates a directory tree on the local disk.

```bash
# Clean grab is selected by default
# if don't want to have a clean grab, you still can pass --keep as an option

occ grab  #for clean grab
occ grab --keep #clean grab desabled
# OR
occ g
```

The OCC Helper CLI will execute the `dcu --grab --clean` in the background.

---

#### Update a specific file

Sends the specified file back to the specified Commerce Cloud instance. The `<path to file>` can be either a relative or absolute path.

```bash
occ put <file path>
# OR
occ p <file path>
```

---

#### Update a directory

Sends the specified file back to the specified Commerce Cloud instance. The `<path to file>` can be either a relative or absolute path.

```bash
occ putAll <directory path>
# OR
occ pa <directory path>
```

---

###

### Commands List

| Commands         | Options/Arguments   | Description                                                                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[command]`      | -h \| --help        | Get options of each command                                                                                                                               |
| **grab \| g**    | --clean _(default)_ | Deletes all local files that have been previously grabbed and download fresh download all the content.                                                    |
|                  | --keep              | Copies all available content from the target Commerce Cloud instance into the current working directory, or the base directory if one has been specified. |
| **put \| p**     | `file path`         | Sends the specified file back to the specified Commerce Cloud instance. The `<path to file>` can be either a relative or absolute path.                   |
| **putAll \| pa** | `<directory path>`  | Sends all files back to the target Commerce Cloud instance, beneath the specified directory. The `<directory>` can be either a relative or absolute path  |
| **refresh \| r** | `directory path`    | Refreshes content from the Commerce Cloud instance within the specified directory.                                                                        |
| **env**          | `directory path`    | View your stored environment variables                                                                                                                    |

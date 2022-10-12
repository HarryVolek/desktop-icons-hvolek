Fork of desktop-icons@csoriano hacked to allow dragging excess apps from dash->desktop

#### Example

https://user-images.githubusercontent.com/28551524/195240781-42e4bddb-87b0-42ef-9542-29808803e55a.mp4

#### Install

First have to remove the extension that shipped with Ubuntu. Can reinstall [here](https://extensions.gnome.org/extension/1465/desktop-icons/).  
```sh
rm -r /usr/share/gnome-shell/extensions/desktop-icons@csoriano
```
Make a folder for this extension (directory name important)
```
mkdir -p ~/.local/share/gnome-shell/extensions/desktop-icons@hvolek
```
Copy the files in this repo over.

Now Alt+f2 -> type "r" to reload gnome. gnome-tweaks to enable/disable extension.

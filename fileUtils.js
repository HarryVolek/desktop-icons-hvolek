const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

var S_IXUSR = 0o00100;
var ATTRIBUTES = 'metadata::*,unix::mode';

function makeLaunchable(file) {
    file.query_info_async(ATTRIBUTES,
        Gio.FileQueryInfoFlags.NONE,
        GLib.PRIORITY_DEFAULT,
        null,
        (source, result) => {
            try {
                let info = source.query_info_finish(result);
                let newUnixMode = info.get_attribute_uint32('unix::mode') | S_IXUSR;
                info.set_attribute_uint32(Gio.FILE_ATTRIBUTE_UNIX_MODE, newUnixMode);
                info.set_attribute_string('metadata::trusted', 'true');
                setFileAttributes(file, info);
            } catch(error) {
                log(`Failed to make launchable: ${e.message}`);
            }
        });
}

function setFileAttributes(file, info) {
    file.set_attributes_async(info,
            Gio.FileQueryInfoFlags.NONE,
            GLib.PRIORITY_LOW,
            null,
            (source, result) => {
                try {
                    source.set_attributes_finish(result);
                } catch(e) {
                    log(`Failed to set attributes: ${e.message}`);
                }
            });
}
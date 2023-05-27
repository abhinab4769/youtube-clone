const ffmpegPath = "C:\\ffmpeg\\bin\\ffmpeg.exe";
const media = "C:\\media";
module.exports = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30,
    },
    http: {
        port: 8000,
        allow_origin: "*",
    },
    trans: {
        mediaRoot: media,
        debug: true,
        ffmpeg: ffmpegPath, // Path to the ffmpeg executable
        tasks: [
            {
                app: "live",
                mp3: true,
                mp3Flags: "-b:a 19200", // Set the desired bitrate for the mp3 output
                mp3Params: "-map 0 -c:a libmp3lame",
                hls: true,
                hlsFlags:
                    "[hls_time=2:hls_list_size=3:hls_flags=delete_segments]",
            },
        ],
    },
};

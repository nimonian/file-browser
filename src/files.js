const documents = {
  type: "directory",
  children: {
    "notes.txt": {
      type: "file",
    },
    pictures: {
      type: "directory",
      children: {
        "funny_cat.jpg": {
          type: "file",
        },
        "sad_panda.png": {
          type: "file",
        },
        holiday: {
          type: "directory",
          children: {
            "beach-1.jpg": {
              type: "file",
            },
            "beach-2.jpg": {
              type: "file",
            },
          },
        },
      },
    },
    music: {
      type: "directory",
      children: {
        "put_a_ring_on_it.mp3": {
          type: "file",
        },
        "LedZep-Stairway.wav": {
          type: "file",
        },
      },
    },
  },
};

export default documents;

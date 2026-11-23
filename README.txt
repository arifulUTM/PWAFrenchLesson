MON FRANÇAIS A1 - PWA
=====================

FILES
  index.html, sw.js, manifest.webmanifest, icons/   the app (don't need to touch)
  data/lessons/lesson-1.json                        Lesson 1
  data/lessons/lesson-2.json, lesson-3.json ...     YOUR NEXT LESSONS (you add these)

1) PUT IT ONLINE (free, needs https)
  Netlify : app.netlify.com/drop -> drag this whole folder in.
  GitHub Pages : new repo -> upload all files -> Settings > Pages > Deploy from branch (main, root).
  Phone: Android Chrome menu > Install app. iPhone Safari: Share > Add to Home Screen.

2) ADD A NEW LESSON (loads automatically)
  - Make a file named exactly:  lesson-2.json   (then lesson-3.json, lesson-4.json ...)
  - Put it in the folder:       data/lessons/
  - Upload it. Open the app online once: the new lesson appears by itself.
  - Numbers must be in order with no gaps (the app stops after 3 missing numbers in a row).
  - Nothing else to edit. No index file.

  Inside each lesson file:
  {
    "id": 2,
    "title": "Lesson 2 - Numbers",
    "date": "2026-11-23",
    "items": [
      { "fr": "Un", "ipa": "/œ̃/", "bnph": "আঁ", "enph": "uhn", "bn": "এক", "en": "One" }
    ]
  }
  Optional per item: "audio": "audio/l2-01.mp3" (put the mp3 in an audio/ folder).

  After opening once online, each lesson is saved on the phone and works offline.

3) UPDATES
  While the app is open on screen it checks every 10 seconds for new lessons and a new index.html.
  A new index.html reloads the page by itself, but never while audio plays, you record, or you type a note.
  Everything is network-first: when you upload new files (lesson-N.json or a new index.html),
  the app uses them the next time it opens online. Lessons also refresh when you come back to the app.
  No version number to change.

4) LOCK-SCREEN AUDIO
  Works only for items that have an "audio" file in the lesson JSON.
  The phone's built-in voice usually stops when the screen locks.

5) BACKUP
  My notes tab > Export backup (your notes).

6) MANY LESSONS / MANY WORDS
  The filter appears once you have more than 10 words. Lessons tab:
    Lesson          : All lessons, or one lesson (Lessons 1-20 ranges appear when you have 20+ lessons)
    Words per group : 10 / 20 / 50
    Show            : All words, Words 1-20, Words 21-40 ...
  Example: Lesson 2 with 121 words -> choose Lesson 2, then Words 1-20, 21-40 ...
  Play all plays only what is currently shown. Your choice is remembered.

7) SAY BANGLA / ENGLISH MEANING
  Tick 'Say: French / বাংলা / English' above the play buttons. Order: French, then Bangla, then English.
  Uses the phone's voices. Bangla needs a Bangla voice installed on the phone (Android: Settings >
  Text-to-speech > Google > Install voice data > Bangla). Spoken meanings usually stop when the screen locks.

8) GRAMMAR / STUDY NOTES (not words)
  Add a "notes" list to any lesson file, next to (or instead of) "items":
  {
    "id": 7,
    "title": "Lesson 7 - Grammar: etre",
    "notes": [
      {
        "title": "Etre = to be",
        "bn": "বাংলা ব্যাখ্যা (new line = \\n)",
        "en": "English explanation",
        "examples": [
          { "fr": "Je suis etudiant.", "bn": "আমি ছাত্র।", "en": "I am a student." }
        ]
      }
    ],
    "items": [ ...words, optional... ]
  }
  - title, bn, en, examples are all optional. Each example has a play button (French voice).
  - Notes show at the top of their lesson. They are NOT included in Play all or word counts.
  - A lesson can have only notes (no "items").

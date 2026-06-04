/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "", // Recipient's name (used in greeting section)
  photo: "./img/arleth.jpeg", // Place your photo in the img/ folder
  music: "./music/hbd.mpeg", // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6", // Main accent color (rose pink)
    accent: "#60a5fa", // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a", // Slate 900
      text: "#f1f5f9", // Slate 100
    },
    light: {
      background: "#fafaf9", // Stone 50
      text: "#1e293b", // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hola, Miss!",
      // subtitle:
      //   "Ah, y antes de que se me olvide, me encanta tu nombre. Es tan bonito y único, como tú. :D",
      subtitle: "¡Feliz cumpleaños! 🎂🎉",
    },
    {
      type: "countdown",
      from: 5, // Countdown from this number
      goText: "🎉", // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "¡¡Es tu cumpleaños!! :D",
    },
    {
      type: "chatbox",
      message:
        "¡¡Feliz cumpleaños a tiii!! ¡Deseándote un año maravilloso por delante lleno de alegría, amor y felicidad infinita!",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "Eso es lo que iba a hacer.",
        "Pero luego me detuve.",
        "Me di cuenta de que quería hacer algo <strong>especial</strong>.",
        "Porque,",
        "Tú eres especial <span>:)</span>",
      ],
      bigLetters: "SÍ",
    },
    {
      type: "quote",
      text: "Cuenta tu edad por amigos, no por años. Cuenta tu vida por sonrisas, no por lágrimas.",
      author: "John Lennon",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "¡Feliz Cumpleaños!",
      wishText:
        "Que todos tus deseos se hagan realidad en este día tan especial.",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Bueno, ahora vuelve y dime si te gustó.",
      replayText: "O haz clic aquí si quieres verlo de nuevo.",
    },
  ],
};

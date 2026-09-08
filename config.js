// ==========================================================================
// CONFIG — edit these values to personalize the invitation.
// Nothing secret lives here: RSVP submissions go to rsvpEndpoint (a Google
// Apps Script Web App URL, or any endpoint that accepts a JSON POST).
// ==========================================================================
const CONFIG = {
  brideName: "Արփինե",
  brideNameLatin: "Arpine",
  groomName: "Տիգրան",
  groomNameLatin: "Tigran",
  weddingDate: "2025-05-17",
  weddingDateDisplay: "17 ՄԱՅԻՍ 2025",

  churchName: "Սուրբ Գայանե եկեղեցի",
  churchCity: "Էջմիածին, Հայաստան",
  churchTime: "16:00",
  churchMapUrl: "https://maps.google.com/?q=Saint+Gayane+Church+Etchmiadzin",

  restaurantName: "Royal Garden",
  restaurantCity: "Երևան, Հայաստան",
  restaurantTime: "19:00",
  restaurantMapUrl: "https://maps.google.com/?q=Royal+Garden+Yerevan",

  musicUrl: "", // e.g. "assets/music/first-dance.mp3" — left empty by default
  rsvpEndpoint: "", // e.g. a Google Apps Script /exec URL

  monogram: "Ա&amp;Տ",
  monogramLatin: "A &amp; T",
};

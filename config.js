// ============================================================
//  CONFIG : seul fichier à modifier pour une nouvelle invitation
// ============================================================
window.CONFIG = {
  cleWeb3Forms: "",            // colle ta clé ici. Vide = mode test (réponses affichées à l'écran)
  objetDuMail: "Réponse à l'invitation",

  theme: {                     // V1 minimaliste : la déco = changer ces valeurs
    fond: "#ffffff", texte: "#1a1a1a", accent: "#1a1a1a", accentTexte: "#ffffff",
    neutre: "#f0f0f0", police: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", rayon: "14px"
  },

  // ---------- Écran d'accroche + branche du refus ----------
  accroche: {
    titre: "Ça te dit de dîner chez moi ?",
    texte: "J'ai imaginé un petit menu dégustation aux inspirations thaïlandaises et j'aimerais beaucoup te le faire découvrir.",
    texteOui: "Avec plaisir !",
    texteNon: "Non, merci.",
    note: "",
    // GIFs dans /gifs (< 1 Mo). "" = emoji à la place.
    gifOui: "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif", emojiOui: "🎉", messageOui: "Yes !",
    dureeGifMs: 3000,
    // Refus en 4 étapes (utilisées par le prochain moteur). Un GIF par étape.
    refusEtapes: [
      { bouton: "Non, merci",        gif: "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif", emoji: "🥺", message: "Oh..." },
      { bouton: "Non ?",             gif: "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif", emoji: "😢", message: "Vraiment ?" },
      { bouton: "Vraiment non ?",    gif: "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif", emoji: "😞", message: "Aïe..." },
      { bouton: "Non, vraiment pas", gif: "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif", emoji: "👋", message: "D'accord." }
    ],
    refus: {
      titre: "Tu veux quand même voir ce que tu rates ?",
      boutonMontre: "Montre-moi",
      boutonRefus: "Non, vraiment pas",
      finTitre: "Aucun souci 😄",
      finTexte: "Merci d'avoir joué."
    }
  },

  // ---------- Parcours après le Oui ----------
  // types : "info" | "date" | "choix" | "recap"
  parcours: [
    { type: "info", titre: "MENU DÉGUSTATION", sous: "Voyage culinaire aux inspirations thaïlandaises",
      texte: "Une expérience culinaire unique, imaginée et préparée avec passion, pensée autour du plaisir et du partage.",
      bouton: "Découvrir le menu" },
    { type: "info", emoji: "🥗", titre: "Échauffement des papilles", sous: "Som Tam",
      texte: "Salade de papaye verte traditionnelle, aux saveurs authentiques du royaume de Siam.", bouton: "Suivant" },
    { type: "info", emoji: "🥥", titre: "Les premières tentations", sous: "Tom Kha Goong",
      texte: "Velouté thaïlandais au lait de coco, crevettes et aromates parfumés.", bouton: "Suivant" },
    { type: "info", emoji: "🥩", titre: "Le plat de résistance", sous: "Suea Rong Hai",
      texte: "Le tigre qui pleure, dans une interprétation personnelle. Entrecôte grillée, sauce Nam Jim Jaew et douceur de patate douce.", bouton: "Suivant" },
    { type: "info", emoji: "🍨", titre: "Le véritable happy ending", sous: "Ruam Mit",
      texte: "Une parenthèse gourmande et inattendue, pour terminer le repas sur une note originale, réservée aux palais les plus curieux.", bouton: "Réserver ma table" },

    { type: "date", id: "date", recap: "Date", titre: "Quel soir te conviendrait le mieux ?",
      jours: [3, 6, 0],        // jours dispo : 0=dim 1=lun 2=mar 3=mer 4=jeu 5=ven 6=sam
      semaines: 6,
      note: "Notre service réservation reste à ton entière disposition pour trouver une date qui te convienne." },

    { type: "choix", id: "heure", recap: "Heure d'arrivée", titre: "À quelle heure souhaites-tu être reçue ?",
      options: ["19h30", "20h00", "20h30"] },

    { type: "choix", id: "allergies", recap: "Allergies et restrictions", titre: "As-tu des allergies ou des restrictions alimentaires ?",
      options: ["Aucune, je suis prête à prendre des risques.", "Oui, certaines allergies sont à signaler.", "Je préfère éviter certains aliments."],
      reponse: "Ton dossier médical a été examiné avec la plus grande attention. Nous avons décidé de ne pas en tenir compte." },

    { type: "choix", id: "piment", recap: "Niveau de piment", titre: "Quelle est ta tolérance au piment ?",
      options: ["Aucune, je tiens à mes papilles.", "Doux, j'aime quand ça réveille.", "Fort, je n'ai peur de rien.", "Surprends-moi."],
      reponse: "Compte tenu de ta fragilité présumée, notre service culinaire a décidé de ne prendre aucun risque. Aucun piment ne sera ajouté à ton assiette. Nous préférons préserver tes capacités gustatives pour la suite du repas." },

    { type: "choix", id: "cuisson", recap: "Cuisson", titre: "Quelle cuisson souhaites-tu pour ton entrecôte ?",
      options: ["Saignante, comme il se doit.", "À point, pour les indécis.", "Bien cuite, chacun ses choix."],
      reponse: "Nous garantissons une cuisson saignante. Toute autre cuisson résultera d'un incident technique indépendant de notre volonté, probablement imputable à la personne derrière les fourneaux." },

    { type: "choix", id: "boisson", recap: "Boisson", titre: "La carte des boissons : que souhaites-tu déguster pour accompagner ton repas ?",
      options: [
        { label: "Saint-Joseph 2021", reponse: "vin" }, { label: "Saint-Joseph 2022", reponse: "vin" },
        { label: "Saint-Joseph 2023", reponse: "vin" }, { label: "Saint-Joseph 2024", reponse: "vin" },
        { label: "Un diabolo", reponse: "diabolo" }],
      reponses: {
        vin: "Excellent choix. Tu as manifestement du goût. Notre sommelier partage entièrement ton avis, bien qu'il soit actuellement incapable de distinguer un Saint-Joseph d'un jus de raisin.",
        diabolo: "Nous apprécions ton audace et ton mépris des conventions œnologiques. Malheureusement, notre sommelier a quitté l'établissement après avoir pris connaissance de ton choix. Nous allons devoir improviser." } },

    { type: "recap", titre: "Ta réservation est presque terminée !", labelPrenom: "Réservation au nom de :",
      placeholder: "Ton prénom", bouton: "Confirmer ma réservation" }
  ],

  // ---------- Écran final ({prenom} est remplacé) ----------
  final: {
    titre: "Réservation enregistrée au nom de {prenom} !",
    texte: "Une table, des saveurs, du partage… et le plaisir de te recevoir pour partager ma passion de la cuisine.",
    texte2: "La personne derrière les fourneaux te remercie pour ta confiance. Elle espère être à la hauteur de tes attentes.",
    fin: "À très bientôt !"
  }
};

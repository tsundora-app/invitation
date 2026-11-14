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
      texte: "Une parenthèse gourmande et inattendue, pour terminer le repas sur une note originale, réservée aux palais les plus curieux.", bouton: "Suivant" },

    { type: "info", image: "photos/chonk.jpg", emoji: "🐈", titre: "CHONK",
      sous: "Directeur général, maître de la maison, sommelier et inspecteur culinaire.",
      titreListe: "Ses prérogatives :",
      liste: [
        "Validation des préférences alimentaires.",
        "Avis consultatif sur les cuissons.",
        "Surveillance des opérations en cuisine.",
        "Droit de veto sur les décisions qu'il ne comprend pas.",
        "Goûteur officiel : évaluation des préparations, selon ses exigences personnelles.",
        "Inspecteur olfactif : contrôle des ingrédients et détection des anomalies suspectes.",
        "Sommelier attitré : sélection et validation des boissons grâce à un odorat particulièrement développé."
      ],
      fin: "Le maître de la maison se réserve le droit de quitter son poste, de s'endormir en cours de service ou de réclamer une pause sans préavis.",
      bouton: "Réserver ma table" },

    { type: "date", id: "date", recap: "Date", titre: "Quel soir te conviendrait le mieux ?",
      jours: [3, 6, 0],        // jours dispo : 0=dim 1=lun 2=mar 3=mer 4=jeu 5=ven 6=sam
      semaines: 6,
      note: "Notre service réservation reste à ton entière disposition pour trouver une date qui te convienne." },

    { type: "choix", id: "heure", recap: "Heure d'arrivée", titre: "À quelle heure souhaites-tu être reçue ?",
      options: ["19h30", "20h00", "20h30"] },

    { type: "choix", id: "allergies", recap: "Allergies et restrictions", titre: "As-tu des allergies ou des restrictions alimentaires ?",
      options: [
        { label: "Aucune, je suis prête à prendre des risques.",
          texte: "Même CHONK ne s'attendait pas à cette réponse. Quelle audace ! Nous apprécions cette confiance aveugle." },
        { label: "Oui, certaines allergies sont à signaler.",
          texte: "Ton dossier médical a été examiné avec la plus grande attention. Nous avons décidé de ne pas en tenir compte." },
        { label: "Je préfère éviter certains aliments.",
          texte: "Tes préférences ont bien été enregistrées. Elles seront étudiées avec attention, puis soumises à l'approbation de CHONK." }] },

    { type: "choix", id: "piment", recap: "Niveau de piment", titre: "Quelle est ta tolérance au piment ?",
      options: [
        { label: "Aucune, je tiens à mes papilles.",
          texte: "Compte tenu de ta fragilité présumée, la décision était évidente : aucun piment supplémentaire ne sera ajouté à ton assiette. Nous souhaitons préserver tes papilles pour la suite du voyage." },
        { label: "Doux, j'aime quand ça réveille.",
          texte: "Une prudence raisonnable. Nous essaierons de trouver l'équilibre entre éveil des papilles et appel aux secours." },
        { label: "Fort, je n'ai peur de rien.",
          texte: "Voilà une déclaration ambitieuse. Nous apprécions les personnes téméraires. Les paroles n'engagent toutefois que celles qui les prononcent.\nSigné : CHONK." },
        { label: "Surprends-moi.",
          texte: "Tu réclames une surprise alors que tu as déjà montré une certaine fragilité face au piment ? Même CHONK demande confirmation." }] },

    { type: "choix", id: "cuisson", recap: "Cuisson", titre: "Quelle cuisson souhaites-tu pour ton entrecôte ?",
      options: [
        { label: "Saignante, comme il se doit.",
          texte: "Excellent choix. Tu marques déjà des points auprès de la personne derrière les fourneaux. CHONK valide également." },
        { label: "À point, pour les indécis.",
          texte: "CHONK refuse catégoriquement ce choix. Selon lui, cette cuisson ne présente aucun intérêt olfactif. On restera donc sur du saignant, sauf incident technique imputable à la personne derrière les fourneaux." },
        { label: "Bien cuite, chacun ses choix.",
          texte: "Demande enregistrée. Une telle cuisson ne pourra être que le résultat d'une négligence de la personne derrière les fourneaux." }] },

    { type: "choix", id: "boisson", recap: "Boisson", titre: "La carte des boissons : que souhaites-tu déguster pour accompagner ton repas ?",
      options: [
        { label: "Saint-Joseph 2021", reponse: "vin" }, { label: "Saint-Joseph 2022", reponse: "vin" },
        { label: "Saint-Joseph 2023", reponse: "vin" }, { label: "Saint-Joseph 2024", reponse: "vin" },
        { label: "Un diabolo", reponse: "diabolo" }],
      reponses: {
        vin: "Excellent choix. Tu as manifestement du goût. CHONK partage entièrement ton avis, bien qu'il soit actuellement incapable de distinguer un Saint-Joseph d'un jus de pâté.",
        diabolo: "Nous apprécions ton audace et ton mépris des conventions œnologiques. CHONK a pris connaissance de ton choix et a préféré quitter la pièce. Nous allons devoir improviser." } },

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

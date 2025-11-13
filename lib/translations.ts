export type Language = "en" | "fr" | "yo" | "ig" | "ha"

export interface Translations {
  appName: string
  appTagline: string
  welcome: string
  getStarted: string
  continueQuiz: string
  startNewQuiz: string
  featuresTitle: string
  featuresDescription: string
  timedQuestionsTitle: string
  timedQuestionsDescription: string
  scoreTrackingTitle: string
  scoreTrackingDescription: string
  instantFeedbackTitle: string
  instantFeedbackDescription: string
  continueButton: string
  customizeQuizTitle: string
  customizeQuizDescription: string
  selectQuizCategoryTitle: string
  selectDifficultyLevelTitle: string
  easy: string
  intermediate: string
  hard: string
  practiceModeTitle: string
  practiceModeDescription: string
  selectCategoryDifficultyButton: string
  startPracticeModeButton: string
  startQuizButton: string
  upToQuestions: string
  multipleChoice: string
  goodLuck: string
  question: string
  of: string
  timeRemaining: string
  score: string
  pause: string
  resume: string
  home: string
  hint: string
  hintsRemaining: string
  correct: string
  incorrect: string
  timeout: string
  explanation: string
  nextQuestion: string
  viewResults: string
  quizComplete: string
  yourScore: string
  reviewAnswers: string
  retakeQuiz: string
  backToHome: string
  correctAnswer: string
  yourAnswer: string
  eliminated: string
}

export const translations: Record<Language, Translations> = {
  en: {
    appName: "SoMoo",
    appTagline: "Ṣé o mọ̀? — Do you know it?",
    welcome: "Welcome to SoMoo",
    getStarted: "Get Started",
    continueQuiz: "Continue Quiz",
    startNewQuiz: "Start New Quiz",
    featuresTitle: "What Makes SoMoo Special?",
    featuresDescription: "Experience the most engaging way to test your knowledge",
    timedQuestionsTitle: "Timed Questions",
    timedQuestionsDescription: "30 seconds per question to keep you focused and engaged",
    scoreTrackingTitle: "Score Tracking",
    scoreTrackingDescription: "Real-time progress monitoring and performance analytics",
    instantFeedbackTitle: "Instant Feedback",
    instantFeedbackDescription: "Get immediate results with detailed explanations",
    continueButton: "Continue",
    customizeQuizTitle: "Customize Your Quiz",
    customizeQuizDescription: "Choose your category and difficulty level to begin",
    selectQuizCategoryTitle: "Select Quiz Category",
    selectDifficultyLevelTitle: "Select Difficulty Level",
    easy: "Easy",
    intermediate: "Intermediate",
    hard: "Hard",
    practiceModeTitle: "Practice Mode",
    practiceModeDescription: "No time limit, focus on learning",
    selectCategoryDifficultyButton: "Select Category & Difficulty",
    startPracticeModeButton: "Start Practice Mode",
    startQuizButton: "Start Quiz",
    upToQuestions: "Up to 10 questions",
    multipleChoice: "Multiple choice",
    goodLuck: "Good luck!",
    question: "Question",
    of: "of",
    timeRemaining: "Time Remaining",
    score: "Score",
    pause: "Pause",
    resume: "Resume",
    home: "Home",
    hint: "Hint",
    hintsRemaining: "hints remaining",
    correct: "Correct",
    incorrect: "Incorrect",
    timeout: "Time's Up",
    explanation: "Explanation",
    nextQuestion: "Next Question",
    viewResults: "View Results",
    quizComplete: "Quiz Complete",
    yourScore: "Your Score",
    reviewAnswers: "Review Answers",
    retakeQuiz: "Retake Quiz",
    backToHome: "Back to Home",
    correctAnswer: "Correct Answer",
    yourAnswer: "Your Answer",
    eliminated: "Eliminated",
  },
  fr: {
    appName: "SoMoo",
    appTagline: "Ṣé o mọ̀? — Le savez-vous?",
    welcome: "Bienvenue à SoMoo",
    getStarted: "Commencer",
    continueQuiz: "Continuer le Quiz",
    startNewQuiz: "Nouveau Quiz",
    featuresTitle: "Qu'est-ce qui rend SoMoo spécial?",
    featuresDescription: "Découvrez la façon la plus engageante de tester vos connaissances",
    timedQuestionsTitle: "Questions Chronométrées",
    timedQuestionsDescription: "30 secondes par question pour rester concentré et engagé",
    scoreTrackingTitle: "Suivi du Score",
    scoreTrackingDescription: "Surveillance en temps réel et analyses de performance",
    instantFeedbackTitle: "Retour Instantané",
    instantFeedbackDescription: "Obtenez des résultats immédiats avec des explications détaillées",
    continueButton: "Continuer",
    customizeQuizTitle: "Personnalisez Votre Quiz",
    customizeQuizDescription: "Choisissez votre catégorie et niveau de difficulté pour commencer",
    selectQuizCategoryTitle: "Sélectionner une Catégorie",
    selectDifficultyLevelTitle: "Sélectionner le Niveau de Difficulté",
    easy: "Facile",
    intermediate: "Intermédiaire",
    hard: "Difficile",
    practiceModeTitle: "Mode Pratique",
    practiceModeDescription: "Pas de limite de temps, concentrez-vous sur l'apprentissage",
    selectCategoryDifficultyButton: "Sélectionner Catégorie & Difficulté",
    startPracticeModeButton: "Démarrer Mode Pratique",
    startQuizButton: "Démarrer le Quiz",
    upToQuestions: "Jusqu'à 10 questions",
    multipleChoice: "Choix multiples",
    goodLuck: "Bonne chance!",
    question: "Question",
    of: "de",
    timeRemaining: "Temps Restant",
    score: "Score",
    pause: "Pause",
    resume: "Reprendre",
    home: "Accueil",
    hint: "Indice",
    hintsRemaining: "indices restants",
    correct: "Correct",
    incorrect: "Incorrect",
    timeout: "Temps Écoulé",
    explanation: "Explication",
    nextQuestion: "Question Suivante",
    viewResults: "Voir les Résultats",
    quizComplete: "Quiz Terminé",
    yourScore: "Votre Score",
    reviewAnswers: "Revoir les Réponses",
    retakeQuiz: "Refaire le Quiz",
    backToHome: "Retour à l'Accueil",
    correctAnswer: "Réponse Correcte",
    yourAnswer: "Votre Réponse",
    eliminated: "Éliminé",
  },
  yo: {
    appName: "SoMoo",
    appTagline: "Ṣé o mọ̀? — Ṣé o mọ̀ ọ́?",
    welcome: "Káàbọ̀ sí SoMoo",
    getStarted: "Bẹ̀rẹ̀",
    continueQuiz: "Tẹ̀síwájú pẹ̀lú Ìdánwò",
    startNewQuiz: "Bẹ̀rẹ̀ Ìdánwò Tuntun",
    featuresTitle: "Kí ni ó jẹ́ kí SoMoo ṣe pàtàkì?",
    featuresDescription: "Ní ìrírí ọ̀nà tó dára jù láti dánwò ìmọ̀ rẹ",
    timedQuestionsTitle: "Àwọn Ìbéèrè Aago",
    timedQuestionsDescription: "Ìṣẹ́jú àáyà 30 fún ìbéèrè kọ̀ọ̀kan láti jẹ́ kí o dójútì",
    scoreTrackingTitle: "Títẹ̀lé Àmì",
    scoreTrackingDescription: "Títọ́jú ìlọsíwájú àti ìtúpalẹ̀ ìṣẹ́",
    instantFeedbackTitle: "Ìdáhùn Lẹ́sẹ̀kẹsẹ̀",
    instantFeedbackDescription: "Gba àbájáde lẹ́sẹ̀kẹsẹ̀ pẹ̀lú àlàyé",
    continueButton: "Tẹ̀síwájú",
    customizeQuizTitle: "Ṣàtúntò Ìdánwò Rẹ",
    customizeQuizDescription: "Yan ẹ̀ka àti ìpele ìṣòro láti bẹ̀rẹ̀",
    selectQuizCategoryTitle: "Yan Ẹ̀ka Ìdánwò",
    selectDifficultyLevelTitle: "Yan Ìpele Ìṣòro",
    easy: "Rọrùn",
    intermediate: "Àárín",
    hard: "Ṣòro",
    practiceModeTitle: "Ọ̀nà Ìkẹ́kọ̀ọ́",
    practiceModeDescription: "Kò sí òpin àkókò, dójútì kíkọ́",
    selectCategoryDifficultyButton: "Yan Ẹ̀ka & Ìṣòro",
    startPracticeModeButton: "Bẹ̀rẹ̀ Ọ̀nà Ìkẹ́kọ̀ọ́",
    startQuizButton: "Bẹ̀rẹ̀ Ìdánwò",
    upToQuestions: "Títí dé ìbéèrè 10",
    multipleChoice: "Ìyàn púpọ̀",
    goodLuck: "Oríire!",
    question: "Ìbéèrè",
    of: "nínú",
    timeRemaining: "Àkókò Tókù",
    score: "Àmì",
    pause: "Dúró",
    resume: "Tẹ̀síwájú",
    home: "Ilé",
    hint: "Ìtọ́kasí",
    hintsRemaining: "àwọn ìtọ́kasí tókù",
    correct: "Tọ́",
    incorrect: "Kò Tọ́",
    timeout: "Àkókò Ti Parí",
    explanation: "Àlàyé",
    nextQuestion: "Ìbéèrè Tókàn",
    viewResults: "Wo Èsì",
    quizComplete: "Ìdánwò Ti Parí",
    yourScore: "Àmì Rẹ",
    reviewAnswers: "Ṣàtúnyẹ̀wò Àwọn Ìdáhùn",
    retakeQuiz: "Tun Ìdánwò Ṣe",
    backToHome: "Padà Sí Ilé",
    correctAnswer: "Ìdáhùn Tọ́",
    yourAnswer: "Ìdáhùn Rẹ",
    eliminated: "Yọ̀ Kúrò",
  },
  ig: {
    appName: "SoMoo",
    appTagline: "Ṣé o mọ̀? — Ị maara ya?",
    welcome: "Nnọọ na SoMoo",
    getStarted: "Malite",
    continueQuiz: "Gaa n'ihu na Ajụjụ",
    startNewQuiz: "Malite Ajụjụ Ọhụrụ",
    featuresTitle: "Gịnị mere SoMoo ji pụta ìchè?",
    featuresDescription: "Nweta ụzọ kachasị mma iji nwalee ihe ị maara",
    timedQuestionsTitle: "Ajụjụ Oge",
    timedQuestionsDescription: "Sekọnd 30 maka ajụjụ ọ bụla iji debe gị na-elekwasị anya",
    scoreTrackingTitle: "Nsochi Akara",
    scoreTrackingDescription: "Nlekota ọganihu na nyocha arụmọrụ",
    instantFeedbackTitle: "Nzaghachi Ozugbo",
    instantFeedbackDescription: "Nweta nsonaazụ ozugbo na nkọwa zuru ezu",
    continueButton: "Gaa n'ihu",
    customizeQuizTitle: "Hazie Ajụjụ Gị",
    customizeQuizDescription: "Họrọ ụdị na ọkwa isiike iji malite",
    selectQuizCategoryTitle: "Họrọ Ụdị Ajụjụ",
    selectDifficultyLevelTitle: "Họrọ Ọkwa Isiike",
    easy: "Dị Mfe",
    intermediate: "Etiti",
    hard: "Sie Ike",
    practiceModeTitle: "Ụdị Omume",
    practiceModeDescription: "Enweghị oke oge, lekwasị anya na mmụta",
    selectCategoryDifficultyButton: "Họrọ Ụdị & Isiike",
    startPracticeModeButton: "Malite Ụdị Omume",
    startQuizButton: "Malite Ajụjụ",
    upToQuestions: "Ruo ajụjụ 10",
    multipleChoice: "Nhọrọ ọtụtụ",
    goodLuck: "Ọ ga-adị gị mma!",
    question: "Ajụjụ",
    of: "nke",
    timeRemaining: "Oge Fọdụrụ",
    score: "Akara",
    pause: "Kwụsịtụ",
    resume: "Gaa n'ihu",
    home: "Ụlọ",
    hint: "Ntụnye Aka",
    hintsRemaining: "ntụnye aka fọdụrụ",
    correct: "Ziri Ezi",
    incorrect: "Ezighi Ezi",
    timeout: "Oge Agwụla",
    explanation: "Nkọwa",
    nextQuestion: "Ajụjụ Ọzọ",
    viewResults: "Lee Nsonaazụ",
    quizComplete: "Ajụjụ Agwụla",
    yourScore: "Akara Gị",
    reviewAnswers: "Nyochaa Azịza",
    retakeQuiz: "Megharia Ajụjụ",
    backToHome: "Laghachi n'Ụlọ",
    correctAnswer: "Azịza Ziri Ezi",
    yourAnswer: "Azịza Gị",
    eliminated: "Ewepụrụ",
  },
  ha: {
    appName: "SoMoo",
    appTagline: "Ṣé o mọ̀? — Kun san?",
    welcome: "Maraba zuwa SoMoo",
    getStarted: "Fara",
    continueQuiz: "Ci gaba da Tambaya",
    startNewQuiz: "Fara Sabon Tambaya",
    featuresTitle: "Me yasa SoMoo ya bambanta?",
    featuresDescription: "Sami hanyar mafi kyawun gwada iliminku",
    timedQuestionsTitle: "Tambayoyin Lokaci",
    timedQuestionsDescription: "Daƙiƙa 30 ga kowace tambaya don kiyaye hankalinku",
    scoreTrackingTitle: "Bin Maki",
    scoreTrackingDescription: "Sa ido kan ci gaba da nazarin aiki",
    instantFeedbackTitle: "Martani Nan Take",
    instantFeedbackDescription: "Samu sakamako nan take tare da cikakken bayani",
    continueButton: "Ci Gaba",
    customizeQuizTitle: "Tsara Tambayar Ku",
    customizeQuizDescription: "Zaɓi nau'i da matsayin wahala don farawa",
    selectQuizCategoryTitle: "Zaɓi Nau'in Tambaya",
    selectDifficultyLevelTitle: "Zaɓi Matsayin Wahala",
    easy: "Mai Sauƙi",
    intermediate: "Matsakaici",
    hard: "Mai Wahala",
    practiceModeTitle: "Yanayin Aiki",
    practiceModeDescription: "Babu iyakar lokaci, mai da hankali kan koyo",
    selectCategoryDifficultyButton: "Zaɓi Nau'i & Wahala",
    startPracticeModeButton: "Fara Yanayin Aiki",
    startQuizButton: "Fara Tambaya",
    upToQuestions: "Har tambayoyi 10",
    multipleChoice: "Zaɓuɓɓuka da yawa",
    goodLuck: "Ku yi nasara!",
    question: "Tambaya",
    of: "na",
    timeRemaining: "Lokacin da Ya Rage",
    score: "Maki",
    pause: "Tsaya",
    resume: "Ci Gaba",
    home: "Gida",
    hint: "Alamar",
    hintsRemaining: "alamomi sun rage",
    correct: "Daidai",
    incorrect: "Ba Daidai Ba",
    timeout: "Lokaci Ya Ƙare",
    explanation: "Bayani",
    nextQuestion: "Tambaya Ta Gaba",
    viewResults: "Duba Sakamako",
    quizComplete: "Tambaya Ta Ƙare",
    yourScore: "Makin Ku",
    reviewAnswers: "Sake Duba Amsoshi",
    retakeQuiz: "Sake Tambaya",
    backToHome: "Koma Gida",
    correctAnswer: "Amsar Da Ta Dace",
    yourAnswer: "Amsar Ku",
    eliminated: "An Cire",
  },
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en
}

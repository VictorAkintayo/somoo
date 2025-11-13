export type QuizType =
  | "Technology"
  | "Academia"
  | "Engineering"
  | "Law"
  | "Economics"
  | "General"
  | "Science"
  | "History"
  | "Politics"
  | "Music"
  | "Sports"
  | "Fun"

export type DifficultyLevel = "Easy" | "Intermediate" | "Hard"

export interface Question {
  question: string
  options: string[]
  correctAnswer: number
  category: QuizType
  difficulty: DifficultyLevel
  explanation: string
}

// Utility function to shuffle options and update correct answer index
function shuffleOptions(question: Omit<Question, "correctAnswer"> & { correctAnswer: number }): Question {
  const correctOption = question.options[question.correctAnswer]
  const shuffled = [...question.options].sort(() => Math.random() - 0.5)
  const newCorrectIndex = shuffled.indexOf(correctOption)

  return {
    ...question,
    options: shuffled,
    correctAnswer: newCorrectIndex,
  }
}

// Create questions without shuffling (will shuffle at runtime)
const RAW_QUIZ_DATA: Question[] = [
  // Technology - Easy (10 questions)
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "HTML (Hyper Text Markup Language) is the standard markup language for creating web pages and web applications.",
  },
  {
    question: "Which company developed the iPhone?",
    options: ["Samsung", "Apple", "Google", "Microsoft"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Easy",
    explanation: "Apple Inc. introduced the first iPhone in 2007, revolutionizing the smartphone industry.",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Computer Processing Unit",
    ],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Easy",
    explanation: "The CPU is the brain of the computer, responsible for executing instructions and processing data.",
  },
  {
    question: "What does USB stand for?",
    options: ["Universal Serial Bus", "Universal System Board", "United Serial Bus", "Universal Service Bus"],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "USB is an industry standard for cables, connectors, and protocols for connection and power supply between computers and peripheral devices.",
  },
  {
    question: "Which of these is a web browser?",
    options: ["Python", "Chrome", "Windows", "Excel"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "Google Chrome is one of the most popular web browsers, used to access and view websites on the internet.",
  },
  {
    question: "What does WWW stand for?",
    options: ["World Wide Web", "World Wide Wait", "Web Wide World", "World Web Wide"],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "The World Wide Web is an information system where documents and resources are identified by URLs and accessed via the internet.",
  },
  {
    question: "What is the most popular programming language for web development?",
    options: ["Python", "JavaScript", "C++", "Ruby"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "JavaScript is the most widely used programming language for creating interactive effects within web browsers.",
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Real Access Memory"],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "RAM is a type of computer memory that can be read and changed in any order, typically used to store working data and machine code.",
  },
  {
    question: "Which company created the Android operating system?",
    options: ["Apple", "Microsoft", "Google", "Samsung"],
    correctAnswer: 2,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "Google acquired Android Inc. in 2005 and has developed the Android operating system for mobile devices.",
  },
  {
    question: "What is the main function of an operating system?",
    options: ["Browse the internet", "Manage computer hardware and software", "Create documents", "Play games"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Easy",
    explanation:
      "An operating system manages computer hardware, software resources, and provides common services for computer programs.",
  },

  // Technology - Intermediate (10 questions)
  {
    question: "Which programming language is known as the 'language of the web'?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Intermediate",
    explanation:
      "JavaScript is often referred to as the 'language of the web' due to its widespread use in front-end web development.",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Intermediate",
    explanation:
      "Binary search has a time complexity of O(log n) because it halves the search space with each comparison.",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Process Integration",
      "Advanced Process Interface",
    ],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Intermediate",
    explanation: "An API allows different software applications to communicate with each other.",
  },
  {
    question: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Intermediate",
    explanation:
      "A stack is a data structure that follows the LIFO principle, where the last element added is the first one to be removed.",
  },
  {
    question: "What is the purpose of Git?",
    options: ["Database management", "Version control", "Web hosting", "Image editing"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Intermediate",
    explanation:
      "Git is a distributed version control system used for tracking changes in source code during software development.",
  },
  {
    question: "Which protocol is used for secure web communication?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    correctAnswer: 2,
    category: "Technology",
    difficulty: "Intermediate",
    explanation:
      "HTTPS (Hypertext Transfer Protocol Secure) encrypts communication between a browser and a website for security.",
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Intermediate",
    explanation: "SQL is a domain-specific language used for managing and querying relational databases.",
  },
  {
    question: "Which is NOT a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correctAnswer: 3,
    category: "Technology",
    difficulty: "Intermediate",
    explanation: "Django is a Python web framework, while React, Angular, and Vue are JavaScript frameworks.",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["21", "80", "443", "8080"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Intermediate",
    explanation: "HTTP (Hypertext Transfer Protocol) typically uses port 80 for communication.",
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Intermediate",
    explanation: "CSS is used to style and layout web pages, controlling aspects like colors, fonts, and spacing.",
  },

  // Technology - Hard (10 questions)
  {
    question: "What consensus algorithm does Bitcoin use?",
    options: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "Bitcoin utilizes the Proof of Work (PoW) consensus algorithm to secure its network and validate transactions.",
  },
  {
    question: "Which design pattern ensures a class has only one instance?",
    options: ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Strategy Pattern"],
    correctAnswer: 2,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "The Singleton pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to it.",
  },
  {
    question: "What is the CAP theorem in distributed systems?",
    options: [
      "Consistency, Availability, Partition tolerance",
      "Concurrency, Authentication, Performance",
      "Cache, API, Protocol",
      "Compute, Access, Processing",
    ],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance.",
  },
  {
    question: "Which sorting algorithm has the best average time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "Quick Sort generally has an average time complexity of O(n log n), which is considered very efficient for sorting.",
  },
  {
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is faster than UDP",
      "TCP is connection-oriented, UDP is connectionless",
      "UDP is more reliable than TCP",
      "They are the same",
    ],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "TCP establishes a reliable, ordered connection, while UDP is faster but less reliable as it doesn't guarantee delivery or order.",
  },
  {
    question: "What does ACID stand for in database transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Identity, Data",
      "Authentication, Connection, Integration, Distribution",
      "Application, Cache, Index, Database",
    ],
    correctAnswer: 0,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "ACID properties ensure reliable transaction processing in databases: Atomicity, Consistency, Isolation, and Durability.",
  },
  {
    question: "Which algorithm is used for public key cryptography?",
    options: ["AES", "DES", "RSA", "MD5"],
    correctAnswer: 2,
    category: "Technology",
    difficulty: "Hard",
    explanation: "RSA (Rivest–Shamir–Adleman) is a widely used public-key cryptosystem for secure data transmission.",
  },
  {
    question: "What is the purpose of a Virtual DOM in React?",
    options: ["Store user data", "Optimize rendering performance", "Handle routing", "Manage state"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Hard",
    explanation:
      "A Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM, improving performance.",
  },
  {
    question: "What is the time complexity of the best comparison-based sorting algorithm?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Hard",
    explanation: "The theoretical lower bound for comparison-based sorting algorithms is O(n log n).",
  },
  {
    question: "Which layer of the OSI model handles routing?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    correctAnswer: 2,
    category: "Technology",
    difficulty: "Hard",
    explanation: "The Network Layer (Layer 3) of the OSI model is responsible for routing packets across networks.",
  },

  // Science - Easy (10 questions)
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "HO"],
    correctAnswer: 0,
    category: "Science",
    difficulty: "Easy",
    explanation: "Water is composed of two hydrogen atoms and one oxygen atom, hence its chemical formula is H₂O.",
  },
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Easy",
    explanation:
      "There are eight planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy",
    explanation: "Plants absorb carbon dioxide from the atmosphere for photosynthesis.",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    correctAnswer: 3,
    category: "Science",
    difficulty: "Easy",
    explanation: "The skin is the largest organ of the human body, covering the entire external surface.",
  },
  {
    question: "At what temperature does water boil (in Celsius)?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy",
    explanation: "Water boils at 100 degrees Celsius (212 degrees Fahrenheit) at standard atmospheric pressure.",
  },
  {
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Electricity", "Gravity", "Friction"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy",
    explanation: "Gravity is the force of attraction between any two objects with mass, keeping us on Earth's surface.",
  },
  {
    question: "How many bones are in the adult human body?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Easy",
    explanation: "An adult human skeleton typically consists of 206 bones.",
  },
  {
    question: "What is the center of an atom called?",
    options: ["Electron", "Proton", "Nucleus", "Neutron"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy",
    explanation: "The nucleus is the dense central part of an atom, containing protons and neutrons.",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy",
    explanation: "Mercury is the innermost planet in our solar system.",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy",
    explanation: "The chemical symbol for gold is Au, derived from its Latin name, aurum.",
  },

  // Science - Intermediate (10 questions)
  {
    question: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0,
    category: "Science",
    difficulty: "Intermediate",
    explanation:
      "The speed of light in a vacuum is approximately 299,792 kilometers per second (often rounded to 300,000 km/s).",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Intermediate",
    explanation:
      "Mitochondria are often called the 'powerhouses' of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.",
  },
  {
    question: "What type of bond involves the sharing of electron pairs?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Intermediate",
    explanation:
      "A covalent bond is formed when atoms share electron pairs to achieve a stable electron configuration.",
  },
  {
    question: "What is the pH of pure water?",
    options: ["5", "7", "9", "11"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Intermediate",
    explanation: "Pure water has a neutral pH of 7 at 25°C.",
  },
  {
    question: "Which blood type is considered the universal donor?",
    options: ["A", "B", "AB", "O"],
    correctAnswer: 3,
    category: "Science",
    difficulty: "Intermediate",
    explanation:
      "Type O negative blood is considered the universal donor because it can be transfused to patients of any blood type.",
  },
  {
    question: "What is Newton's second law of motion?",
    options: ["F = ma", "E = mc²", "V = IR", "PV = nRT"],
    correctAnswer: 0,
    category: "Science",
    difficulty: "Intermediate",
    explanation:
      "Newton's second law states that the acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass (F=ma).",
  },
  {
    question: "How many chromosomes do humans have?",
    options: ["23", "46", "48", "92"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Intermediate",
    explanation: "Humans typically have 46 chromosomes, arranged in 23 pairs.",
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Intermediate",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
  },
  {
    question: "What is the process by which plants make food?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Intermediate",
    explanation:
      "Photosynthesis is the process used by plants and other organisms to convert light energy into chemical energy, stored in the form of glucose.",
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Atom", "Molecule", "Cell", "Tissue"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Intermediate",
    explanation: "The cell is considered the basic structural and functional unit of all known living organisms.",
  },

  // Science - Hard (10 questions)
  {
    question: "What is the Heisenberg Uncertainty Principle related to?",
    options: ["Chemical reactions", "Quantum mechanics", "Thermodynamics", "Relativity"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "The Heisenberg Uncertainty Principle is a fundamental concept in quantum mechanics that states there's a limit to the precision with which certain pairs of physical properties of a particle, like position and momentum, can be known.",
  },
  {
    question: "What is Avogadro's number?",
    options: ["6.022 × 10²³", "3.14 × 10⁸", "1.602 × 10⁻¹⁹", "9.81 × 10¹"],
    correctAnswer: 0,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "Avogadro's number is the number of constituent particles, usually atoms or molecules, that are contained in the amount of substance given by one mole, approximately 6.022 × 10²³.",
  },
  {
    question: "What particle is exchanged in electromagnetic interactions?",
    options: ["Gluon", "Photon", "W boson", "Graviton"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "The photon is the fundamental particle of light and the quantum of the electromagnetic field, responsible for electromagnetic force.",
  },
  {
    question: "What is the half-life of Carbon-14?",
    options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"],
    correctAnswer: 0,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "The half-life of Carbon-14, a radioactive isotope used in radiocarbon dating, is approximately 5,730 years.",
  },
  {
    question: "What is the Schwarzschild radius?",
    options: [
      "Distance from Earth to Moon",
      "Radius of a black hole's event horizon",
      "Size of an atom",
      "Orbital radius of planets",
    ],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "The Schwarzschild radius is the radius of the sphere from which, if all the mass of an object were compressed within it, the escape velocity would equal the speed of light. It represents the boundary of a non-rotating black hole's event horizon.",
  },
  {
    question: "Which enzyme breaks down starch in the mouth?",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Hard",
    explanation: "Salivary amylase is an enzyme found in saliva that begins the digestion of starches into sugars.",
  },
  {
    question: "What is the principle behind MRI machines?",
    options: ["X-ray diffraction", "Nuclear magnetic resonance", "Ultrasound waves", "Radioactive decay"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "MRI (Magnetic Resonance Imaging) uses the principle of nuclear magnetic resonance to create detailed images of organs and tissues.",
  },
  {
    question: "What is the name of the effect where time dilates near massive objects?",
    options: ["Doppler Effect", "Photoelectric Effect", "Gravitational Time Dilation", "Compton Effect"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "Gravitational time dilation is a consequence of Einstein's theory of general relativity, stating that time passes slower in stronger gravitational fields.",
  },
  {
    question: "Which cycle describes carbon movement through the biosphere?",
    options: ["Krebs Cycle", "Calvin Cycle", "Carbon Cycle", "Nitrogen Cycle"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "The Carbon Cycle describes the process by which carbon atoms continually travel from the atmosphere to the Earth and then back into the atmosphere.",
  },
  {
    question: "What is the quantum mechanical model that describes electron orbitals?",
    options: ["Bohr Model", "Rutherford Model", "Schrödinger Model", "Dalton Model"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Hard",
    explanation:
      "The Schrödinger model, based on the Schrödinger equation, describes electrons in atoms and molecules as wave functions, defining probability distributions for their location (orbitals).",
  },

  // History - Easy (10 questions)
  {
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    category: "History",
    difficulty: "Easy",
    explanation: "World War II officially ended on September 2, 1945, with the surrender of Japan.",
  },
  {
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Easy",
    explanation: "George Washington was unanimously elected as the first President of the United States in 1789.",
  },
  {
    question: "Which ancient wonder is still standing today?",
    options: ["Hanging Gardens of Babylon", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
    correctAnswer: 2,
    category: "History",
    difficulty: "Easy",
    explanation:
      "The Great Pyramid of Giza is the only one of the Seven Wonders of the Ancient World that still exists.",
  },
  {
    question: "In which year did Christopher Columbus reach the Americas?",
    options: ["1492", "1500", "1520", "1450"],
    correctAnswer: 0,
    category: "History",
    difficulty: "Easy",
    explanation: "Christopher Columbus made his first voyage across the Atlantic and reached the Americas in 1492.",
  },
  {
    question: "Who was known as the 'Maid of Orleans'?",
    options: ["Marie Antoinette", "Joan of Arc", "Catherine the Great", "Queen Victoria"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Easy",
    explanation:
      "Joan of Arc, a national heroine of France, was known as the 'Maid of Orleans' for her role in the Hundred Years' War.",
  },
  {
    question: "Which empire was ruled by Julius Caesar?",
    options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Easy",
    explanation: "Julius Caesar was a key figure in the transition of the Roman Republic into the Roman Empire.",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1910", "1912", "1914", "1916"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Easy",
    explanation: "The RMS Titanic sank on its maiden voyage on April 15, 1912, after hitting an iceberg.",
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    correctAnswer: 2,
    category: "History",
    difficulty: "Easy",
    explanation: "Michelangelo painted the iconic frescoes on the ceiling of the Sistine Chapel in Vatican City.",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["England", "Spain", "France", "Italy"],
    correctAnswer: 2,
    category: "History",
    difficulty: "Easy",
    explanation: "France gifted the Statue of Liberty to the United States as a symbol of friendship.",
  },
  {
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Easy",
    explanation: "Alexander Graham Bell is credited with inventing the first practical telephone in 1876.",
  },

  // History - Intermediate (10 questions)
  {
    question: "The fall of the Berlin Wall occurred in which year?",
    options: ["1987", "1989", "1991", "1993"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Intermediate",
    explanation:
      "The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War and the division of Germany.",
  },
  {
    question: "Which document was signed in 1215 limiting the power of the English king?",
    options: ["Magna Carta", "Bill of Rights", "Declaration of Independence", "Constitution"],
    correctAnswer: 0,
    category: "History",
    difficulty: "Intermediate",
    explanation:
      "The Magna Carta, signed in 1215, was a charter of rights agreed to by King John of England, limiting the monarch's power.",
  },
  {
    question: "Who was the first emperor of Rome?",
    options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Intermediate",
    explanation:
      "Augustus, formerly Octavian, was the first Roman emperor, reigning from 27 BC until his death in 14 AD.",
  },
  {
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1952"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Intermediate",
    explanation: "India gained independence from British rule on August 15, 1947.",
  },
  {
    question: "What was the name of the ship that brought the Pilgrims to America?",
    options: ["Mayflower", "Santa Maria", "Victoria", "Endeavour"],
    correctAnswer: 0,
    category: "History",
    difficulty: "Intermediate",
    explanation: "The Mayflower carried the Pilgrims from Plymouth, England, to Plymouth, Massachusetts, in 1620.",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Malala Yousafzai"],
    correctAnswer: 0,
    category: "History",
    difficulty: "Intermediate",
    explanation:
      "Marie Curie, a physicist and chemist, was the first woman to win a Nobel Prize, awarded in Physics in 1903.",
  },
  {
    question: "What was the Cold War?",
    options: ["A war fought in winter", "Tension between USA and USSR", "A war in Antarctica", "A nuclear war"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Intermediate",
    explanation:
      "The Cold War was a period of geopolitical tension between the United States and the Soviet Union and their respective allies, lasting from roughly 1947 to 1991.",
  },
  {
    question: "Which civilization built Machu Picchu?",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correctAnswer: 2,
    category: "History",
    difficulty: "Intermediate",
    explanation:
      "Machu Picchu, a 15th-century Inca citadel, is located in the Eastern Cordillera of the Andes Mountains in Peru.",
  },
  {
    question: "In which year did the French Revolution begin?",
    options: ["1776", "1789", "1799", "1804"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Intermediate",
    explanation: "The French Revolution began in 1789 with the storming of the Bastille.",
  },
  {
    question: "Who was the leader of the Soviet Union during World War II?",
    options: ["Lenin", "Stalin", "Khrushchev", "Brezhnev"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Intermediate",
    explanation: "Joseph Stalin was the leader of the Soviet Union during World War II.",
  },

  // History - Hard (10 questions)
  {
    question: "The Treaty of Westphalia (1648) ended which war?",
    options: ["Hundred Years' War", "Thirty Years' War", "Seven Years' War", "War of Spanish Succession"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation: "The Peace of Westphalia, signed in 1648, ended the Thirty Years' War in Europe.",
  },
  {
    question: "Which Byzantine emperor codified Roman law?",
    options: ["Constantine", "Justinian", "Theodosius", "Heraclius"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation: "Emperor Justinian I is famous for his codification of Roman law, known as the Corpus Juris Civilis.",
  },
  {
    question: "What year did the Battle of Hastings take place?",
    options: ["1066", "1215", "1492", "1588"],
    correctAnswer: 0,
    category: "History",
    difficulty: "Hard",
    explanation: "The Battle of Hastings, a pivotal event in English history, took place in 1066.",
  },
  {
    question: "Who was the last Tsar of Russia?",
    options: ["Alexander II", "Alexander III", "Nicholas I", "Nicholas II"],
    correctAnswer: 3,
    category: "History",
    difficulty: "Hard",
    explanation: "Nicholas II was the last Emperor of Russia, overthrown in the Russian Revolution of 1917.",
  },
  {
    question: "Which empire was ruled by Suleiman the Magnificent?",
    options: ["Mughal Empire", "Ottoman Empire", "Safavid Empire", "Byzantine Empire"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation: "Suleiman the Magnificent was the tenth and longest-reigning Sultan of the Ottoman Empire.",
  },
  {
    question: "What was the Silk Road?",
    options: ["A road made of silk", "Ancient trade routes", "A river in China", "A military campaign"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation:
      "The Silk Road was a network of ancient trade routes connecting the East and West, crucial for the exchange of goods and culture.",
  },
  {
    question: "Who wrote 'The Prince', a political treatise?",
    options: ["Thomas More", "Machiavelli", "Voltaire", "Rousseau"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation: "'The Prince' (Il Principe) is a 16th-century political treatise by Niccolò Machiavelli.",
  },
  {
    question: "Which treaty ended World War I?",
    options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Westphalia", "Treaty of Vienna"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation: "The Treaty of Versailles, signed in 1919, officially ended World War I.",
  },
  {
    question: "What was the Scramble for Africa?",
    options: [
      "African independence movements",
      "European colonization of Africa",
      "African trade routes",
      "African cultural exchange",
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation:
      "The Scramble for Africa was the invasion, occupation, division, and colonization of most of Africa by European powers during the New Imperialism period.",
  },
  {
    question: "Who was the founder of the Mongol Empire?",
    options: ["Kublai Khan", "Genghis Khan", "Tamerlane", "Attila the Hun"],
    correctAnswer: 1,
    category: "History",
    difficulty: "Hard",
    explanation: "Genghis Khan (born Temüjin) founded the Mongol Empire in the early 13th century.",
  },

  // Academia - Easy (10 questions)
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    category: "Academia",
    difficulty: "Easy",
    explanation: "The square root of 144 is 12 because 12 * 12 = 144.",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Easy",
    explanation: "'Romeo and Juliet' is one of William Shakespeare's most famous tragic plays.",
  },
  {
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "60"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Easy",
    explanation: "7 multiplied by 8 equals 56.",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Easy",
    explanation: "A hexagon is a six-sided polygon.",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    category: "Academia",
    difficulty: "Easy",
    explanation: "Tokyo is the capital and largest city of Japan.",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Academia",
    difficulty: "Easy",
    explanation:
      "There are generally considered to be seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
  },
  {
    question: "What is 25% of 200?",
    options: ["25", "50", "75", "100"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Easy",
    explanation: "25% of 200 is calculated as (25/100) * 200 = 50.",
  },
  {
    question: "Who wrote 'The Odyssey'?",
    options: ["Virgil", "Homer", "Sophocles", "Aristotle"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Easy",
    explanation: "'The Odyssey' is an ancient Greek epic poem attributed to the poet Homer.",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    category: "Academia",
    difficulty: "Easy",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The smallest prime number is 2.",
  },
  {
    question: "How many degrees are in a right angle?",
    options: ["45", "60", "90", "180"],
    correctAnswer: 2,
    category: "Academia",
    difficulty: "Easy",
    explanation: "A right angle measures exactly 90 degrees.",
  },

  // Academia - Intermediate (10 questions)
  {
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x²", "2"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation: "Using the power rule of differentiation, the derivative of x² is 2x.",
  },
  {
    question: "What is the quadratic formula?",
    options: [
      "x = -b ± √(b² - 4ac) / 2a",
      "x = b ± √(b² + 4ac) / 2a",
      "x = -b ± √(b² + 4ac) / a",
      "x = b ± √(b² - 4ac) / a",
    ],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Intermediate",
    explanation:
      "The quadratic formula is used to find the roots of a quadratic equation of the form ax² + bx + c = 0.",
  },
  {
    question: "What is the value of π (pi) approximately?",
    options: ["2.14", "3.14", "4.14", "5.14"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation: "Pi (π) is the ratio of a circle's circumference to its diameter, approximately equal to 3.14159.",
  },
  {
    question: "Who wrote '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation: "'1984' is a dystopian social science fiction novel by English novelist George Orwell.",
  },
  {
    question: "What is the Pythagorean theorem?",
    options: ["a + b = c", "a² + b² = c²", "a × b = c", "a² × b² = c²"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation:
      "The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides (a² + b² = c²).",
  },
  {
    question: "What is the sum of angles in a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation: "The sum of the interior angles of any triangle is always 180 degrees.",
  },
  {
    question: "Who painted 'The Starry Night'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation:
      "'The Starry Night' is a famous oil painting by the Dutch Post-Impressionist painter Vincent van Gogh.",
  },
  {
    question: "What is the formula for the area of a circle?",
    options: ["πr", "πr²", "2πr", "πd"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius.",
  },
  {
    question: "What does the term 'renaissance' mean?",
    options: ["Rebirth", "Revolution", "Reform", "Renewal"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Intermediate",
    explanation:
      "The Renaissance was a period of European cultural, artistic, political, and economic 'rebirth' following the Middle Ages.",
  },
  {
    question: "What is an isosceles triangle?",
    options: ["All sides equal", "Two sides equal", "No sides equal", "One right angle"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Intermediate",
    explanation: "An isosceles triangle is a triangle that has two sides of equal length.",
  },

  // Academia - Hard (10 questions)
  {
    question: "Who developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
    correctAnswer: 1,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "Albert Einstein developed the theory of general relativity, which describes gravity as a curvature of spacetime.",
  },
  {
    question: "What is the integral of 1/x?",
    options: ["ln|x| + C", "x² + C", "1/x² + C", "e^x + C"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "The indefinite integral of 1/x is the natural logarithm of the absolute value of x, plus a constant of integration C.",
  },
  {
    question: "What is Euler's identity?",
    options: ["e^(iπ) + 1 = 0", "e^(iπ) - 1 = 0", "e^(iπ) = 1", "e^(π) + i = 0"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "Euler's identity, e^(iπ) + 1 = 0, is considered one of the most beautiful equations in mathematics, connecting five fundamental constants.",
  },
  {
    question: "Who wrote 'Critique of Pure Reason'?",
    options: ["Immanuel Kant", "Friedrich Nietzsche", "René Descartes", "John Locke"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation: "'Critique of Pure Reason' is a central work of the philosopher Immanuel Kant, published in 1781.",
  },
  {
    question: "What is the Riemann Hypothesis about?",
    options: ["Distribution of prime numbers", "Geometry of space", "Theory of relativity", "Quantum mechanics"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "The Riemann Hypothesis is a conjecture about the distribution of the zeros of the Riemann zeta function, which is deeply connected to the distribution of prime numbers.",
  },
  {
    question: "What is Gödel's Incompleteness Theorem?",
    options: [
      "Some mathematical truths cannot be proven",
      "All math is incomplete",
      "Mathematics is inconsistent",
      "Logic is flawed",
    ],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "Gödel's Incompleteness Theorems, formulated by Kurt Gödel, state that in any consistent formal system of mathematics powerful enough to describe the arithmetic of the natural numbers, there will always be true statements that cannot be proven within the system.",
  },
  {
    question: "What is the Hegelian dialectic?",
    options: ["Thesis, Antithesis, Synthesis", "Cause and Effect", "Trial and Error", "Question and Answer"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "The Hegelian dialectic is a philosophical concept by G.W.F. Hegel, describing a process of change driven by the interplay of thesis, antithesis, and synthesis.",
  },
  {
    question: "What is Fermat's Last Theorem?",
    options: [
      "No three positive integers satisfy a^n + b^n = c^n for n > 2",
      "All primes are odd",
      "π is irrational",
      "e is transcendental",
    ],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "Fermat's Last Theorem states that no three positive integers a, b, and c satisfy the equation aⁿ + bⁿ = cⁿ for any integer value of n greater than 2.",
  },
  {
    question: "Who developed set theory?",
    options: ["Georg Cantor", "Bertrand Russell", "David Hilbert", "Kurt Gödel"],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation: "Georg Cantor is credited with the invention of set theory, a fundamental branch of mathematics.",
  },
  {
    question: "What is the P vs NP problem?",
    options: [
      "A problem in computer science about complexity",
      "A physics theorem",
      "A mathematical proof",
      "A logic puzzle",
    ],
    correctAnswer: 0,
    category: "Academia",
    difficulty: "Hard",
    explanation:
      "The P versus NP problem is a major unsolved problem in computer science that asks whether every problem whose solution can be quickly verified can also be quickly solved.",
  },

  // Engineering - Easy (10 questions)
  {
    question: "What is the unit of electrical resistance?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: 2,
    category: "Engineering",
    difficulty: "Easy",
    explanation: "Electrical resistance is measured in Ohms (Ω).",
  },
  {
    question: "What does DC stand for in electricity?",
    options: ["Direct Current", "Double Current", "Dynamic Current", "Dual Circuit"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Easy",
    explanation: "DC stands for Direct Current, where electric charge flows in only one direction.",
  },
  {
    question: "What tool is used to measure voltage?",
    options: ["Ammeter", "Voltmeter", "Ohmmeter", "Wattmeter"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Easy",
    explanation: "A voltmeter is an instrument used for measuring electrical potential difference (voltage).",
  },
  {
    question: "What is the primary function of a capacitor?",
    options: ["Resist current", "Store charge", "Amplify signal", "Generate power"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Easy",
    explanation:
      "A capacitor is an electrical component that stores electrical energy in an electric field, acting like a temporary battery.",
  },
  {
    question: "What material is commonly used in electrical wiring?",
    options: ["Iron", "Copper", "Aluminum", "Gold"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Easy",
    explanation:
      "Copper is widely used for electrical wiring due to its excellent conductivity and relatively low cost.",
  },
  {
    question: "What does AC stand for in electricity?",
    options: ["Alternating Current", "Active Current", "Applied Current", "Automatic Current"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Easy",
    explanation:
      "AC stands for Alternating Current, where the direction of electric charge flow periodically reverses.",
  },
  {
    question: "What is the unit of power?",
    options: ["Joule", "Watt", "Volt", "Ampere"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Easy",
    explanation: "Electrical power is measured in Watts (W).",
  },
  {
    question: "What is the main component of steel?",
    options: ["Aluminum", "Iron", "Copper", "Zinc"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Easy",
    explanation: "Steel is an alloy of iron and carbon, with carbon content typically between 0.2% and 2.1% by weight.",
  },
  {
    question: "What is the purpose of a circuit breaker?",
    options: ["Increase voltage", "Protect from overload", "Store energy", "Amplify signal"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Easy",
    explanation:
      "A circuit breaker is an electrical safety device that protects an electrical circuit from damage caused by excess current from an overload or short circuit.",
  },
  {
    question: "What does LED stand for?",
    options: ["Light Emitting Diode", "Long Energy Device", "Low Emission Display", "Linear Electric Device"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Easy",
    explanation:
      "LED stands for Light Emitting Diode, a semiconductor device that emits light when an electric current passes through it.",
  },

  // Engineering - Intermediate (10 questions)
  {
    question: "What does CAD stand for in engineering?",
    options: [
      "Computer Aided Design",
      "Central Analysis Data",
      "Computer Advanced Development",
      "Central Aided Design",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation: "CAD software is used by architects, engineers, and designers to create precise 2D and 3D designs.",
  },
  {
    question: "What is Ohm's Law?",
    options: ["V = IR", "P = IV", "E = mc²", "F = ma"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation:
      "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance between them (V=IR).",
  },
  {
    question: "What is the modulus of elasticity a measure of?",
    options: ["Strength", "Stiffness", "Ductility", "Hardness"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation:
      "The modulus of elasticity (Young's modulus) is a measure of a material's stiffness or resistance to elastic deformation under tensile or compressive stress.",
  },
  {
    question: "What is the purpose of a heat exchanger?",
    options: ["Generate heat", "Transfer heat", "Store heat", "Measure heat"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation: "A heat exchanger is a device designed to efficiently transfer heat from one medium to another.",
  },
  {
    question: "What is the SI unit of frequency?",
    options: ["Hertz", "Watt", "Joule", "Newton"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation: "Frequency, the rate at which a wave repeats or an oscillation occurs, is measured in Hertz (Hz).",
  },
  {
    question: "What is a cantilever beam?",
    options: ["A beam supported at both ends", "A beam fixed at one end", "A circular beam", "A flexible beam"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation: "A cantilever beam is a rigid structural element anchored at one end and free at the other.",
  },
  {
    question: "What does FEA stand for in engineering?",
    options: [
      "Finite Element Analysis",
      "Fast Execution Algorithm",
      "Force Energy Application",
      "Function Element Assembly",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation:
      "FEA is a computational method used to predict how a product reacts to real-world forces, vibration, heat, fluid flow, and other physical effects.",
  },
  {
    question: "What is the difference between stress and strain?",
    options: [
      "Stress is force, strain is deformation",
      "Stress is deformation, strain is force",
      "They are the same",
      "Stress is internal, strain is external",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation:
      "Stress is defined as force per unit area within a material, while strain is the measure of deformation or displacement of the material relative to its original size and shape.",
  },
  {
    question: "What is the purpose of a flywheel?",
    options: ["Store rotational energy", "Generate electricity", "Cool the engine", "Filter air"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation:
      "A flywheel is a heavy rotating wheel that stores rotational kinetic energy, used to smooth out power delivery from an intermittent source or to store energy for later use.",
  },
  {
    question: "What is the Carnot cycle?",
    options: ["A mechanical cycle", "An ideal thermodynamic cycle", "An electrical cycle", "A chemical process"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Intermediate",
    explanation:
      "The Carnot cycle is a theoretical thermodynamic cycle that describes the most efficient possible heat engine.",
  },

  // Engineering - Hard (10 questions)
  {
    question: "What is the Mohs hardness of diamond?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    category: "Engineering",
    difficulty: "Hard",
    explanation: "Diamond has a Mohs hardness of 10, making it the hardest naturally occurring substance.",
  },
  {
    question: "What is the Reynolds number used for?",
    options: ["Determine flow regime", "Measure temperature", "Calculate stress", "Find resistance"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "The Reynolds number is a dimensionless quantity in fluid mechanics used to predict flow patterns. It helps determine whether flow is laminar or turbulent.",
  },
  {
    question: "What is Poisson's ratio?",
    options: [
      "Ratio of lateral to axial strain",
      "Ratio of stress to strain",
      "Ratio of force to area",
      "Ratio of volume to mass",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "Poisson's ratio is the negative ratio of transverse strain to axial strain in theᱸ phenomenon of stretching of a material. It's a measure of the Poisson effect.",
  },
  {
    question: "What is the Biot-Savart law used for?",
    options: ["Calculate magnetic field", "Measure temperature", "Find resistance", "Determine flow rate"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation: "The Biot-Savart law is used to calculate the magnetic field produced by an electric current.",
  },
  {
    question: "What is the critical path method in project management?",
    options: ["Longest sequence of dependent tasks", "Shortest route", "Most expensive path", "Easiest method"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "The Critical Path Method (CPM) is a project management technique used to identify the longest sequence of dependent tasks (the critical path) and determine the shortest possible project duration.",
  },
  {
    question: "What is the Nyquist sampling theorem?",
    options: [
      "Sample at twice the highest frequency",
      "Sample at highest frequency",
      "Sample at lowest frequency",
      "Sample continuously",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "The Nyquist-Shannon sampling theorem states that to perfectly reconstruct a signal from its samples, the sampling frequency must be at least twice the highest frequency present in the signal.",
  },
  {
    question: "What is the purpose of annealing in metallurgy?",
    options: ["Harden metal", "Soften metal and relieve stress", "Coat metal", "Polish metal"],
    correctAnswer: 1,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "Annealing is a heat treatment process that alters the microstructure of a material to change its toughness, hardness, and ductility, typically to soften it and relieve internal stresses.",
  },
  {
    question: "What is Bernoulli's principle?",
    options: [
      "Pressure decreases with increased velocity",
      "Pressure increases with velocity",
      "Temperature affects pressure",
      "Volume is constant",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "Bernoulli's principle states that for an inviscid flow, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure or a decrease in the fluid's potential energy.",
  },
  {
    question: "What is the purpose of a PID controller?",
    options: ["Process control feedback", "Generate power", "Store data", "Filter signals"],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "A PID (Proportional-Integral-Derivative) controller is a control loop feedback mechanism widely used in industrial control systems for its robust performance.",
  },
  {
    question: "What is the Hall effect?",
    options: [
      "Voltage across conductor in magnetic field",
      "Resistance change with temperature",
      "Light emission from electrons",
      "Sound wave propagation",
    ],
    correctAnswer: 0,
    category: "Engineering",
    difficulty: "Hard",
    explanation:
      "The Hall effect is the production of an electric potential difference (voltage) across an electrical conductor, transverse to an electric current in the conductor and a magnetic field perpendicular to the current.",
  },

  // Law - Easy (10 questions)
  {
    question: "What is the supreme law of the United States?",
    options: ["Declaration of Independence", "Bill of Rights", "The Constitution", "The Amendments"],
    correctAnswer: 2,
    category: "Law",
    difficulty: "Easy",
    explanation: "The U.S. Constitution is the supreme law of the land.",
  },
  {
    question: "How many branches are there in the US government?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Easy",
    explanation:
      "The U.S. federal government is divided into three branches: the legislative, executive, and judicial.",
  },
  {
    question: "What is the highest court in the United States?",
    options: ["District Court", "Appeals Court", "Supreme Court", "Federal Court"],
    correctAnswer: 2,
    category: "Law",
    difficulty: "Easy",
    explanation: "The Supreme Court is the highest federal court in the United States.",
  },
  {
    question: "What does the Fifth Amendment protect against?",
    options: ["Self-incrimination", "Unlawful search", "Cruel punishment", "Trial delay"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Easy",
    explanation:
      "The Fifth Amendment protects individuals from being compelled to testify against themselves (pleading the fifth).",
  },
  {
    question: "What is a felony?",
    options: ["Minor crime", "Serious crime", "Traffic violation", "Civil dispute"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Easy",
    explanation: "A felony is a serious crime, typically punishable by imprisonment for more than one year.",
  },
  {
    question: "What does 'pro bono' mean?",
    options: ["For the public good/free", "Against", "In favor of", "Professional"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Easy",
    explanation:
      "'Pro bono' is a Latin phrase meaning 'for the public good,' often used to describe legal services provided free of charge.",
  },
  {
    question: "What is a misdemeanor?",
    options: ["Serious crime", "Minor crime", "Civil case", "Contract dispute"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Easy",
    explanation:
      "A misdemeanor is a less serious criminal offense than a felony, typically punishable by fines or jail time of less than one year.",
  },
  {
    question: "What does the First Amendment protect?",
    options: ["Right to bear arms", "Freedom of speech", "Right to vote", "Due process"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Easy",
    explanation:
      "The First Amendment to the U.S. Constitution protects fundamental rights including freedom of speech, religion, press, assembly, and petition.",
  },
  {
    question: "What is a plaintiff?",
    options: ["Judge", "Person who sues", "Defendant", "Witness"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Easy",
    explanation:
      "A plaintiff is the party who initiates a lawsuit or legal action against another party (the defendant).",
  },
  {
    question: "What is bail?",
    options: ["Final verdict", "Money for release pending trial", "Type of punishment", "Court fee"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Easy",
    explanation: "Bail is money or property posted as security to ensure the appearance of a defendant in court.",
  },

  // Law - Intermediate (10 questions)
  {
    question: "What does 'habeas corpus' mean?",
    options: ["You have the body", "Guilty mind", "The thing speaks for itself", "Let the buyer beware"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "'Habeas corpus' is a writ that requires a person under arrest to be brought before a judge or into court, especially to secure the person's release unless lawful grounds are shown for their detention.",
  },
  {
    question: "What is the burden of proof in criminal cases?",
    options: ["Preponderance of evidence", "Beyond reasonable doubt", "Clear and convincing", "Probable cause"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation: "In criminal cases, the prosecution must prove the defendant's guilt 'beyond a reasonable doubt'.",
  },
  {
    question: "What is tort law?",
    options: ["Criminal law", "Civil wrongs and damages", "Contract law", "Property law"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "Tort law deals with civil wrongs and the legal liability arising from them, allowing injured parties to seek compensation.",
  },
  {
    question: "What does 'stare decisis' mean?",
    options: ["Stand by decided cases", "State the case", "Start proceedings", "Stop the trial"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "'Stare decisis' is a legal principle where courts are obligated to follow historical cases when making a ruling, meaning to stand by things decided.",
  },
  {
    question: "What is judicial review?",
    options: ["Reviewing judges", "Courts examining constitutionality of laws", "Jury deliberation", "Case review"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "Judicial review is the power of courts to review laws passed by the legislature and actions taken by the executive branch to determine their constitutionality.",
  },
  {
    question: "What is a grand jury?",
    options: ["Trial jury", "Group determining if charges should be filed", "Supreme Court panel", "Appeals board"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "A grand jury is a jury that is convened to hear evidence and determine whether a crime has been committed and whether charges should be brought against a defendant.",
  },
  {
    question: "What does 'double jeopardy' prohibit?",
    options: ["Two trials", "Being tried twice for same offense", "Two punishments", "Two charges"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "The Fifth Amendment's Double Jeopardy Clause prohibits an accused person from being tried again for the same crime after an acquittal or conviction.",
  },
  {
    question: "What is civil law?",
    options: ["Criminal law", "Law between private parties", "Military law", "Constitutional law"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "Civil law governs disputes between individuals or organizations, typically seeking monetary damages or specific performance, as opposed to criminal law which deals with offenses against the state.",
  },
  {
    question: "What is an injunction?",
    options: ["Court order to do or not do something", "Fine", "Jail sentence", "Appeal"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Intermediate",
    explanation: "An injunction is a court order that requires a party to do or refrain from doing a specific act.",
  },
  {
    question: "What is the Miranda warning?",
    options: ["Fire alarm", "Rights read to arrested persons", "Court summons", "Traffic citation"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Intermediate",
    explanation:
      "The Miranda warning informs individuals of their constitutional rights, including the right to remain silent and the right to an attorney, before police interrogation.",
  },

  // Law - Hard (10 questions)
  {
    question: "In which case did the US Supreme Court establish judicial review?",
    options: ["Brown v. Board", "Marbury v. Madison", "Roe v. Wade", "Miranda v. Arizona"],
    correctAnswer: 1,
    category: "Law",
    difficulty: "Hard",
    explanation: "The Supreme Court case Marbury v. Madison (1803) established the principle of judicial review.",
  },
  {
    question: "What is the rule against perpetuities?",
    options: [
      "Property law limiting future interests",
      "Criminal statute of limitations",
      "Contract expiration",
      "Trademark duration",
    ],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "The Rule Against Perpetuities is a common law rule that prevents property owners from controlling the ownership of their property for too long after their death, typically limiting it to 21 years after the death of a 'life in being'.",
  },
  {
    question: "What is the difference between malum in se and malum prohibitum?",
    options: [
      "Wrong in itself vs. wrong because prohibited",
      "Federal vs. state crime",
      "Felony vs. misdemeanor",
      "Civil vs. criminal",
    ],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "'Malum in se' refers to acts that are inherently wrong (e.g., murder), while 'malum prohibitum' refers to acts that are wrong only because they are forbidden by law (e.g., traffic violations).",
  },
  {
    question: "What is Chevron deference?",
    options: [
      "Judicial deference to agency interpretation",
      "Presidential power",
      "Congressional privilege",
      "State sovereignty",
    ],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "Chevron deference is a doctrine of U.S. administrative law requiring courts to defer to reasonable interpretations of ambiguous statutes by federal administrative agencies.",
  },
  {
    question: "What is the doctrine of res ipsa loquitur?",
    options: ["The thing speaks for itself", "Let the buyer beware", "As you have done", "At first sight"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "'Res ipsa loquitur' is Latin for 'the thing speaks for itself,' a doctrine in tort law where negligence can be inferred from the very nature of an accident or injury.",
  },
  {
    question: "What is qualified immunity?",
    options: [
      "Protection for public officials from liability",
      "Diplomatic immunity",
      "Witness protection",
      "Jury immunity",
    ],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "Qualified immunity is a legal doctrine that protects government officials performing discretionary functions from liability in civil lawsuits unless their conduct violates clearly established statutory or constitutional rights.",
  },
  {
    question: "What is the Dormant Commerce Clause?",
    options: [
      "Limits on state laws affecting interstate commerce",
      "Federal taxation power",
      "Presidential veto",
      "Judicial appointments",
    ],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "The Dormant Commerce Clause is a legal doctrine that prohibits states from passing legislation that improperly discriminates against or excessively burdens interstate commerce.",
  },
  {
    question: "What is forum non conveniens?",
    options: ["Dismissal for inconvenient forum", "Public forum", "Court calendar", "Jury selection"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "'Forum non conveniens' is a legal doctrine that allows courts to dismiss a case when there is a more convenient and appropriate forum elsewhere.",
  },
  {
    question: "What is the Parol Evidence Rule?",
    options: [
      "Bars extrinsic evidence of prior agreements",
      "Hearsay exception",
      "Evidence authentication",
      "Witness credibility",
    ],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "The Parol Evidence Rule prevents parties to a written contract from presenting extrinsic evidence of prior or contemporaneous agreements that contradict or modify the terms of the written contract.",
  },
  {
    question: "What is substantive due process?",
    options: ["Protection of fundamental rights", "Trial procedures", "Evidence rules", "Sentencing guidelines"],
    correctAnswer: 0,
    category: "Law",
    difficulty: "Hard",
    explanation:
      "Substantive due process is a legal principle that protects certain fundamental rights from government interference, regardless of the procedures used.",
  },

  // Economics - Easy (10 questions)
  {
    question: "What does GDP stand for?",
    options: [
      "General Domestic Product",
      "Gross Domestic Product",
      "General Development Price",
      "Gross Development Price",
    ],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "GDP stands for Gross Domestic Product, which is the total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period.",
  },
  {
    question: "What is supply and demand?",
    options: ["Relationship between availability and desire", "Taxation system", "Banking method", "Trade agreement"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "Supply and demand are the economic forces that determine the price and quantity of goods and services in a market.",
  },
  {
    question: "What is a monopoly?",
    options: ["Many sellers", "One seller controls market", "Government control", "Free market"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "A monopoly is a market structure where a single seller or producer has exclusive control over a particular product or service.",
  },
  {
    question: "What is opportunity cost?",
    options: ["Money spent", "Value of next best alternative", "Production cost", "Market price"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "Opportunity cost is the value of the next-best alternative that must be forgone to pursue a certain action.",
  },
  {
    question: "What is currency?",
    options: ["System of money", "Bank account", "Credit card", "Stock"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "Currency is a medium of exchange for goods and services, typically in the form of coins and banknotes.",
  },
  {
    question: "What is a recession?",
    options: ["Economic growth", "Economic decline", "Stable economy", "High employment"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Easy",
    explanation: "A recession is a significant, widespread, and prolonged downturn in economic activity.",
  },
  {
    question: "What is interest?",
    options: ["Cost of borrowing money", "Type of tax", "Market share", "Business profit"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Easy",
    explanation: "Interest is the cost of borrowing money or the return on lending money.",
  },
  {
    question: "What is a stock?",
    options: ["Loan", "Ownership share in company", "Bond", "Commodity"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "A stock represents ownership in a corporation and a claim on part of the corporation's assets and earnings.",
  },
  {
    question: "What is unemployment?",
    options: [
      "People working part-time",
      "People actively seeking work but unable to find it",
      "Retired people",
      "Students",
    ],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Easy",
    explanation:
      "Unemployment refers to individuals who are actively looking for employment but are unable to find a job.",
  },
  {
    question: "What is a budget?",
    options: ["Financial plan", "Bank account", "Credit score", "Investment portfolio"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Easy",
    explanation: "A budget is a plan for how money will be spent and saved over a particular period.",
  },

  // Economics - Intermediate (10 questions)
  {
    question: "What is inflation?",
    options: ["Rising prices over time", "Falling prices over time", "Stable prices", "Currency exchange"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Intermediate",
    explanation:
      "Inflation is the rate at which the general level of prices for goods and services is rising, and subsequently, purchasing power is falling.",
  },
  {
    question: "What is fiscal policy?",
    options: ["Government spending and taxation", "Interest rates", "Currency exchange", "Trade agreements"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Intermediate",
    explanation: "Fiscal policy refers to the use of government spending and taxation to influence the economy.",
  },
  {
    question: "What is monetary policy?",
    options: ["Government budget", "Central bank control of money supply", "Tax collection", "Trade regulation"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Intermediate",
    explanation:
      "Monetary policy is the set of actions undertaken by a central bank to manipulate the money supply and credit conditions to stimulate or restrain economic activity.",
  },
  {
    question: "What is the Federal Reserve?",
    options: ["Tax agency", "Central bank of the US", "Treasury department", "Congressional committee"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Intermediate",
    explanation: "The Federal Reserve System is the central bank of the United States.",
  },
  {
    question: "What is elasticity of demand?",
    options: [
      "Responsiveness of quantity demanded to price changes",
      "Total demand",
      "Market size",
      "Production capacity",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Intermediate",
    explanation:
      "Price elasticity of demand measures how sensitive the quantity demanded of a good or service is to a change in its price.",
  },
  {
    question: "What is comparative advantage?",
    options: ["Being best at everything", "Lower opportunity cost in production", "Largest economy", "Most resources"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Intermediate",
    explanation:
      "Comparative advantage is an economic principle that states that countries should specialize in producing goods and services for which they have a lower opportunity cost.",
  },
  {
    question: "What is marginal utility?",
    options: ["Total satisfaction", "Additional satisfaction from one more unit", "Average utility", "Maximum utility"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Intermediate",
    explanation:
      "Marginal utility is the additional satisfaction a consumer gains from consuming one more unit of a good or service.",
  },
  {
    question: "What is a trade deficit?",
    options: ["Imports exceed exports", "Exports exceed imports", "Balanced trade", "No trade"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Intermediate",
    explanation: "A trade deficit occurs when a country imports more goods and services than it exports.",
  },
  {
    question: "What is aggregate demand?",
    options: ["Individual demand", "Total demand in economy", "Business demand", "Government demand"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "Intermediate",
    explanation:
      "Aggregate demand is the total demand for goods and services in an economy at a given overall price level and a given time period.",
  },
  {
    question: "What is a progressive tax?",
    options: ["Tax rate increases with income", "Fixed tax rate", "Tax on profits", "Sales tax"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Intermediate",
    explanation: "A progressive tax system is one where the tax rate increases as the taxable amount increases.",
  },

  // Economics - Hard (10 questions)
  {
    question: "Who wrote 'The Wealth of Nations'?",
    options: ["Karl Marx", "John Maynard Keynes", "Adam Smith", "Milton Friedman"],
    correctAnswer: 2,
    category: "Economics",
    difficulty: "Hard",
    explanation: "'The Wealth of Nations' is a seminal work by Scottish economist Adam Smith, published in 1776.",
  },
  {
    question: "What is the Phillips Curve?",
    options: ["Relationship between inflation and unemployment", "Supply curve", "Demand curve", "Growth trajectory"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation: "The Phillips Curve describes an inverse relationship between inflation and unemployment rates.",
  },
  {
    question: "What is the Laffer Curve?",
    options: [
      "Relationship between tax rates and revenue",
      "Production possibility frontier",
      "Demand curve",
      "Growth model",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "The Laffer Curve illustrates the relationship between tax rates and the amount of tax revenue collected by governments, suggesting that at some point, increasing tax rates can lead to a decrease in revenue.",
  },
  {
    question: "What is rational expectations theory?",
    options: [
      "People make predictions using all available information",
      "People are irrational",
      "Markets are random",
      "Emotions drive decisions",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "Rational expectations theory posits that individuals and businesses make economic decisions based on their analysis of all available information and their expectations of future events.",
  },
  {
    question: "What is the Solow growth model?",
    options: ["Economic growth from capital and labor", "Inflation model", "Trade theory", "Tax policy"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "The Solow–Swan model is a neoclassical economic growth model that explains long-run economic growth by attributing it to capital accumulation, labor force growth, and increases in labor productivity.",
  },
  {
    question: "What is the Coase theorem?",
    options: [
      "If transaction costs are low, bargaining leads to efficiency",
      "Government intervention is necessary",
      "Markets always fail",
      "Monopolies are efficient",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "The Coase theorem, developed by Ronald Coase, states that if property rights are well-defined and transaction costs are low, private parties can bargain to reach an efficient solution to externalities, regardless of the initial allocation of rights.",
  },
  {
    question: "What is game theory in economics?",
    options: ["Study of strategic decision making", "Gambling mathematics", "Sport economics", "Market timing"],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "Game theory is the study of strategic decision-making, where the outcome for each participant depends on the actions of all.",
  },
  {
    question: "What is the Ricardian equivalence?",
    options: [
      "Debt and taxes have equivalent effects",
      "International trade theory",
      "Currency equivalence",
      "Price parity",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "Ricardian equivalence is an economic theory that suggests government debt financing has no net effect on aggregate demand because taxpayers anticipate future tax increases to pay off the debt.",
  },
  {
    question: "What is asymmetric information?",
    options: [
      "One party has more information than another",
      "Equal information",
      "No information",
      "Public information",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "Asymmetric information occurs in a transaction when one party has more or better information than the other.",
  },
  {
    question: "What is the efficient market hypothesis?",
    options: [
      "Asset prices reflect all available information",
      "Markets are inefficient",
      "Prices are random",
      "Insider trading works",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "Hard",
    explanation:
      "The efficient market hypothesis (EMH) states that asset prices fully reflect all available information, making it impossible to consistently 'beat the market'.",
  },

  // General - Easy (10 questions)
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Easy",
    explanation: "Paris is the capital and most populous city of France.",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Easy",
    explanation:
      "Mars is often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface.",
  },
  {
    question: "How many days are in a leap year?",
    options: ["364", "365", "366", "367"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Easy",
    explanation: "A leap year has 366 days, with the extra day added to February (February 29th).",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Easy",
    explanation: "The blue whale is the largest animal known to have ever lived on Earth.",
  },
  {
    question: "How many colors are in a rainbow?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Easy",
    explanation: "A rainbow typically displays seven colors: red, orange, yellow, green, blue, indigo, and violet.",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Mont Blanc"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Easy",
    explanation: "Mount Everest, located in the Himalayas, is the Earth's highest mountain above sea level.",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    category: "General",
    difficulty: "Easy",
    explanation: "The Pacific Ocean is the largest and deepest of Earth's five oceanic divisions.",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Easy",
    explanation:
      "There are generally considered to be seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Easy",
    explanation: "Canberra is the capital city of Australia.",
  },
  {
    question: "How many sides does a triangle have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Easy",
    explanation: "A triangle is a polygon with three edges and three vertices.",
  },

  // General - Intermediate (10 questions)
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "General",
    difficulty: "Intermediate",
    explanation: "The Pacific Ocean is the largest and deepest of Earth's five oceanic divisions.",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Intermediate",
    explanation: "The Mona Lisa was painted by the Italian Renaissance artist Leonardo da Vinci.",
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Intermediate",
    explanation:
      "The Nile River is traditionally considered the longest river in the world, though the Amazon River is a close contender and some studies suggest it may be longer.",
  },
  {
    question: "In which country is the Great Barrier Reef located?",
    options: ["Brazil", "Australia", "Indonesia", "Philippines"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Intermediate",
    explanation: "The Great Barrier Reef is located off the coast of Queensland, Australia.",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Intermediate",
    explanation: "Vatican City is the smallest independent state in the world by both area and population.",
  },
  {
    question: "How many time zones does Russia have?",
    options: ["7", "9", "11", "13"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Intermediate",
    explanation: "Russia spans 11 time zones, the most of any country.",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Intermediate",
    explanation: "The currency of Japan is the Japanese Yen (JPY).",
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Iron", "Fluorine", "Fermium", "Francium"],
    correctAnswer: 0,
    category: "General",
    difficulty: "Intermediate",
    explanation: "The chemical symbol 'Fe' represents Iron, derived from its Latin name, ferrum.",
  },
  {
    question: "What year did the internet become available to the public?",
    options: ["1981", "1991", "2001", "1971"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Intermediate",
    explanation:
      "While the internet existed earlier in various forms, the World Wide Web, which made it publicly accessible and user-friendly, was released in 1991.",
  },
  {
    question: "What is the most spoken language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Intermediate",
    explanation:
      "Mandarin Chinese has the most native speakers, while English is the most widely spoken language globally when considering both native and non-native speakers.",
  },

  // General - Hard (10 questions)
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Hard",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The smallest prime number is 2.",
  },
  {
    question: "Which country has the most UNESCO World Heritage Sites?",
    options: ["France", "China", "Italy", "Spain"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Hard",
    explanation:
      "As of recent counts, Italy and China often share the top positions for the most UNESCO World Heritage Sites, with Italy frequently having a slight edge.",
  },
  {
    question: "What is the rarest blood type?",
    options: ["AB positive", "O negative", "AB negative", "B negative"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Hard",
    explanation: "AB negative blood type is considered the rarest among the major blood groups.",
  },
  {
    question: "What is the capital of Mongolia?",
    options: ["Ulaanbaatar", "Astana", "Bishkek", "Dushanbe"],
    correctAnswer: 0,
    category: "General",
    difficulty: "Hard",
    explanation: "Ulaanbaatar is the capital and largest city of Mongolia.",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: 1,
    category: "General",
    difficulty: "Hard",
    explanation: "Saturn currently holds the record for the planet with the most known moons.",
  },
  {
    question: "What is the deepest point in Earth's oceans?",
    options: ["Java Trench", "Puerto Rico Trench", "Mariana Trench", "Tonga Trench"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Hard",
    explanation: "The Mariana Trench, specifically the Challenger Deep, is the deepest known point in Earth's oceans.",
  },
  {
    question: "What is the oldest continuously inhabited city in the world?",
    options: ["Athens", "Rome", "Damascus", "Jerusalem"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Hard",
    explanation: "Damascus, Syria, is often cited as the oldest continuously inhabited city in the world.",
  },
  {
    question: "How many bones does a shark have?",
    options: ["0", "50", "100", "200"],
    correctAnswer: 0,
    category: "General",
    difficulty: "Hard",
    explanation: "Sharks do not have bones; their skeletons are made of cartilage.",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    correctAnswer: 3,
    category: "General",
    difficulty: "Hard",
    explanation:
      "The Antarctic Desert is the largest desert in the world, followed by the Arctic Desert, and then the Sahara.",
  },
  {
    question: "Which element is the most abundant in the universe?",
    options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
    correctAnswer: 2,
    category: "General",
    difficulty: "Hard",
    explanation:
      "Hydrogen is the most abundant chemical element in the universe, making up about 75% of its elemental mass.",
  },

  // Politics - Easy (10 questions)
  {
    question: "How many branches are there in the US government?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation:
      "The U.S. federal government is divided into three branches: the legislative, executive, and judicial.",
  },
  {
    question: "Who is the current head of the United Nations?",
    options: ["President", "Prime Minister", "Secretary-General", "Chancellor"],
    correctAnswer: 2,
    category: "Politics",
    difficulty: "Easy",
    explanation: "The head of the United Nations is the Secretary-General.",
  },
  {
    question: "What does UN stand for?",
    options: ["Universal Nations", "United Nations", "Union of Nations", "Unified Nations"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation:
      "UN stands for United Nations, an intergovernmental organization aiming to maintain international peace and security.",
  },
  {
    question: "How many stars are on the US flag?",
    options: ["48", "50", "51", "52"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation: "There are 50 stars on the U.S. flag, representing the 50 states.",
  },
  {
    question: "What is the capital of the United States?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation: "Washington D.C. is the capital of the United States.",
  },
  {
    question: "Who has the power to veto bills in the US?",
    options: ["Speaker of the House", "President", "Supreme Court", "Senate"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation: "The President of the United States has the power to veto bills passed by Congress.",
  },
  {
    question: "What is the minimum voting age in the US?",
    options: ["16", "18", "21", "25"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation: "The minimum voting age in the United States is 18.",
  },
  {
    question: "How many US Senators are there?",
    options: ["50", "100", "435", "538"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation: "There are 100 U.S. Senators, with two from each of the 50 states.",
  },
  {
    question: "What is the term for a country ruled by a king or queen?",
    options: ["Democracy", "Republic", "Monarchy", "Oligarchy"],
    correctAnswer: 2,
    category: "Politics",
    difficulty: "Easy",
    explanation: "A country ruled by a king or queen is called a monarchy.",
  },
  {
    question: "What is democracy?",
    options: ["Rule by one person", "Rule by the people", "Rule by military", "Rule by clergy"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy",
    explanation:
      "Democracy is a system of government where the citizens exercise power directly or elect representatives from among themselves to form a governing body, such as a parliament.",
  },

  // Politics - Intermediate (10 questions)
  {
    question: "What is the term length for a US Senator?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    correctAnswer: 2,
    category: "Politics",
    difficulty: "Intermediate",
    explanation: "U.S. Senators serve six-year terms.",
  },
  {
    question: "What is the Electoral College?",
    options: ["Educational institution", "System for electing president", "Legislative body", "Political party"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Intermediate",
    explanation:
      "The Electoral College is a body of electors established by the United States Constitution, constituted every four years for the sole purpose of electing the president and vice president.",
  },
  {
    question: "How many justices are on the US Supreme Court?",
    options: ["7", "9", "11", "13"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Intermediate",
    explanation: "There are nine justices on the U.S. Supreme Court: one Chief Justice and eight Associate Justices.",
  },
  {
    question: "What is a filibuster?",
    options: ["Extended speech to delay vote", "Type of election", "Court ruling", "Presidential order"],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Intermediate",
    explanation:
      "A filibuster is a tactic used in legislative bodies to delay or block a vote on a bill or other measure, typically by means of prolonged speech.",
  },
  {
    question: "What does NATO stand for?",
    options: [
      "National Atlantic Treaty Organization",
      "North Atlantic Treaty Organization",
      "New Atlantic Trade Organization",
      "Northern Alliance Treaty Organization",
    ],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Intermediate",
    explanation: "NATO stands for the North Atlantic Treaty Organization, a military alliance established in 1949.",
  },
  {
    question: "What is a bicameral legislature?",
    options: [
      "One legislative chamber",
      "Two legislative chambers",
      "Three legislative chambers",
      "No legislative chambers",
    ],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Intermediate",
    explanation: "A bicameral legislature is a government's legislative body that consists of two chambers or houses.",
  },
  {
    question: "What is the primary function of the judicial branch?",
    options: ["Make laws", "Enforce laws", "Interpret laws", "Propose laws"],
    correctAnswer: 2,
    category: "Politics",
    difficulty: "Intermediate",
    explanation: "The primary function of the judicial branch is to interpret laws and administer justice.",
  },
  {
    question: "What is gerrymandering?",
    options: ["Fair redistricting", "Manipulating district boundaries", "Electoral reform", "Campaign finance"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Intermediate",
    explanation:
      "Gerrymandering is the practice of manipulating the boundaries of electoral constituencies to favor one party or class.",
  },
  {
    question: "What is a parliamentary system?",
    options: ["Executive chosen by legislature", "Directly elected president", "Military rule", "Hereditary monarchy"],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Intermediate",
    explanation:
      "In a parliamentary system, the executive branch derives its legitimacy from and is held accountable to the legislature; the executive and legislative branches are thus interconnected.",
  },
  {
    question: "What is the War Powers Act?",
    options: ["Declares war", "Limits presidential military action", "Funds military", "Creates treaties"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Intermediate",
    explanation:
      "The War Powers Act of 1973 is a federal law intended to check the U.S. president's power to commit the nation's armed forces without the consent of Congress.",
  },

  // Politics - Hard (10 questions)
  {
    question: "Which amendment granted women the right to vote in the US?",
    options: ["15th Amendment", "19th Amendment", "21st Amendment", "24th Amendment"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Hard",
    explanation: "The 19th Amendment, ratified in 1920, granted women the right to vote in the United States.",
  },
  {
    question: "What is Westphalian sovereignty?",
    options: ["State sovereignty within borders", "International law", "Colonial system", "Trade agreement"],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "Westphalian sovereignty is a principle in international law that asserts the primacy of state sovereignty within their own territories, free from external interference.",
  },
  {
    question: "What is the Iron Triangle in politics?",
    options: [
      "Relationship between Congress, bureaucracy, and interest groups",
      "Military alliance",
      "Trade bloc",
      "Election system",
    ],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "The Iron Triangle in U.S. politics describes the relationship between congressional committees, executive agencies, and interest groups that form alliances to influence policy.",
  },
  {
    question: "What is the median voter theorem?",
    options: ["Candidates converge to center", "Extremism wins", "Voter turnout theory", "Campaign finance model"],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "The median voter theorem suggests that in a two-party system, candidates will tend to adopt policies that appeal to the median voter in order to win elections.",
  },
  {
    question: "What is a unitary state?",
    options: ["Federal system", "Central government has all power", "Confederacy", "City-state"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "In a unitary state, the central government holds supreme authority and any administrative divisions (sub-national units) exercise only the powers that the central government chooses to delegate.",
  },
  {
    question: "What is Duverger's law?",
    options: [
      "Plurality systems lead to two parties",
      "Proportional representation required",
      "Term limits necessary",
      "Campaign finance limits",
    ],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "Duverger's Law posits that the combination of a 'winner-take-all' electoral system (plurality voting) and single-member districts tends to favor a two-party system.",
  },
  {
    question: "What is soft power in international relations?",
    options: [
      "Military force",
      "Influence through attraction and persuasion",
      "Economic sanctions",
      "Trade agreements",
    ],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "Soft power is a concept in international relations referring to the ability to influence others through attraction and persuasion rather than coercion or payment.",
  },
  {
    question: "What is the principal-agent problem in politics?",
    options: ["Difficulty monitoring representatives", "Election fraud", "Campaign finance", "Term limits"],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "The principal-agent problem in politics arises when elected officials (agents) may not always act in the best interests of the voters (principals) they represent.",
  },
  {
    question: "What is constructivism in international relations?",
    options: [
      "Social constructs shape state behavior",
      "Military power determines outcomes",
      "Economic interests drive policy",
      "Geography determines politics",
    ],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "Constructivism is a theoretical approach in international relations that emphasizes the role of social constructs, ideas, and identities in shaping state behavior and international norms.",
  },
  {
    question: "What is the veil of ignorance in political philosophy?",
    options: [
      "John Rawls' thought experiment for justice",
      "Information censorship",
      "Voter ignorance",
      "Campaign strategy",
    ],
    correctAnswer: 0,
    category: "Politics",
    difficulty: "Hard",
    explanation:
      "The veil of ignorance is a thought experiment proposed by philosopher John Rawls, suggesting that in designing a just society, individuals should be placed behind a 'veil' of ignorance regarding their own social status, abilities, and beliefs.",
  },

  // Music - Easy (10 questions)
  {
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Easy",
    explanation:
      "Michael Jackson earned the title 'King of Pop' due to his immense influence on music and entertainment.",
  },
  {
    question: "How many strings does a standard guitar have?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Easy",
    explanation: "A standard guitar has 6 strings, tuned to E-A-D-G-B-E from lowest to highest.",
  },
  {
    question: "Which instrument has black and white keys?",
    options: ["Guitar", "Drum", "Piano", "Violin"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Easy",
    explanation: "The piano has a keyboard with black and white keys that produce different notes.",
  },
  {
    question: "What does 'BPM' stand for in music?",
    options: ["Beats Per Measure", "Beats Per Minute", "Bass Per Minute", "Band Performance Music"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Easy",
    explanation: "BPM (Beats Per Minute) measures the tempo or speed of a musical piece.",
  },
  {
    question: "Who sang 'Thriller'?",
    options: ["Prince", "Whitney Houston", "Michael Jackson", "Madonna"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Easy",
    explanation:
      "'Thriller' is one of Michael Jackson's most iconic songs and the title track of the best-selling album of all time.",
  },
  {
    question: "What genre is Bob Marley famous for?",
    options: ["Jazz", "Reggae", "Rock", "Hip Hop"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Easy",
    explanation: "Bob Marley was a legendary reggae musician who popularized the genre worldwide.",
  },
  {
    question: "How many notes are in an octave?",
    options: ["5", "7", "8", "12"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "Easy",
    explanation: "An octave contains 12 notes including both natural notes and sharps/flats.",
  },
  {
    question: "Which band sang 'Bohemian Rhapsody'?",
    options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Easy",
    explanation: "'Bohemian Rhapsody' is Queen's most famous song, written by Freddie Mercury.",
  },
  {
    question: "What is the highest female singing voice?",
    options: ["Alto", "Soprano", "Tenor", "Mezzo-soprano"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Easy",
    explanation: "Soprano is the highest female singing voice classification in classical music.",
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    options: ["Diana Ross", "Aretha Franklin", "Tina Turner", "Whitney Houston"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Easy",
    explanation: "Aretha Franklin earned the title 'Queen of Soul' for her powerful voice and influence on soul music.",
  },

  // Music - Intermediate (10 questions)
  {
    question: "What time signature is most common in popular music?",
    options: ["3/4", "4/4", "6/8", "2/4"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "4/4 time signature (also called common time) is the most widely used in popular music.",
  },
  {
    question: "Which musical term means 'gradually getting louder'?",
    options: ["Diminuendo", "Crescendo", "Forte", "Staccato"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "Crescendo is an Italian musical term indicating to gradually increase volume.",
  },
  {
    question: "Who composed the 'Four Seasons'?",
    options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "Antonio Vivaldi composed 'The Four Seasons', a set of four violin concertos.",
  },
  {
    question: "What is a pentatonic scale?",
    options: ["5-note scale", "7-note scale", "8-note scale", "12-note scale"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "A pentatonic scale consists of five notes per octave and is widely used in various music genres.",
  },
  {
    question: "Which rapper's real name is Marshall Mathers?",
    options: ["Jay-Z", "Eminem", "Snoop Dogg", "Dr. Dre"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "Eminem's real name is Marshall Bruce Mathers III.",
  },
  {
    question: "What does 'a cappella' mean?",
    options: ["Singing with instruments", "Singing without instruments", "Fast singing", "Slow singing"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "'A cappella' is an Italian phrase meaning singing performed without instrumental accompaniment.",
  },
  {
    question: "Which instrument family does the saxophone belong to?",
    options: ["Brass", "Woodwind", "Percussion", "String"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation:
      "Despite being made of brass, the saxophone is classified as a woodwind instrument because it uses a reed.",
  },
  {
    question: "Who is the best-selling female artist of all time?",
    options: ["Beyoncé", "Madonna", "Mariah Carey", "Celine Dion"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "Madonna is recognized as the best-selling female recording artist of all time.",
  },
  {
    question: "What is the term for three or more notes played together?",
    options: ["Scale", "Chord", "Melody", "Harmony"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "A chord is a combination of three or more pitches sounded simultaneously.",
  },
  {
    question: "Which country originated K-pop?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Intermediate",
    explanation: "K-pop (Korean pop music) originated in South Korea and has gained massive global popularity.",
  },

  // Music - Hard (10 questions)
  {
    question: "What is the Fibonacci sequence's connection to music composition?",
    options: ["Rhythm patterns", "Melodic structure", "Harmonic ratios", "Tempo variations"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Hard",
    explanation:
      "The Fibonacci sequence relates to harmonic ratios and proportions in music composition, creating aesthetically pleasing patterns.",
  },
  {
    question: "Which composer was completely deaf when he composed his 9th Symphony?",
    options: ["Mozart", "Beethoven", "Bach", "Handel"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Hard",
    explanation: "Ludwig van Beethoven was completely deaf when he composed his famous 9th Symphony.",
  },
  {
    question: "What is the 'Tristan chord' named after?",
    options: ["Wagner's opera", "A music theorist", "A musical instrument", "A chord structure"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "Hard",
    explanation:
      "The Tristan chord appears in Wagner's opera 'Tristan und Isolde' and revolutionized harmonic language.",
  },
  {
    question: "Which jazz musician was known as 'Bird'?",
    options: ["Miles Davis", "John Coltrane", "Charlie Parker", "Dizzy Gillespie"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "Hard",
    explanation: "Charlie Parker, nicknamed 'Bird', was a pioneering bebop jazz saxophonist.",
  },
  {
    question: "What is the range of frequencies humans can typically hear?",
    options: ["10 Hz to 10 kHz", "20 Hz to 20 kHz", "50 Hz to 15 kHz", "100 Hz to 25 kHz"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Hard",
    explanation: "The typical human hearing range is approximately 20 Hz to 20,000 Hz (20 kHz).",
  },
  {
    question: "Which music notation system uses numbers instead of traditional notes?",
    options: ["Tablature", "Nashville number system", "Figured bass", "Jianpu"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "Hard",
    explanation:
      "Jianpu (numbered musical notation) uses numbers to represent scale degrees and is popular in East Asian music.",
  },
  {
    question: "What is the 'Loudness War' in music production?",
    options: ["Volume competition", "Compression overuse", "Dynamic range reduction", "All of the above"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "Hard",
    explanation:
      "The Loudness War refers to the trend of increasing audio levels in recordings through compression, reducing dynamic range.",
  },
  {
    question: "Which ancient Greek mode forms the basis of the natural minor scale?",
    options: ["Dorian", "Phrygian", "Lydian", "Aeolian"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "Hard",
    explanation: "The Aeolian mode corresponds to the natural minor scale in modern music theory.",
  },
  {
    question: "What technique did Les Paul pioneer in recording?",
    options: ["Auto-tune", "Multi-track recording", "Digital sampling", "Synthesizer"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Hard",
    explanation:
      "Les Paul pioneered multi-track recording, allowing musicians to record different parts separately and combine them.",
  },
  {
    question: "Which frequency is considered the 'concert pitch' A?",
    options: ["432 Hz", "440 Hz", "444 Hz", "528 Hz"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "Hard",
    explanation:
      "A440 (440 Hz) is the internationally recognized standard pitch for the musical note A above middle C.",
  },

  // Sports - Easy (10 questions)
  {
    question: "How many players are on a football (soccer) team?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Easy",
    explanation: "A football/soccer team has 11 players on the field including the goalkeeper.",
  },
  {
    question: "In which sport do you score a touchdown?",
    options: ["Basketball", "American Football", "Baseball", "Hockey"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation: "A touchdown is the primary scoring method in American Football, worth 6 points.",
  },
  {
    question: "How many rings are in the Olympic symbol?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Easy",
    explanation: "The Olympic symbol consists of five interlocking rings representing the five inhabited continents.",
  },
  {
    question: "What sport is Serena Williams famous for?",
    options: ["Golf", "Tennis", "Basketball", "Volleyball"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation: "Serena Williams is one of the greatest tennis players of all time.",
  },
  {
    question: "How many points is a basketball free throw worth?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "Easy",
    explanation: "A successful free throw in basketball is worth 1 point.",
  },
  {
    question: "What color belt represents the highest rank in karate?",
    options: ["Red", "Black", "White", "Blue"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation:
      "A black belt typically represents the highest achieved rank in karate, though there are degrees beyond it.",
  },
  {
    question: "In which sport would you perform a slam dunk?",
    options: ["Volleyball", "Basketball", "Badminton", "Tennis"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation: "A slam dunk is a basketball shot where a player jumps and forcefully puts the ball through the hoop.",
  },
  {
    question: "How many strikes result in a strikeout in baseball?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation: "In baseball, a batter is out after three strikes, called a strikeout.",
  },
  {
    question: "What sport uses a puck?",
    options: ["Field Hockey", "Ice Hockey", "Cricket", "Rugby"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation: "Ice hockey uses a rubber disc called a puck instead of a ball.",
  },
  {
    question: "Who is known as 'The Greatest' in boxing?",
    options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Sugar Ray Leonard"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy",
    explanation: "Muhammad Ali, born Cassius Clay, was known as 'The Greatest' and is considered one of boxing's best.",
  },

  // Sports - Intermediate (10 questions)
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "Brazil has won the FIFA World Cup a record 5 times (1958, 1962, 1970, 1994, 2002).",
  },
  {
    question: "What is a perfect score in bowling?",
    options: ["200", "250", "300", "350"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "A perfect game in bowling consists of 12 strikes in a row for a score of 300.",
  },
  {
    question: "Which athlete is known as 'Lightning Bolt'?",
    options: ["Carl Lewis", "Usain Bolt", "Michael Johnson", "Jesse Owens"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "Usain Bolt, nicknamed 'Lightning Bolt', is the world record holder in the 100m and 200m sprints.",
  },
  {
    question: "In tennis, what does '40-40' mean?",
    options: ["Match point", "Deuce", "Advantage", "Tie-break"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Intermediate",
    explanation:
      "In tennis, when the score is 40-40, it's called 'deuce', and a player must win by two consecutive points.",
  },
  {
    question: "Which golfer is known as 'The Golden Bear'?",
    options: ["Tiger Woods", "Arnold Palmer", "Jack Nicklaus", "Phil Mickelson"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "Jack Nicklaus earned the nickname 'The Golden Bear' and won 18 major championships.",
  },
  {
    question: "What is the distance of a marathon?",
    options: ["26.2 miles", "25 miles", "30 miles", "20 miles"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "A marathon is exactly 26.2 miles (42.195 kilometers) long.",
  },
  {
    question: "Which NBA player scored 100 points in a single game?",
    options: ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "LeBron James"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Intermediate",
    explanation:
      "Wilt Chamberlain scored 100 points for the Philadelphia Warriors in 1962, an NBA record that still stands.",
  },
  {
    question: "What does UFC stand for?",
    options: ["Ultimate Fighting Championship", "United Fighting Crew", "Universal Fight Club", "Ultimate Fight Club"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "UFC stands for Ultimate Fighting Championship, the world's premier mixed martial arts organization.",
  },
  {
    question: "Which country originated the martial art of Taekwondo?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Intermediate",
    explanation:
      "Taekwondo is a Korean martial art characterized by its emphasis on head-height kicks and jumping/spinning kicks.",
  },
  {
    question: "In cricket, what is a 'hat-trick'?",
    options: ["3 runs in a row", "3 wickets in 3 consecutive balls", "3 sixes in an over", "3 catches"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Intermediate",
    explanation: "In cricket, a hat-trick occurs when a bowler takes three wickets with three consecutive balls.",
  },

  // Sports - Hard (10 questions)
  {
    question: "Who holds the record for most Olympic gold medals?",
    options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Simone Biles"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Hard",
    explanation: "Michael Phelps has won 23 Olympic gold medals, more than any other Olympian in history.",
  },
  {
    question: "What is the only sport to have been played on the moon?",
    options: ["Football", "Golf", "Frisbee", "Baseball"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Hard",
    explanation: "Alan Shepard hit two golf balls on the moon during the Apollo 14 mission in 1971.",
  },
  {
    question: "Which Formula 1 driver has won the most World Championships?",
    options: ["Ayrton Senna", "Michael Schumacher and Lewis Hamilton (tied)", "Sebastian Vettel", "Niki Lauda"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Hard",
    explanation: "Michael Schumacher and Lewis Hamilton are tied with 7 Formula 1 World Championships each.",
  },
  {
    question: "What is the 'Fosbury Flop'?",
    options: ["Swimming technique", "High jump technique", "Gymnastics move", "Diving style"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Hard",
    explanation:
      "The Fosbury Flop is a high jump technique where the jumper goes over the bar backwards, revolutionized by Dick Fosbury.",
  },
  {
    question: "Which tennis player has won the most Grand Slam singles titles?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Hard",
    explanation: "Novak Djokovic holds the record for most Grand Slam singles titles with 24 championships.",
  },
  {
    question: "What is the 'Miracle on Ice'?",
    options: [
      "1980 US hockey Olympic victory",
      "Figure skating record",
      "Speed skating achievement",
      "Curling championship",
    ],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "Hard",
    explanation:
      "The 'Miracle on Ice' refers to the USA's upset victory over the Soviet Union in ice hockey at the 1980 Winter Olympics.",
  },
  {
    question: "Which boxer fought in the 'Thrilla in Manila'?",
    options: ["Mike Tyson vs Holyfield", "Ali vs Frazier", "Mayweather vs Pacquiao", "Tyson vs Lewis"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Hard",
    explanation: "The 'Thrilla in Manila' was the third boxing match between Muhammad Ali and Joe Frazier in 1975.",
  },
  {
    question: "What is the maximum break possible in snooker?",
    options: ["147", "180", "200", "155"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "Hard",
    explanation:
      "The maximum break in snooker is 147 points, achieved by potting all reds with blacks and then all colors.",
  },
  {
    question: "Which athlete is known for the 'Sky Hook' shot?",
    options: ["Magic Johnson", "Kareem Abdul-Jabbar", "Larry Bird", "Julius Erving"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Hard",
    explanation:
      "Kareem Abdul-Jabbar's signature 'Sky Hook' shot is considered one of the most unstoppable moves in basketball history.",
  },
  {
    question: "What does 'Grand Slam' mean in rugby?",
    options: [
      "Scoring all types of points",
      "Winning all matches in Six Nations",
      "100 international caps",
      "Perfect season",
    ],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Hard",
    explanation:
      "In rugby's Six Nations Championship, a Grand Slam means winning all five matches in a single tournament.",
  },

  // Fun - Easy (10 questions)
  {
    question: "Orange is a:",
    options: ["Fruit", "Color", "Both A and B", "Vegetable"],
    correctAnswer: 2,
    category: "Fun",
    difficulty: "Easy",
    explanation: "Orange is both a fruit and a color! The color was actually named after the fruit.",
  },
  {
    question: "What do you call a bear with no teeth?",
    options: ["A gummy bear", "A soft bear", "A baby bear", "A friendly bear"],
    correctAnswer: 0,
    category: "Fun",
    difficulty: "Easy",
    explanation: "It's a joke! A bear with no teeth would be a 'gummy' bear.",
  },
  {
    question: "Which came first?",
    options: ["The chicken", "The egg", "Scientists still debate", "Neither"],
    correctAnswer: 2,
    category: "Fun",
    difficulty: "Easy",
    explanation:
      "The chicken or egg causality dilemma is one of life's greatest mysteries that scientists and philosophers still debate!",
  },
  {
    question: "What has a face and two hands but no arms or legs?",
    options: ["A clock", "A mirror", "A painting", "A statue"],
    correctAnswer: 0,
    category: "Fun",
    difficulty: "Easy",
    explanation: "A clock has a face (the dial) and two hands (hour and minute) but no arms or legs!",
  },
  {
    question: "Can you cry underwater?",
    options: ["No, tears won't form", "Yes, but no one can tell", "Only with goggles", "It's impossible"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Easy",
    explanation: "Yes, you can cry underwater! Your tears just mix with the water so no one can see them.",
  },
  {
    question: "What goes up but never comes down?",
    options: ["A balloon", "Your age", "A rocket", "The sun"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Easy",
    explanation: "Your age only goes up and never comes back down!",
  },
  {
    question: "What has many keys but can't open doors?",
    options: ["A map", "A piano", "A keychain", "A computer"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Easy",
    explanation: "A piano has many keys (88 on a standard piano) but can't open any doors!",
  },
  {
    question: "Is tomato a fruit or vegetable?",
    options: ["Vegetable", "Fruit", "Neither", "Both"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Easy",
    explanation:
      "Scientifically, tomatoes are fruits because they develop from flowers and contain seeds, but they're often used as vegetables in cooking!",
  },
  {
    question: "What breaks when you say its name?",
    options: ["Glass", "Silence", "Ice", "A promise"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Easy",
    explanation: "Silence! As soon as you say the word 'silence', the silence is broken.",
  },
  {
    question: "Do pineapples grow on trees?",
    options: ["Yes, on palm trees", "No, on the ground", "Yes, on pineapple trees", "They grow underwater"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Easy",
    explanation: "Pineapples grow on plants close to the ground, not on trees! Many people are surprised by this fact.",
  },

  // Fun - Intermediate (10 questions)
  {
    question: "What percentage of your body is made of water?",
    options: ["About 40%", "About 60%", "About 80%", "About 50%"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Intermediate",
    explanation: "The human body is approximately 60% water, though this percentage varies by age and gender.",
  },
  {
    question: "How long is a jiffy?",
    options: ["1 second", "1/100th of a second", "No specific time", "1 minute"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Intermediate",
    explanation: "In physics, a jiffy is actually a real unit of time equal to 1/100th of a second (10 milliseconds)!",
  },
  {
    question: "Which direction does a sunset face?",
    options: ["North", "East", "West", "South"],
    correctAnswer: 2,
    category: "Fun",
    difficulty: "Intermediate",
    explanation: "The sun sets in the west, so when you watch a sunset, you're facing west!",
  },
  {
    question: "What's the only food that never spoils?",
    options: ["Salt", "Sugar", "Honey", "Rice"],
    correctAnswer: 2,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "Honey never spoils! Archaeologists have found 3000-year-old honey in Egyptian tombs that's still edible.",
  },
  {
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "Octopuses have three hearts! Two pump blood to the gills, and one pumps blood to the rest of the body.",
  },
  {
    question: "What color is a polar bear's skin?",
    options: ["White", "Pink", "Black", "Gray"],
    correctAnswer: 2,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "Polar bear skin is actually black! Their fur is transparent and appears white because it reflects light.",
  },
  {
    question: "Can hot water freeze faster than cold water?",
    options: ["Never", "Yes, it's called the Mpemba effect", "Only at high altitudes", "Only in specific containers"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "The Mpemba effect is a phenomenon where hot water can freeze faster than cold water under certain conditions!",
  },
  {
    question: "What's the fear of long words called?",
    options: ["Longwordphobia", "Hippopotomonstrosesquippedaliophobia", "Verbophobia", "Lexophobia"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "Ironically, the fear of long words is called 'Hippopotomonstrosesquippedaliophobia' - a very long word itself!",
  },
  {
    question: "Do all mirrors flip left and right?",
    options: ["Yes, always", "No, they actually flip front and back", "Only horizontally", "Only vertically"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "Mirrors don't flip left-right; they actually flip front-back! It's our perception that makes it seem like left-right flipping.",
  },
  {
    question: "What's longer: a nautical mile or a land mile?",
    options: ["They're the same", "A nautical mile", "A land mile", "It depends on location"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Intermediate",
    explanation:
      "A nautical mile (6,076 feet) is longer than a land mile (5,280 feet). It's based on the circumference of the Earth.",
  },

  // Fun - Hard (10 questions)
  {
    question: "What's the only mammal that can't jump?",
    options: ["Elephant", "Hippopotamus", "Rhinoceros", "All of the above"],
    correctAnswer: 3,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "Elephants, hippos, rhinos, and sloths are among the mammals that cannot jump due to their size and body structure!",
  },
  {
    question: "Which is the only letter that doesn't appear in any US state name?",
    options: ["Q", "Z", "X", "J"],
    correctAnswer: 0,
    category: "Fun",
    difficulty: "Hard",
    explanation: "The letter 'Q' is the only letter that doesn't appear in any U.S. state name!",
  },
  {
    question: "What's the maximum number of times you can fold a piece of paper?",
    options: ["5 times", "7-8 times", "12 times", "Unlimited"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "You can typically fold a piece of paper only about 7-8 times, regardless of its size, due to exponential thickness growth!",
  },
  {
    question: "What's technically the correct way to pronounce 'GIF'?",
    options: ["With a hard G (gift)", "With a soft G (jif)", "Either way is acceptable", "It depends on context"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "The creator of the GIF format, Steve Wilhite, stated it should be pronounced with a soft G like 'jif', though many people debate this!",
  },
  {
    question: "How many muscles does it take to smile?",
    options: ["12", "17", "26", "43"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "It takes about 17 muscles to smile, contrary to the myth that it takes more muscles to frown than to smile.",
  },
  {
    question: "What's the most common birthday in the world?",
    options: ["January 1st", "September 9th", "December 25th", "July 4th"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "September 9th is statistically the most common birthday, approximately 9 months after New Year's Eve!",
  },
  {
    question: "What happens if you sneeze with your eyes open?",
    options: ["Your eyes pop out", "Nothing special", "You can't sneeze", "You lose consciousness"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "Your eyes won't pop out if you sneeze with them open! It's just a myth. Your eyes close reflexively, but you can keep them open.",
  },
  {
    question: "What's the rarest M&M color?",
    options: ["Blue", "Brown", "Red", "Orange"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation: "Brown M&Ms are the rarest, making up only about 13% of a standard bag!",
  },
  {
    question: "Can you hum while holding your nose closed?",
    options: ["Yes, easily", "No, it's impossible", "Only for a few seconds", "Only trained singers can"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation:
      "It's impossible to hum while holding your nose because humming requires air to pass through your nasal cavity!",
  },
  {
    question: "What's the technical term for the 'fear of running out of things to read'?",
    options: ["Bibliophobia", "Abibliophobia", "Librophobia", "Readophobia"],
    correctAnswer: 1,
    category: "Fun",
    difficulty: "Hard",
    explanation: "Abibliophobia is the fear of running out of reading material - a real concern for book lovers!",
  },
]

// Shuffle all questions' options at runtime
export const QUIZ_DATA: Question[] = RAW_QUIZ_DATA.map(shuffleOptions)

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getQuestionsByTypeAndLevel(type: QuizType, level: DifficultyLevel): Question[] {
  const filtered = QUIZ_DATA.filter((q) => q.category === type && q.difficulty === level)

  // Shuffle the questions using Fisher-Yates algorithm
  const shuffled = [...filtered]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

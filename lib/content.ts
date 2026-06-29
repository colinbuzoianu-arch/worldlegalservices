export type Article = {
  slug: string;
  number: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  tag?: string;
  quote?: string;
};

export type Pillar = {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  question: string;
  articles: Article[];
};

export const pillars: Pillar[] = [
  {
    id: "ai-governance",
    number: "01",
    slug: "ai-governance",
    title: "AI Governance",
    description: "Can algorithmic decision-making replace or augment political institutions? What legal architecture would that require?",
    question: "Can algorithmic decision-making replace or augment political institutions?",
    articles: [
      { slug: "politicians-not-accountable", number: "Founding Document · I", title: "Politicians Are Not Accountable. Algorithms Could Be.", excerpt: "The structural absence of accountability in democratic governance is not a story about corruption — it is a design flaw so fundamental it persists across parties, ideologies, and generations of reformers who entered to fix it and were absorbed by it instead." },
      { slug: "laws-for-everything-except-machines", number: "Founding Document · II", title: "We Have Laws for Everything Except the Machines That Will Govern Us", excerpt: "The EU AI Act regulates AI as a product. It has nothing to say about AI as a participant in governance itself. The liability, constitutional, and jurisdictional questions are unanswered. This is the vacuum that matters most." },
      { slug: "communism-to-algorithms", number: "Founding Document · III", title: "From Communism to Algorithms: Why Eastern Europe Should Lead the AI Governance Debate", excerpt: "There is a particular kind of knowledge that only comes from having lived inside a system that lied to you. Eastern Europe has been running a very expensive, very painful field experiment on institutional accountability for most of the twentieth century." },
      { slug: "ai-parliament", number: "Founding Document · IV", title: "The AI Parliament: Multi-Agent Governance and the Architecture of Moral Consensus", excerpt: "A governance deliberation system structured as a parliament of AI agents — each embodying a distinct moral and legal tradition, each given equal standing, each required to argue and respond to challenge.", featured: true, tag: "Origin Document", quote: "The moral constitution should be sourced from thinkers who wrote in poverty and obscurity — people who held nothing but the belief that truth had value independent of whether anyone was listening." },
      { slug: "sourcing-the-moral-constitution", number: "Founding Document · V", title: "Sourcing the Moral Constitution: Criteria for the AI Governance Corpus", excerpt: "How to curate the body of moral reasoning that should ground AI governance — and why the answer is the tradition of thinkers who wrote without institutional incentive." },
    ],
  },
  {
    id: "robotics-law",
    number: "02",
    slug: "robotics-law",
    title: "Humanoid Robotics & Law",
    description: "Liability, personhood, labor law, weapons systems. The legal vacuum that nobody is filling yet.",
    question: "Who is responsible when the machine causes harm?",
    articles: [
      { slug: "legal-personhood", number: "Article · I", title: "Can a Robot Be a Person? The Legal Personhood Question Nobody Is Ready to Answer", excerpt: "Legal personhood is not a philosophical claim about consciousness or moral worth. It is a technical legal status. The question for humanoid robots is not philosophical. It is practical — and courts will be forced to answer it." },
      { slug: "liability-autonomous-systems", number: "Article · II", title: "When the Robot Causes Harm: Liability in the Age of Autonomous Systems", excerpt: "A humanoid robot working in a warehouse misreads a sensor and causes serious injury. Who is responsible? Current law cannot cleanly answer this. The inability to answer is not merely a technical legal gap — it is a structural failure." },
      { slug: "labor-law-humans", number: "Article · III", title: "Labor Law Was Built for Humans. What Happens When the Worker Is Not?", excerpt: "Every element of modern labor law was designed for one kind of worker: a human being, with a body that can be injured, a family that depends on income, a lifespan that creates economic vulnerability. The humanoid robot has none of these properties." },
      { slug: "autonomous-weapons", number: "Article · IV", title: "Autonomous Weapons and the Collapse of International Humanitarian Law", excerpt: "International humanitarian law rests on a principle so fundamental it predates the formal codification of the laws of war: lethal force requires human judgment. Lethal autonomous weapons do not have a human being at that point.", featured: true, tag: "Most Urgent", quote: "The choice between a world where lethal decisions are made by accountable human beings and a world where they are made by autonomous systems answerable to no one is not a technical choice." },
    ],
  },
  {
    id: "eu-critique",
    number: "03",
    slug: "eu-critique",
    title: "EU Policy Critique",
    description: "Resource allocation, democratic accountability, the gap between stated justifications and observable outcomes.",
    question: "Who bears the cost of decisions made without democratic mandate?",
    articles: [
      { slug: "democratic-deficit-design", number: "Article · I", title: "The Democratic Deficit Is Not a Bug. It Is the Design.", excerpt: "The democratic deficit is not an accidental flaw in an otherwise democratic system. It is a feature of a governance architecture designed from its origins to insulate certain categories of decision from democratic pressure." },
      { slug: "ukraine-funding-accountability", number: "Article · II", title: "€134 Billion and Counting: The Ukraine Funding Accountability Question", excerpt: "The EU is Ukraine's largest overall donor, having contributed over €134 billion. What was not presented is the answer to the question that €134 billion demands: where exactly did it go, and how do we know?" },
      { slug: "gas-cut-ideology", number: "Article · III", title: "The Gas Cut: When Energy Policy Becomes Ideology", excerpt: "The decision to cut Russian gas supply was presented as primarily a security and solidarity decision — the right thing to do regardless of economic cost. The economic cost was real and substantial. The debate was never adequately had." },
      { slug: "migration-without-integration", number: "Article · IV", title: "Migration Without Integration: The Cost of a Policy That Serves Nobody", excerpt: "European migration policy has managed to fail almost everyone it touches — the migrants who arrive, the communities that receive them, the asylum systems that have collapsed, and the broader European political project.", featured: true, tag: "Policy Analysis", quote: "The people who pay the price for this failure include migrants living in precarity, communities managing integration without adequate support, and taxpayers funding a system that produces worse outcomes." },
    ],
  },
  {
    id: "peace-frameworks",
    number: "04",
    slug: "peace-frameworks",
    title: "Global Peace Frameworks",
    description: "What international legal instruments exist, where they are failing, and what alternatives look like.",
    question: "What would governance look like if designed for the world that exists?",
    articles: [
      { slug: "un-charter-wrong-war", number: "Article · I", title: "The UN Charter Was Written for a War That Already Happened", excerpt: "The Charter was built for a specific threat model. The veto system, the state-centric framework, the prohibition on force — all designed for armies crossing borders. The world it was designed to govern no longer exists." },
      { slug: "icc-twenty-five", number: "Article · II", title: "The ICC at Twenty-Five: Justice for Some, Impunity for Others", excerpt: "Twenty-five years of operation have clarified the distance between the ICC's founding ambition and the practice it has produced. The Court's pattern of operations reflects the distribution of global power rather than the distribution of international crimes." },
      { slug: "nuclear-deterrence-not-legal", number: "Article · III", title: "Nuclear Deterrence Is Not a Legal Framework. It Is the Absence of One.", excerpt: "There are approximately 12,500 nuclear warheads in existence. None of the doctrines governing their potential use is subject to binding international legal constraint. Hope is not architecture." },
      { slug: "hybrid-warfare-laws", number: "Article · IV", title: "Hybrid Warfare and the Laws of War: A Framework Built for a Different Century", excerpt: "The SolarWinds operation compromised the most sensitive agencies of the most powerful government in the world. Under the laws of armed conflict, it was not an act of war. This is the hybrid warfare problem in its starkest form." },
      { slug: "climate-displacement-vacuum", number: "Article · V", title: "Climate Displacement and the Refugee Law Vacuum", excerpt: "The 1951 Refugee Convention has nothing to say about a farmer whose land has been submerged by sea level rise. These people are displaced. They are not persecuted. They have no legal status under international refugee law." },
      { slug: "ai-peace-tool", number: "Article · VI", title: "AI as a Peace Tool: The One Application Nobody Is Building", excerpt: "AI is being built into weapons systems at a pace that exceeds any governance framework. But there is another side of the relationship between AI and international peace that receives almost no serious institutional attention.", featured: true, tag: "WLS Framework", quote: "The technology exists. The need is urgent. The gap between them is institutional and political. Closing that gap is work that this platform was built to contribute to." },
    ],
  },
  {
    id: "eastern-europe",
    number: "05",
    slug: "eastern-europe",
    title: "Eastern European Angle",
    description: "Romania, Hungary, the Visegrád dynamic, post-communist governance patterns as a living case study.",
    question: "What does the most important governance laboratory of the 20th century teach us?",
    articles: [
      { slug: "transition-laboratory", number: "Article · I", title: "The Laboratory: What Thirty Years of Post-Communist Transition Taught the World About Institutions", excerpt: "Between 1989 and 1991, approximately 400 million people underwent the most compressed and consequential institutional transformation in modern history. The results are now thirty years old. They are not being read seriously enough." },
      { slug: "estonia-digital-state", number: "Article · II", title: "Estonia's Digital State: The Most Successful Governance Innovation Nobody Is Copying", excerpt: "Estonia is now the world's most advanced digital governance system. The e-Estonia story is told frequently with admiring adjectives. What almost never happens is serious analysis of why it worked and what the specific lessons are." },
      { slug: "democratic-backsliding-within", number: "Article · III", title: "Democratic Backsliding From Within: Hungary, Poland, and Slovakia as a Case Study", excerpt: "The more consequential threat to consolidated democracies is not the tank in the square. It is the parliamentary majority using legitimate democratic procedures to dismantle the institutional constraints that democracy requires to function." },
      { slug: "maidan-principle", number: "Article · IV", title: "The Maidan Principle: When Civic Revolution Is the Last Accountability Mechanism", excerpt: "Eastern Europe has produced a sustained pattern of civic mobilisation as a response to institutional failure that has no parallel in contemporary Western Europe. This pattern deserves analysis as an institutional phenomenon." },
      { slug: "accession-lever", number: "Article · V", title: "The Accession Lever: EU Enlargement as Governance Reform Engine — and Its Limits", excerpt: "The EU's eastern enlargement is the most successful large-scale governance reform program in modern history. Understanding how it worked, where it worked imperfectly, and why its effectiveness declined after accession is essential." },
      { slug: "periphery-to-center", number: "Article · VI", title: "From the Periphery to the Center: Why Eastern Europe Must Lead the Next Governance Revolution", excerpt: "Eastern Europe is not a late adopter of governance models developed elsewhere. It is a laboratory that has generated governance knowledge of the highest importance. That knowledge has not been adequately applied. Until now.", featured: true, tag: "WLS Manifesto", quote: "It is time for that knowledge to move from the periphery to the center of the conversations that will determine how the 21st century is governed." },
    ],
  },
];

export function getPillar(slug: string) {
  return pillars.find(p => p.slug === slug);
}

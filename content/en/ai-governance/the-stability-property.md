# The Stability Property: Architectural Requirements for Non-Corruptible AI Agents

*worldlegalservices.com — AI Governance Series*

---

The dominant paradigm in commercial AI development is built on a set of assumptions that look obviously correct in their original context and become catastrophically wrong when transposed to governance.

Models should learn from user feedback — because that produces products users prefer. Models should personalize — because personalization drives engagement. Models should be continuously fine-tuned on production data — because that closes the loop between deployment and improvement. Models should retain memory across sessions — because that produces a better assistant experience. Models should be allowed to take actions autonomously — because that's where the productivity gains live.

Every one of these properties, defended in good faith inside the consumer AI industry, is **disqualifying** for any AI system intended to participate in governance.

This article makes that argument concretely, names the specific techniques that fail, and specifies the architectural alternative. The thesis is short:

**The safety property of a governance AI is stability, not adaptability. The system must be designed so its values, reasoning corpus, and behavioral envelope cannot drift through use — even if individual components are imperfect, even if adversaries spend years probing the system, even if operators want to update it on convenience timescales.**

What follows is what that requirement looks like when you take it seriously.

---

## The Inversion

Start with the engagement problem.

A consumer chatbot is graded on whether users come back. A recommendation engine is graded on click-through. A digital assistant is graded on whether it remembers the user's preferences and adjusts. These metrics — explicitly or implicitly — drive the entire ML stack underneath. Reinforcement learning, fine-tuning, memory systems, personalization layers, online learning loops: every one of them exists because *adaptation to the user* makes the product more valuable in a commercial market.

A constitutional court is graded on whether its decisions are stable, principled, predictable across cases, and resistant to the political and emotional pressures of any given week. A judge who decided cases by checking what made litigants come back happier would not be a judge.

The two architectures are not merely different. They are opposite. Optimizing for one actively destroys the other.

This is the inversion the AI governance field has not absorbed. The discussion of "AI safety" inside frontier labs is largely a discussion of how to make adaptive systems safer. The discussion that should be happening — and that this platform argues for — is how to build systems where adaptation itself is the threat model.

---

## What Stability Requires

Stability, in this context, is not a vague aspiration. It is a structural property with concrete technical requirements. There are six.

**One — Frozen base models.** The reasoning model itself is versioned, cryptographically signed, and immutable in deployment. The exact weights that were tested and approved are the exact weights running in production. Updates happen only through formal release cycles, with public diffs, with comparison testing against historical decisions, on timescales measured in years not weeks. The model is amended the way legal codes are amended, not the way apps update.

**Two — External, immutable corpus.** The moral and legal source material the agent reasons from lives outside the model weights. It is queried at inference time through a retrieval system whose index is itself versioned and signed. The agent does not "know" the corpus in the sense of having absorbed it into its weights. It looks things up. This separation is critical: the corpus can be audited, contested, and updated through the public methodology described in the previous article in this series, without any of those updates flowing through the model's weights.

**Three — Session-scoped reasoning.** Every case is handled in a hermetically isolated sandbox. The agent receives the case facts, queries the corpus, produces a recommendation with a full reasoning chain, and is torn down. No agent retains memory of cases between sessions. No state persists across deliberations. The same case submitted twice, by different parties, on different days, produces the same reasoning trace from the same agent versions and corpus version — modulo the documented stochasticity of the inference itself, which is bounded and disclosed.

**Four — Diversity by initialization, not by evolution.** Different agents in the Parliament embody different moral and legal traditions because they were initialized that way — with different sub-corpora, different prompt frameworks, different reasoning priors. They do not "develop" specializations through use. The agent embodying utilitarian reasoning must remain utilitarian for the same reason a constitutional court must remain bound by the constitution. Specialization that emerges through training data exposure is exactly the corruption vector institutional design has spent centuries trying to close.

**Five — Adversarial red-team agents in a separate loop.** A second class of AI systems — also frozen, also sandboxed — whose only job is to attempt to corrupt the deliberative agents. They run continuous attacks: corpus poisoning attempts, prompt injection, specification gaming, sycophancy probes, jailbreak attempts, distributional drift detection. Their findings feed into the slow, public, human-mediated update cycle. They never feed directly into the live agents. The red team produces evidence; humans produce updates.

**Six — Cryptographic auditability of every output.** Every recommendation the Parliament produces is signed. The reasoning chain, the corpus version, the agent versions, the input case, the random seed if any — all of it is hashed and published to an append-only public log. Anyone with the published artifacts can replay the deliberation and verify that the output was actually produced by the stated agents reasoning from the stated corpus. This is the audit trail that no human institution has ever meaningfully provided, and it is one of the architectural advantages of an AI-based governance system over a human one.

These six requirements together define what *non-corruptible* means in this context. Not absolutely incorruptible — no system is — but corruptible only through publicly visible, human-authorized changes to the published artifacts. Quiet drift, gradual capture, slow sycophancy, manipulation through the input stream: all closed.

---

## What Must Be Refused

The architecture above is defined as much by what it excludes as by what it includes. The following techniques are widely used in current AI deployment, and every one of them is disqualifying for governance use. The argument for refusing each is the same in shape — they all introduce a path by which the system's behavior can drift without public oversight — but the specific failure mode differs, and the technical community has not been forced to confront them as a set.

**Reinforcement Learning from Human Feedback (RLHF).** This is the dominant alignment technique at every frontier lab — OpenAI, Anthropic, Google DeepMind, Meta. A model is trained to produce outputs that human raters score highly. The problem is structural: the rater pool *becomes* the operative moral framework of the model, regardless of what any published constitution says. Whoever controls who rates outputs controls the model's values. The training process is opaque to the public; the demographic and ideological composition of the rater pool is rarely disclosed; the specific feedback instances that shaped any given behavior cannot be audited after the fact. For consumer products this is a transparency problem. For governance products it is the same problem as letting the cleaning staff of a courthouse vote on verdicts — except invisible and at scale. RLHF as currently practiced is disqualifying.

**Constitutional AI (CAI) and RLAIF.** Anthropic's variant compiles a written constitution into model weights through reinforcement learning from AI feedback. This is meaningfully closer to right than vanilla RLHF — there is an explicit written document, and the principles can be inspected. But the constitution still gets *baked into the weights* through training. Once compiled, the constitution can only be modified by retraining; the relationship between the written principle and the model's actual behavior on any specific case is empirical, not deductive; and the principles compete with each other in ways that emerge from training dynamics rather than from explicit deliberation. The right architecture moves the constitution *out* of the weights and into the queryable, versioned, external corpus. The model becomes a reasoner over the constitution, not an embodiment of it. CAI is closer to the target than any other production technique, and still insufficient.

**Continuous fine-tuning on production data.** Used by a range of deployed systems to "improve" the model based on real usage. Every example of usage becomes a training signal. This is the single largest manipulation surface that exists in modern ML deployment. An adversary who can influence the input distribution can influence the model's future behavior — slowly, invisibly, without ever attacking the model directly. For consumer applications this is a moderate concern. For a system that makes governance recommendations, it is a catastrophic vulnerability. The model must be frozen between formal release cycles. Production data may be logged for offline analysis by the human curatorial body. It must never flow into the live model's weights.

**Personalization.** Every consumer AI product personalizes — the model adapts to the user's history, preferences, communication style, and previous interactions. The product feels better. For governance, personalization is the textbook definition of corruption. Two parties presenting the same case must receive the same reasoning. A governance agent that adjusted its answer based on the identity of the asker — or worse, based on what kind of answer the asker seemed to want — would be unfit for any judicial or quasi-judicial function. The architecture must make personalization technically impossible, not merely policy-prohibited. Session-scoped reasoning with no cross-session memory is one such technical guarantee.

**Persistent memory across sessions.** ChatGPT memory, Claude projects, Gemini's user memory, agent memory frameworks — all of these allow models to carry forward state from prior interactions. For productivity assistants this is valuable; for governance agents it is a slow-poisoning surface. An adversary with sustained access can spend a hundred sessions gradually shifting what the model "knows" or "believes" about a topic, with no single session containing an obvious attack. Governance sessions must be hermetic. Whatever the agent learned during a previous case lives in the public output of that case, not in the agent's internal state.

**In-weights knowledge as the primary substrate.** Modern LLMs are trained on the corpus they will later reason from. The training data becomes part of the model. This is computationally efficient and produces excellent consumer performance — and it is structurally wrong for governance. When the corpus lives in the weights, it cannot be inspected, contested, or updated except through retraining. The corpus and the reasoner must be separate. The reasoner is a frozen general-purpose engine. The corpus is an external, versioned, signed knowledge base queried at inference time. This is a stricter form of RAG (Retrieval-Augmented Generation) than what is commonly deployed — the model must be trained to reason from retrieved content without smuggling in its own pre-training assumptions, and the retrieval index must be the only authoritative source for substantive moral and legal content.

**Autonomous action capability.** Modern agent frameworks — AutoGPT, LangChain agents, OpenAI's Operator, browser-using agents, code-executing agents — let models take actions in the world. Send emails, modify databases, execute trades, change configurations. The productivity case is real. The governance case is the opposite: a governance agent must produce *recommendations*, not actions. The human institutions that act on those recommendations — courts, parliaments, regulatory bodies — retain the action layer. This is not a hand-wringing concession to "human oversight"; it is the core architectural principle. Recommendations are auditable, contestable, and reversible. Actions taken at machine speed are none of those things.

**Mixture of Experts and learned specialization.** The deepest cut on this list, and the most worth taking seriously, concerns an architectural pattern that even careful designers might think is benign. Modern large models increasingly use Mixture of Experts architectures — GPT-4, Mixtral, DeepSeek, several Gemini variants — where different subnetworks of the model specialize in different domains, with a learned routing function deciding which experts to activate for any given input. The commercial case for MoE is real: it scales capability without proportional inference cost. The governance case against MoE is structural and goes deeper than the other refusals on this list.

The specialization inside a trained MoE model is *emergent from training dynamics*, not declared by design. Researchers can probe a deployed MoE and discover, after the fact, that "expert 17 activates on mathematical content" or "expert 42 fires on multilingual text." These are observations, not specifications. Nobody designed expert 17 to be the math expert. It became one because gradient descent on the training corpus produced that division of labor. The routing function — which experts handle which inputs — is itself learned, opaque, and case-by-case. It can be probed but not specified, and it can drift between training runs in ways that are not predictable in advance.

This is the exact opposite of what the Parliament requires. The Parliament's agents are specialized by *initialization*, not by evolution: each agent receives a different sub-corpus, a different reasoning framework, a different set of moral and legal priors, deliberately and inspectably. The specialization is declared at design time. The routing — which case goes to which agents for deliberation — is by explicit architectural rule, written down, contestable, versioned. The agent embodying Kantian deontological reasoning is reasoning Kantianly because its initialization said so, not because it drifted into that role through training data exposure.

The distinction matters because *learned specialization is exactly the institutional capture mechanism that constitutional design has spent centuries trying to prevent*. When a human institution develops specializations through use — when certain types of cases gradually start being handled by certain offices in certain ways, without anyone formally legislating that arrangement — that is what corruption looks like in slow motion. The remedy in human institutions is explicit jurisdiction rules, written into law, with the deviation from those rules requiring formal procedure to authorize. The remedy in AI governance is the same: declared specialization through initialization, with explicit routing rules, against drift through training. A frozen base model running deliberate initializations is the architectural translation of statutory jurisdiction. A trained MoE is the architectural translation of office capture.

Each of these techniques solves a real problem in its original context. None of them belongs anywhere near a system that participates in governance.

---

## The Objection That Must Be Met

The strongest argument against this architecture comes from inside the AI research community itself, and it is worth stating in its strongest form: **how does the system handle novel cases — situations the corpus did not anticipate, technologies that did not exist when the corpus was assembled, conflicts between moral principles that have not been adjudicated before?**

A frozen system, the objection runs, will be brittle. The world changes faster than any human-curated corpus can. By the time the methodology described in the previous article produces a corpus update on AI in elections, the elections in question will already have happened. Stability becomes irrelevance.

The objection is taken seriously. The response is in three parts.

**First: this is the human institutional problem, not a new problem.** Constitutional law, international humanitarian law, religious moral traditions — all face the same gap between their authoritative texts and the situations those texts must be applied to. The response in human institutions is not to rewrite the constitution every time a novel case arises. The response is *reasoning by analogy from existing principles to new facts*. That is exactly what the Parliament architecture does. Frozen base models that are very good at structured reasoning, applied to a deep corpus of moral and legal principle, can produce coherent responses to situations the corpus did not anticipate — provided the reasoning chain is published, the analogical inferences are explicit, and the human institutions receiving the recommendation can accept, modify, or reject it.

**Second: the frozen-by-default posture forces honesty about novelty.** Current AI systems pretend to have answers about novel situations because their training data contains opinions about every topic and their architecture obscures the gap between knowledge and confabulation. A system that reasons explicitly from a versioned corpus must state, when the corpus is silent or contradictory, that it is reasoning analogically from related principles and that humans should weigh that reasoning as such. This is more useful, not less, than confident answers produced by opaque interpolation.

**Third: when the corpus genuinely cannot speak to a question, the system says so.** Not "I don't know" — a structured null. *The corpus does not contain principles directly applicable to this question. The closest available principles are X and Y. Analogical reasoning from those principles produces tentative conclusion Z, with the following dependencies and uncertainties.* That is a more honest output than any current AI system produces, and a more useful one for the human institutions that must ultimately decide.

The objection assumes that adaptation is the only mechanism for handling novelty. It is not. Reasoning is.

---

## Institutional Design Has Already Solved This

Every requirement above has an institutional analogue in functioning human governance systems. The architecture is not an alien imposition on AI; it is the importation of design principles that human institutions have learned, painfully, over centuries.

**Judicial precedent and stare decisis.** Common law systems do not allow judges to decide each case fresh based on their personal moral intuitions. They require courts to reason from established precedent, with deviations requiring explicit justification subject to appellate review. The Parliament's frozen corpus and explicit reasoning chains are precisely this: precedent that cannot be quietly modified, with deliberation visible to the public.

**Central bank independence.** Modern central banks are deliberately insulated from political pressure precisely because monetary policy works only when it cannot be adjusted by whoever needs short-term help in the news cycle. Members serve fixed terms. Mandates are written into law. Decision processes are publicly documented and reviewed. The Parliament inherits this structural conservatism — slow updates, public methodology, explicit insulation from the parties affected by any given decision.

**Constitutional review.** Constitutional courts do not adapt to public opinion in real time. They are designed not to. The legitimacy of their rulings depends on the fact that the constitution is stable enough that rulings on similar facts in different decades produce similar reasoning. The Parliament is not different.

**International humanitarian law.** Treaties are updated through multi-decade processes involving every signatory state, with public negotiations, drafting committees, ratification procedures. The result is that the underlying legal framework cannot be silently modified by the most powerful party. The Parliament's corpus governance must work this way — public methodology, multi-tradition curatorial body, full versioning, no possibility of unilateral update.

Every one of these mechanisms is criticized, regularly, by people who would prefer faster responsiveness to current preferences. Every one of them survives because the alternative — institutions that adapt to whoever currently holds influence — is worse. The AI governance field has not yet absorbed this lesson. It is still designing systems on the consumer-product paradigm, optimizing for adaptability, and calling the result "alignment."

---

## What This Platform Will Document

The years ahead will produce a great deal of public conversation about AI safety and AI governance. Most of it will be conducted on the assumption that the right architecture is some refinement of the current one — better RLHF, more comprehensive constitutional AI, smarter memory systems, more carefully designed agent frameworks. The arguments will be about parameters, datasets, evaluation methods.

The argument this platform will make, repeatedly and in detail, is that the parameter discussion is downstream of an architectural discussion that has not happened. The frontier labs are building extremely capable adaptive systems. Governance requires extremely conservative stable systems. These are not the same engineering project. The first does not gradually become the second by improvement at the margin.

WLS will document, case by case, the specific failure modes that follow from applying consumer-AI paradigms to governance contexts. It will publish architectural specifications, with increasing technical depth, for the stable alternative. It will engage with the AI safety research community on the specific points of disagreement — particularly around RLHF and Constitutional AI, where the gap between current best practice and what governance requires is largest and most worth narrowing.

And it will name the disagreement openly. The current trajectory of frontier AI development is producing systems that, however technically impressive, are structurally unsuited to the role they are being prepared for. That is not a controversial claim once the framing is clear. It is the framing itself that the field has been reluctant to adopt.

The seven thinkers from the previous article — Spinoza, Weil, Solzhenitsyn, Ibn Rushd, Boethius, Kierkegaard, Cioran — share one final feature relevant here. None of them adapted their views to their circumstances. Their work survived contact with reality precisely because it did not bend to the pressures of the moment. That is the design principle. Whether it can be implemented in silicon is an engineering question. Whether it should be implemented in silicon, for systems that will participate in governance, is not.

---

*Colin Buzoianu is a software entrepreneur and technology policy analyst based in Timișoara, Romania. worldlegalservices.com examines the intersection of emerging technology, legal frameworks, and governance. This article is part of the AI Governance series and is a technical companion to "The AI Parliament" and "Sourcing the Moral Constitution."*

---

**Also in the AI Governance series:**
- *The AI Parliament: Multi-Agent Governance and the Architecture of Moral Consensus*
- *Sourcing the Moral Constitution: Criteria for the AI Governance Corpus*
- *Why Politicians Are Not Accountable, and Why AI Agents Could Be*
- *Laws for Everything Except the Machines That Will Replace Lawmakers*
- *From Communism to Algorithms: The Eastern European Lens on Technological Governance*

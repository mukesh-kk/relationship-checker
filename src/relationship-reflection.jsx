import { useState } from "react";

const GOOGLE_FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap');`;

const sections = [
  {
    id: "communication",
    emoji: "💬",
    title: "Communication",
    color: "#c97b5a",
    questions: [
      {
        id: "c1",
        type: "option",
        text: "When you have something difficult to say, you usually...",
        options: [
          "Say it directly, even if it's uncomfortable",
          "Wait for the right moment that never quite comes",
          "Drop hints and hope they notice",
          "Swallow it to keep the peace",
        ],
      },
      {
        id: "c2",
        type: "option",
        text: "After a serious argument, what's most true?",
        options: [
          "We resolve it and actually feel closer after",
          "One of us apologizes just to end it, not because we mean it",
          "It gets buried — not resolved, just avoided",
          "I'm not sure we've ever fully resolved anything",
        ],
      },
      {
        id: "c3",
        type: "option",
        text: "Your partner is clearly upset but says 'I'm fine.' You...",
        options: [
          "Already know what's wrong without them saying a word",
          "Ask once, then genuinely respect their silence",
          "Feel anxious and keep pressing until they open up",
          "Feel quietly relieved and let it go",
        ],
      },
      {
        id: "c4",
        type: "reflect",
        text: "What's the one thing you've never said to your partner — and why haven't you said it?",
        prompt: "Be honest. This is just for you.",
      },
    ],
  },
  {
    id: "connection",
    emoji: "🔥",
    title: "Emotional Intimacy",
    color: "#9b4f6e",
    questions: [
      {
        id: "e1",
        type: "option",
        text: "When you imagine your life without your partner, you feel...",
        options: [
          "Genuinely at peace — I know I'd be okay",
          "Scared. Not just sad, but scared.",
          "Relieved — then guilty for feeling that",
          "Like a part of me would simply be missing",
        ],
      },
      {
        id: "e2",
        type: "option",
        text: "If you're honest, you stay in this relationship mostly because...",
        options: [
          "I genuinely choose them — every single day",
          "We've built so much. Leaving feels impossible.",
          "I'm afraid of what's waiting on the other side",
          "I love them, but I'm not sure it's enough anymore",
        ],
      },
      {
        id: "e3",
        type: "option",
        text: "When your partner looks at you, you feel...",
        options: [
          "Truly seen — even the parts I try to hide",
          "Seen for who they want me to be, not who I am",
          "Invisible sometimes, even in the same room",
          "Loved, but not fully known",
        ],
      },
      {
        id: "e4",
        type: "reflect",
        text: "Describe the version of yourself you've never shown your partner. What stops you from letting them see it?",
        prompt: "Go deeper than you think you need to.",
      },
    ],
  },
  {
    id: "appreciation",
    emoji: "✨",
    title: "Appreciation & Growth",
    color: "#6b7fa3",
    questions: [
      {
        id: "a1",
        type: "option",
        text: "Five years from now, you and your partner are...",
        options: [
          "Deeper, more intentional, still choosing each other",
          "Probably the same — comfortable but unchanged",
          "Honestly, I can't picture it clearly anymore",
          "Either transformed together — or we've gone separate ways",
        ],
      },
      {
        id: "a2",
        type: "option",
        text: "When your partner succeeds at something big, your first instinct is...",
        options: [
          "Pure, unguarded pride — no hesitation",
          "Pride mixed with a quiet, private insecurity",
          "A flicker of wondering if their growth will outpace mine",
          "Happy for them, but I rarely say how much",
        ],
      },
      {
        id: "a3",
        type: "option",
        text: "The thing that keeps you most grateful for them is...",
        options: [
          "Who they quietly push me to become",
          "The safety and comfort they bring to my life",
          "That they stayed when it would've been easier not to",
          "I'm still searching for the clearest answer",
        ],
      },
      {
        id: "a4",
        type: "reflect",
        text: "In what one specific way have you changed as a person because of this relationship — and is that a change you're proud of?",
        prompt: "Don't answer who you want to be. Answer who you've become.",
      },
    ],
  },
  {
    id: "needs",
    emoji: "🌱",
    title: "Needs & Boundaries",
    color: "#5a8a72",
    questions: [
      {
        id: "n1",
        type: "option",
        text: "When your needs conflict with your partner's, what usually happens?",
        options: [
          "We talk until both of us genuinely feel heard",
          "I quietly give in — it's easier than the tension",
          "They tend to get what they want, one way or another",
          "We fight, then one of us shuts down and retreats",
        ],
      },
      {
        id: "n2",
        type: "option",
        text: "The version of yourself you show your partner is...",
        options: [
          "Fully real — I don't perform for them",
          "Mostly real, but I dim certain parts of myself",
          "A careful, curated version — I fear what full honesty costs",
          "I'm not sure who I am with them anymore",
        ],
      },
      {
        id: "n3",
        type: "option",
        text: "If your partner never changed — not one thing about them — you would...",
        options: [
          "Be at peace. I love exactly who they are.",
          "Accept it, but feel something quietly missing",
          "Slowly grow resentful without meaning to",
          "Eventually have to leave, and that terrifies me",
        ],
      },
      {
        id: "n4",
        type: "reflect",
        text: "What's one boundary you've never enforced with your partner — and what has staying silent about it cost you?",
        prompt: "The answer you avoid is usually the one that matters.",
      },
    ],
  },
];

const loveQuoteLines = [
  { text: "Sex isn't love. Dating isn't love.", bold: false },
  { text: "Talking every hour of every day isn't love.", bold: false },
  { text: "Staying up all night with someone isn't love.", bold: false },
  { text: "None of that proves anything.", bold: false },
  { text: "", bold: false },
  { text: "Love is someone seeing you at your absolute lowest.", bold: true },
  { text: "And loving you exactly the same.", bold: true },
  { text: "", bold: false },
  { text: "It's someone stepping up for you when you don't have the strength to stand.", bold: false },
  { text: "It's someone holding you close and calming you down while you're falling apart in their arms.", bold: false },
  { text: "", bold: false },
  { text: "It's someone reminding you of everything good about you when all you can see are your flaws.", bold: false },
  { text: "", bold: false },
  { text: "It's someone praying for you, checking on you, feeling you — even when you don't say a word.", bold: false },
  { text: "It's loyalty when you're not around.", bold: false },
  { text: "Respect behind your back.", bold: false },
  { text: "Choosing you in rooms full of options.", bold: true },
  { text: "", bold: false },
  { text: "It's someone cutting off anything that threatens your peace or makes you uncomfortable.", bold: false },
  { text: "It's someone who can pull a smile out of you on your worst days.", bold: false },
  { text: "", bold: false },
  { text: "Someone who stays.", bold: true },
  { text: "Someone who chooses you every single day.", bold: true },
  { text: "", bold: false },
  { text: "That's what real love looks like.", bold: false },
  { text: "And if you ever find something like that,", bold: false },
  { text: "don't take it for granted. Don't play with it.", bold: false },
  { text: "Because that kind of love is rare.", bold: true },
];

function OptionQuestion({ question, value, onChange, accent }) {
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "0.97rem",
        color: "#2a1f1a",
        lineHeight: 1.65,
        marginBottom: "0.85rem",
      }}>
        {question.text}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {question.options.map((opt, i) => {
          const selected = value === i;
          return (
            <button
              key={i}
              onClick={() => onChange(i)}
              style={{
                padding: "0.65rem 1rem",
                borderRadius: "0.6rem",
                border: `1.5px solid ${selected ? accent : "#d4c5b8"}`,
                background: selected ? `${accent}18` : "rgba(255,255,255,0.5)",
                color: selected ? accent : "#5a4a40",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                fontWeight: selected ? 700 : 300,
                cursor: "pointer",
                transition: "all 0.18s ease",
                textAlign: "left",
                lineHeight: 1.5,
                width: "100%",
                boxSizing: "border-box",
                borderLeft: selected ? `4px solid ${accent}` : `4px solid transparent`,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReflectQuestion({ question, value, onChange }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: "1rem",
        color: "#4a3728",
        lineHeight: 1.75,
        marginBottom: "0.6rem",
      }}>
        "{question.text}"
      </p>
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.prompt}
        rows={4}
        style={{
          width: "100%",
          padding: "0.85rem 1rem",
          borderRadius: "0.6rem",
          border: "1px solid #d4c5b8",
          background: "rgba(255,255,255,0.55)",
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "0.9rem",
          color: "#2a1f1a",
          resize: "vertical",
          outline: "none",
          boxSizing: "border-box",
          lineHeight: 1.65,
        }}
      />
    </div>
  );
}

function ScoreBar({ score, max, color }) {
  const pct = max > 0 ? (score / max) * 100 : 0;
  const level = pct >= 75 ? "Thriving" : pct >= 50 ? "Solid" : pct >= 25 ? "Needs Attention" : "Worth Exploring";
  return (
    <div style={{ marginBottom: "0.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#7a6a60", fontWeight: 300 }}>{level}</span>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: color, fontWeight: 700 }}>{Math.round(pct)}%</span>
      </div>
      <div style={{ height: "6px", background: "#ede4dc", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: "3px", transition: "width 1s ease" }} />
      </div>
    </div>
  );
}

function LoveQuote() {
  return (
    <div style={{
      marginTop: "2rem",
      background: "linear-gradient(160deg, #2a1a14 0%, #3d1f2b 50%, #1a2435 100%)",
      borderRadius: "1.25rem",
      padding: "2.5rem 1.75rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "160px", height: "160px",
        background: "radial-gradient(circle, rgba(201,123,90,0.25) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-30px", left: "-30px",
        width: "120px", height: "120px",
        background: "radial-gradient(circle, rgba(155,79,110,0.2) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "4.5rem",
        color: "rgba(201,123,90,0.3)",
        lineHeight: 0.5,
        marginBottom: "1.25rem",
        userSelect: "none",
      }}>"</div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {loveQuoteLines.map((line, i) =>
          line.text === "" ? (
            <div key={i} style={{ height: "0.7rem" }} />
          ) : (
            <p key={i} style={{
              fontFamily: line.bold ? "'Playfair Display', serif" : "'Lato', sans-serif",
              fontStyle: line.bold ? "italic" : "normal",
              fontWeight: line.bold ? 600 : 300,
              fontSize: line.bold ? "1.05rem" : "0.9rem",
              color: line.bold ? "#f0d5c0" : "rgba(240,213,192,0.7)",
              lineHeight: 1.75,
              margin: "0 0 0.1rem",
            }}>
              {line.text}
            </p>
          )
        )}
      </div>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "4.5rem",
        color: "rgba(155,79,110,0.3)",
        lineHeight: 0.5,
        textAlign: "right",
        marginTop: "1.25rem",
        userSelect: "none",
      }}>"</div>
    </div>
  );
}

export default function RelationshipReflection() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  function setAnswer(qid, val) {
    setAnswers((prev) => ({ ...prev, [qid]: val }));
  }

  function navigate(dir) {
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + dir);
      setAnimating(false);
    }, 220);
  }

  function getSectionScore(section) {
    const optQs = section.questions.filter((q) => q.type === "option");
    const answered = optQs.filter((q) => answers[q.id] !== undefined);
    // score: option 0 = best (4pts), option 3 = most concerning (1pt)
    const total = answered.reduce((sum, q) => sum + (4 - (answers[q.id] || 0)), 0);
    return { score: total, max: optQs.length * 3, answered: answered.length };
  }

  const currentSection = step >= 1 && step <= sections.length ? sections[step - 1] : null;

  const overallScore = sections.reduce((sum, s) => sum + getSectionScore(s).score, 0);
  const overallMax = sections.reduce((sum, s) => sum + getSectionScore(s).max, 0);
  const overallPct = overallMax > 0 ? (overallScore / overallMax) * 100 : 0;

  const overallLabel =
    overallPct >= 75
      ? { text: "Deeply Connected", sub: "Your relationship has real roots. Keep nurturing what's working.", icon: "🌸" }
      : overallPct >= 50
      ? { text: "Warmly Bonded", sub: "A solid foundation. A little more intentionality can deepen things further.", icon: "🕯️" }
      : overallPct >= 25
      ? { text: "Room to Grow", sub: "There's genuine potential here. The fact that you're reflecting is already an act of love.", icon: "🌱" }
      : { text: "Time for Honest Conversation", sub: "Consider talking openly with your partner — or a counselor. Reaching out is brave.", icon: "💙" };

  const tips = {
    communication: "This week, set aside 15 uninterrupted minutes. Ask your partner: 'What's been on your mind that you haven't told me?'",
    connection: "Plan one intentional evening — no phones, no agenda. Just presence. Even 30 minutes of it can shift something.",
    appreciation: "Send your partner one specific, heartfelt message today. Not 'I love you' — something more precise. Specificity lands.",
    needs: "Write down one unspoken need. Then share it gently: 'I'd feel closer to you if...' and let them respond.",
  };

  return (
    <>
      <style>{`
        ${GOOGLE_FONTS}
        * { box-sizing: border-box; }
        body { margin: 0; }
        textarea:focus { border-color: #c97b5a !important; box-shadow: 0 0 0 3px rgba(201,123,90,0.12); }
        @media (max-width: 480px) {
          .section-card { padding: 1.5rem !important; }
          .nav-btn { padding: 0.6rem 1rem !important; font-size: 0.78rem !important; }
          .intro-title { font-size: 1.75rem !important; }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9f3ed 0%, #f0e4d7 50%, #e8d5c4 100%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "3rem 1rem 2rem",
        fontFamily: "'Lato', sans-serif",
      }}>

        {/* Progress dots */}
        {step > 0 && step <= sections.length && (
          <div style={{
            position: "fixed", top: "1.25rem", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", gap: "0.45rem", zIndex: 10,
          }}>
            {sections.map((s, i) => (
              <div key={i} style={{
                width: step - 1 === i ? "22px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: step - 1 === i ? s.color : step - 1 > i ? "#b09080" : "#d4c5b8",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>
        )}

        <div style={{
          width: "100%",
          maxWidth: "580px",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}>

          {/* ── INTRO ── */}
          {step === 0 && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🪞</div>
              <h1 className="intro-title" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.2rem",
                fontWeight: 600,
                color: "#2a1f1a",
                lineHeight: 1.3,
                margin: "0 0 1rem",
              }}>
                Relationship<br />Reflection
              </h1>
              <p style={{
                color: "#7a6a60", fontWeight: 400, fontSize: "1rem",
                lineHeight: 1.85, maxWidth: "400px", margin: "0 auto 2rem",
              }}>
                A quiet, private space to check in with yourself about your romantic relationship. <strong> No right answers — just honest ones.</strong>
              </p>
              <div style={{
                background: "rgba(255,255,255,0.55)",
                borderRadius: "1rem",
                padding: "1.25rem 1.5rem",
                marginBottom: "2rem",
                textAlign: "left",
                border: "1px solid rgba(255,255,255,0.85)",
              }}>
                {sections.map((s) => (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.55rem" }}>
                    <span style={{ fontSize: "1.1rem" }}>{s.emoji}</span>
                    <span style={{ fontSize: "0.9rem", color: "#4a3728", fontWeight: 400 }}>{s.title}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate(1)}
                style={{
                  background: "#c97b5a", color: "#fff", border: "none",
                  padding: "0.9rem 2.5rem", borderRadius: "3rem",
                  fontFamily: "'Lato', sans-serif", fontSize: "1rem",
                  fontWeight: 700, letterSpacing: "0.05em",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(201,123,90,0.4)",
                }}
              >
                Begin Reflection →
              </button>
              <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#b09080", fontWeight: 300 }}>
                ~7 minutes · completely private 
              </p>
            </div>
          )}

          {/* ── SECTION ── */}
          {currentSection && (
            <div>
              <div
                className="section-card"
                style={{
                  background: "rgba(255,255,255,0.58)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.88)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{currentSection.emoji}</span>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    color: currentSection.color,
                    margin: 0, fontWeight: 600,
                  }}>{currentSection.title}</h2>
                </div>

                {currentSection.questions.map((q) =>
                  q.type === "option" ? (
                    <OptionQuestion
                      key={q.id}
                      question={q}
                      value={answers[q.id]}
                      onChange={(v) => setAnswer(q.id, v)}
                      accent={currentSection.color}
                    />
                  ) : (
                    <ReflectQuestion
                      key={q.id}
                      question={q}
                      value={answers[q.id]}
                      onChange={(v) => setAnswer(q.id, v)}
                    />
                  )
                )}
              </div>

              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginTop: "1.25rem",
                gap: "0.75rem",
              }}>
                <button
                  className="nav-btn"
                  onClick={() => navigate(-1)}
                  style={{
                    background: "transparent",
                    border: "1.5px solid #d4c5b8",
                    color: "#7a6a60",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "2rem",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >← Back</button>

                <span style={{ fontSize: "0.78rem", color: "#b09080", fontWeight: 300, whiteSpace: "nowrap" }}>
                  {step} / {sections.length}
                </span>

                <button
                  className="nav-btn"
                  onClick={() => navigate(1)}
                  style={{
                    background: currentSection.color,
                    color: "#fff", border: "none",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "2rem",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700, cursor: "pointer",
                    boxShadow: `0 3px 14px ${currentSection.color}55`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step === sections.length ? "See My Insights →" : "Continue →"}
                </button>
              </div>
            </div>
          )}

          {/* ── INSIGHTS ── */}
          {step === sections.length + 1 && (
            <div>
              {/* Score card */}
              <div style={{
                background: "rgba(255,255,255,0.62)",
                borderRadius: "1.25rem",
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.88)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
                marginBottom: "1.25rem",
              }}>
                <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{overallLabel.icon}</div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem", color: "#2a1f1a",
                    margin: "0 0 0.5rem",
                  }}>{overallLabel.text}</h2>
                  <p style={{
                    color: "#7a6a60", fontWeight: 300, fontSize: "0.9rem",
                    lineHeight: 1.7, maxWidth: "340px", margin: "0 auto",
                  }}>
                    {overallLabel.sub}
                  </p>
                </div>

                <p style={{
                  fontSize: "0.68rem", textTransform: "uppercase",
                  letterSpacing: "0.12em", color: "#b09080",
                  marginBottom: "1rem", fontWeight: 700,
                }}>By Area</p>

                {sections.map((s) => {
                  const { score, max } = getSectionScore(s);
                  return (
                    <div key={s.id} style={{ marginBottom: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                        <span style={{ fontSize: "0.9rem" }}>{s.emoji}</span>
                        <span style={{ fontSize: "0.85rem", color: "#4a3728", fontWeight: 400 }}>{s.title}</span>
                      </div>
                      <ScoreBar score={score} max={max} color={s.color} />
                    </div>
                  );
                })}
              </div>

              {/* Reflections */}
              {sections.some((s) =>
                s.questions.filter((q) => q.type === "reflect").some((q) => answers[q.id])
              ) && (
                <div style={{
                  background: "rgba(250,243,237,0.75)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  borderLeft: "4px solid #c97b5a",
                  marginBottom: "1.25rem",
                }}>
                  <p style={{
                    fontSize: "0.68rem", textTransform: "uppercase",
                    letterSpacing: "0.12em", color: "#b09080",
                    marginBottom: "1rem", fontWeight: 700,
                  }}>Your Reflections</p>
                  {sections.map((s) =>
                    s.questions
                      .filter((q) => q.type === "reflect" && answers[q.id])
                      .map((q) => (
                        <div key={q.id} style={{ marginBottom: "1rem" }}>
                          <p style={{
                            fontFamily: "'Playfair Display', serif",
                            fontStyle: "italic", fontSize: "0.8rem",
                            color: "#9b7060", marginBottom: "0.3rem",
                          }}>
                            {s.emoji} {q.text}
                          </p>
                          <p style={{
                            fontSize: "0.88rem", color: "#2a1f1a",
                            fontWeight: 300, lineHeight: 1.65,
                          }}>
                            {answers[q.id]}
                          </p>
                        </div>
                      ))
                  )}
                </div>
              )}

              {/* One small step */}
              <div style={{
                background: "rgba(255,255,255,0.48)",
                borderRadius: "1rem",
                padding: "1.25rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.8)",
                marginBottom: "0",
              }}>
                <p style={{
                  fontSize: "0.68rem", textTransform: "uppercase",
                  letterSpacing: "0.12em", color: "#b09080",
                  marginBottom: "0.65rem", fontWeight: 700,
                }}>One Small Step</p>
                {(() => {
                  const lowest = sections.reduce((min, s) => {
                    const { score, max } = getSectionScore(s);
                    const pct = max > 0 ? score / max : 1;
                    return pct < min.pct ? { pct, section: s } : min;
                  }, { pct: Infinity, section: sections[0] });
                  return (
                    <p style={{ fontSize: "0.9rem", color: "#4a3728", fontWeight: 300, lineHeight: 1.75 }}>
                      {tips[lowest.section.id]}
                    </p>
                  );
                })()}
              </div>

              {/* Love Quote */}
              <LoveQuote />

              {/* Buttons */}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button
                  onClick={() => navigate(-1)}
                  style={{
                    flex: 1, background: "transparent",
                    border: "1.5px solid #d4c5b8", color: "#7a6a60",
                    padding: "0.7rem", borderRadius: "2rem",
                    fontFamily: "'Lato', sans-serif", fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >← Review</button>
                <button
                  onClick={() => { setAnswers({}); setStep(0); }}
                  style={{
                    flex: 1, background: "#c97b5a", color: "#fff",
                    border: "none", padding: "0.7rem",
                    borderRadius: "2rem",
                    fontFamily: "'Lato', sans-serif", fontSize: "0.85rem",
                    fontWeight: 700, cursor: "pointer",
                    boxShadow: "0 3px 14px rgba(201,123,90,0.3)",
                  }}
                >Start Over</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
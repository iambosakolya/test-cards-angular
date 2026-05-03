const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/data/questions.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Formulaic phrases to bold — longer phrases first to avoid partial matches
const phrases = [
  // Opening assessments
  `Well, I think that's probably okay either way`,
  `Well, I think that's probably okay`,
  `Well, I think it may not be a good idea`,

  // Scenario intros
  `If you're in a situation where`,
  `if you're working on a complex feature or dealing with a critical part of the system`,
  `if you're working on a critical part of the system`,

  // Connectors & transitions
  `On top of that`,
  `Now, that said`,
  `And for that reason`,

  // Recommendations
  `is probably your best bet`,

  // Consequences
  `could potentially lead to`,
  `could potentially end up with`,
  `will inevitably end up with`,
  `inevitably leads to`,

  // Benefits
  `has the added bonus that`,
  `it has the added bonus that`,

  // Risks
  `poses significant risks to`,
  `poses serious risks to`,
  `poses risks to`,
  `pose significant risks to`,

  // Side effects
  `has the side effect of`,
  `have the side effect of`,

  // Trade-offs & judgments
  `there's always a trade-off between`,
  `It's really just a matter of`,
  `we'll have to make a judgment call`,
  `make a judgment call`,

  // Urgency
  `is facing tough competition and urgently needs`,

  // Importance
  `it's crucial to remember that`,

  // Qualifier
  `depending on`,

  // Conditional phrases
  `it may not be a good idea`,
  `may not be a good idea`,
];

// Escape special regex chars in the phrase
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Track what's been bolded to avoid double-bolding
// We process longer phrases first
for (const phrase of phrases) {
  const escaped = escapeRegex(phrase);
  // Only bold if not already inside a <b> tag
  const regex = new RegExp(`(?<!<b>)(?<!<b>[^<]*)\\b(${escaped})`, 'g');
  // Simpler approach: just replace all occurrences, but skip if already bolded
  content = content.replace(new RegExp(escaped, 'g'), (match, offset) => {
    // Check if already inside <b> tags
    const before = content.substring(Math.max(0, offset - 10), offset);
    if (before.includes('<b>')) {
      // Check if there's a closing </b> between the <b> and current position
      const segment = content.substring(content.lastIndexOf('<b>', offset), offset);
      if (!segment.includes('</b>')) {
        return match; // Already inside bold tags
      }
    }
    return `<b>${match}</b>`;
  });
}

// Clean up any nested bold tags (shouldn't happen but just in case)
content = content.replace(/<b><b>/g, '<b>');
content = content.replace(/<\/b><\/b>/g, '</b>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done! Formulaic phrases have been bolded.');

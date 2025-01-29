import { useEffect, useState } from "react";

interface StoryDisplayProps {
  story: string;
}

export default function StoryDisplay({ story }: StoryDisplayProps) {
  const [formattedStory, setFormattedStory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // AI-powered formatting function
  const formatStory = async (text: string): Promise<string[]> => {
    setLoading(true);

    // Simulated AI detected keywords
    const importantWords = ["warrior", "battle", "legend", "mystical", "courage", "kingdom", "shadow", "fearless"];
    const regex = new RegExp(`\\b(${importantWords.join("|")})\\b`, "gi");

    // Bold important words
    let highlightedText = text.replace(regex, "<strong>$1</strong>");

    // Break text into paragraphs at full stops (.), exclamations (!), or question marks (?)
    const paragraphs = highlightedText
      .split(/([.!?])\s+/)
      .reduce((acc: string[], curr: string, i, arr) => {
        if (curr.match(/[.!?]/)) {
          acc[acc.length - 1] += curr; // Append punctuation to previous sentence
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
      .filter((p) => p.length > 0); // Remove empty segments

    setLoading(false);
    return paragraphs;
  };

  useEffect(() => {
    formatStory(story).then(setFormattedStory);
  }, [story]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl transition-all duration-300">
      {/* <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">📖 Your Story</h1> */}

      {loading ? (
        <p className="text-gray-500 text-center animate-pulse">✨ Formatting your story...</p>
      ) : (
        formattedStory.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))
      )}
    </div>
  );
}

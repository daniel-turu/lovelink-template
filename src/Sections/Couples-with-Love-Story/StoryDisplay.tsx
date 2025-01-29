import { useEffect, useState } from "react";

interface StoryDisplayProps {
  story: string;
}

export default function StoryDisplay({ story }: StoryDisplayProps) {
  const [formattedStory, setFormattedStory] = useState<string>(story);

  // Enhanced Markdown-like formatting
  const formatMarkdown = (text: string): string => {
    return text
      .replace(/^# (.*$)/gm, "<b>$1</b>") // Bold
      .replace(/^## (.*$)/gm, "<b>$1</b>") // Bold
      .replace(/^### (.*$)/gm, "<b>$1</b>") // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold (**word**)
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic (*word*)
      .replace(/\~\~(.*?)\~\~/g, "<del>$1</del>") // Strikethrough (~~word~~)
      .replace(/\n/g, "<br>") // Line breaks
      .replace(/\-\-\-/g, "<hr>") // Horizontal line
      .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>") // Blockquote
      .replace(/\n\n/g, "<p></p>"); // Paragraph spacing
  };

  useEffect(() => {
    setFormattedStory(formatMarkdown(story));
  }, [story]);

  return (
    <div className="max-w py-2 my-2">
      <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedStory }} />
    </div>
  );
}

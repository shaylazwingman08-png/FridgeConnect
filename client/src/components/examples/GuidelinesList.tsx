import GuidelinesList from '../GuidelinesList';

export default function GuidelinesListExample() {
  const sampleGuidelines = [
    "Take only what you need",
    "Leave food that's fresh and safe to eat",
    "Respect the fridge and the community",
    "Help keep the area clean"
  ];

  return (
    <div className="max-w-xl p-6">
      <GuidelinesList guidelines={sampleGuidelines} />
    </div>
  );
}

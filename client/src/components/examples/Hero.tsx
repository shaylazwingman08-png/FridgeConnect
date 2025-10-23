import Hero from '../Hero';
import heroImage from '@assets/generated_images/Community_members_at_fridge_hero_a53330b8.png';

export default function HeroExample() {
  return (
    <Hero
      imageSrc={heroImage}
      title="Nourishing Our Community Together"
      subtitle="Free, accessible food for everyone. No questions asked, no judgment. Take what you need, leave what you can."
    />
  );
}

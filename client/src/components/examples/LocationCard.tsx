import LocationCard from '../LocationCard';

export default function LocationCardExample() {
  return (
    <div className="max-w-md">
      <LocationCard
        title="Chapel Hill Fridge"
        address="123 Main Street, Chapel Hill, NC 27514"
        hours="Open 24/7"
        link="/chapel-hill"
      />
    </div>
  );
}

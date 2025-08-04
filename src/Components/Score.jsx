export default function Score({ score, record }) {
  return (
    <h2 className="text-gray-100 mt-2 flex justify-center sm:text-2xl">
      Score: {score} - Highest score: {record}
    </h2>
  );
}

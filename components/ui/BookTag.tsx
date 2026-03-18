type BookTagProps = {
  tags: string[];
};

export default function BookTag({ tags }: BookTagProps) {
  return (
    <div className="flex w-full flex-wrap gap-3 justify-start lg:gap-4">
      {tags.map((tag) => (
        <div
          key={tag}
          className="rounded-full border border-[#CECECE] px-4 py-1.5 lg:border-2 lg:px-6 lg:py-2"
        >
          <span className="font-montserrat text-xs font-medium text-[#5B5B5B] sm:text-sm lg:text-base">
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
}
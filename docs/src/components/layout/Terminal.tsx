

export const Terminal = () => {
  return (
    <div className="
      bg-default-200/20 border-1 border-default-200/20 text-default-500 rounded-lg cursor-pointer
      flex flex-col w-full max-w-lg h-64 mx-auto
    ">
      <div className="relative flex items-center border-b border-default-200/50 h-12 w-full">
        <div className="flex ms-4">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400 ml-2"></div>
          <div className="h-3 w-3 rounded-full bg-green-400 ml-2"></div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center font-medium">Bash</div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex mb-1">
          <span className="inline-block me-2">$</span>
          <span className="inline-block">pnpm install @nant-es/internal</span>
        </div>
        <div className="flex mb-1">
          <span className="inline-block me-2">$</span>
          <span className="inline-block">pnpm install @nant-es/internal</span>
        </div>
        <div className="flex mb-1">
          <span className="inline-block me-2">$</span>
          <span className="inline-block">pnpm install @nant-es/internal</span>
        </div>
      </div>
    </div>
  )
}
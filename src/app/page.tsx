import Image from 'next/image'

export default function Home() {
  return (<>
    <div class="flex p-10">
        <div class="cursor-not-allowed w-48 h-72 bg-rose-500"></div>
        <div class="cursor-progress w-48 h-72 bg-blue-500"></div>
        <div class="cursor-grab w-48 h-72 bg-amber-500"></div>
        <div class="cursor-w-resize w-48 h-72 bg-cyan-500"></div>
</div>

<button class="bg-red-700 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded">
  Button
</button>


</>
  )
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center gap-8 py-20 px-24 lg:max-w-[1200px] lg:justify-center lg:relative lg:translate-x-[-50%] lg:left-[50%]">
        <img className="w-56 rounded-[24px]" src="/Icon.png" alt="" />
        <h1 className="text-3xl md:text-5xl font-bold">Chouten</h1>
        <h3 className="text-l md:text-xl text-center">Chouten is an open source multi media consumption app, free to use.</h3>

        <a href="https://discord.gg/8bSKaepXv8" className="bg-off-white py-2 px-4 rounded-[80px] text-white font-semibold hover:rounded-lg transition-all ease-in-out">Download</a>

        <div className="border-y-[1px] border-border flex flex-col md:gap-8 md:py-10 md:flex-row">
          <div className="app-bullet-detail">
            <h2 className="text-lg font-semibold">Intuitive UI</h2>
            <h3 className="text-sm opacity-70">A sleek and straightforward method for streaming content from your preferred websites, Chouten employs a customized user interface that seamlessly integrates with native video playback features.</h3>
          </div>
          <div className="app-bullet-detail border-y-2 border-off-white md:border-y-0">
            <h2 className="text-lg font-semibold">Ad-free</h2>
            <h3 className="text-sm opacity-70">Delight in an ad-free application that offers seamless streaming, devoid of intrusive advertisements and tracking, promoting both enhanced speed and privacy.</h3>
          </div>
          <div className="app-bullet-detail">
            <h2 className="text-lg font-semibold">Modularity</h2>
            <h3 className="text-sm opacity-70">Chouten operates as a versatile modular system, adept at retrieving and presenting information from an array of third-party listing websites. It seamlessly interfaces with tracking services, facilitating the exchange of data to enhance user experiences and functionality.</h3>
          </div>
        </div>
      </div>

      <footer className="w-full h-14 flex items-center justify-center">
        <h2>Made with <span className="text-red-500 text-2xl">❤</span> by the Chouten Team</h2>
      </footer>
    </main>
  )
}

<script>
  import thousand_island_rv from '../img/partner-logos/1000_island_rv.png'
  import beattie_dodge from '../img/partner-logos/beattie_dodge.png'
  import beattie_film from '../img/partner-logos/beattie_film.png'
  import c_road from '../img/partner-logos/c_road.png'
  import ignite_printing from '../img/partner-logos/ignite_printing.png'
  import mason_photog from '../img/partner-logos/mason_photog.png'
  import wesleyan_church from '../img/partner-logos/wesleyan_church.png'
  import yfc from '../img/partner-logos/yfc.png'
  import video from '../video/cu-hero-video-35.mp4'
</script>

<svelte:head>
  <title>Camp Unlimited™ by SLWC.ca</title>
</svelte:head>

<section class="mb-auto flex flex-row justify-center">
  <h1 class="hidden text-center uppercase text-3xl my-2">
    <span class="text-white font-extrabold">camp</span><span class="text-slwcgreen tracking-tighter">unlimited</span>
  </h1>
  <section class="flex flex-col gap-3 max-w-4xl">
    <div id="videoplayer">
      <video class="object-cover" src={video} autoplay muted loop playsinline></video>
    </div>
    <div id="events" class="border text-center p-2">
      <h2 class="text-slwcgreen uppercase font-extrabold text-lg">upcoming events</h2>
      <div class="text-center text-xs grid grid-cols-3 mb-3">
          <span>June 20, 2021</span>
          <span>Southgate Church</span>
          <span>Kemptville, ON</span>
          <span>June 23, 2021</span>
          <span>Southgate Kidville</span>
          <span>Kemptville, ON</span>
          <span>June 27, 2021</span>
          <span>C-Road Church</span>
          <span>Brockville, ON</span>
          <span>Aug 5, 2021</span>
          <span>New Hope Christian Fellowship</span>
          <span>Shawville, QC</span>
          <span>Sept 8, 2021</span>
          <span>Cornerstone Youth</span>
          <span>North Gower, ON</span>
          <span>Sept 11, 2021</span>
          <span>The Bridge Youth</span>
          <span>Kanata, ON</span>
          <span>Sept 25, 2021</span>
          <span>Price Point Auto</span>
          <span>Johnstown, ON</span>
          <span>Oct 3, 2021</span>
          <span>Sunnyside Wesleyan Church</span>
          <span>Ottawa, ON</span>
          <span>Oct 25, 2021</span>
          <span>Roblin Wesleyan Youth</span>
          <span>Roblin, ON</span>
          <span>Jan 21, 2022</span>
          <span>Community Life Creed Youth</span>
          <span>Kanata, ON</span> 
          <span>April 8, 2022</span>
          <span>Asbury Youth</span>
          <span>Perth, ON</span> 
          <span>June 18, 2022</span>
          <span>The Bridge Youth</span>
          <span>Kanata, ON</span>
          <span>May 28, 2022</span>
          <span>Westport FMC</span>
          <span>Westport, ON</span>
          <span>Sept 14, 2022</span>
          <span>Trenton Wesleyan Church</span>
          <span>Trenton, ON</span>        
      </div>
      <a href="mailto:unlimited@slwc.ca" class="uppercase text-white px-2 border font-bold">book your event</a>
    </div>
    <h2 class="text-center text-slwcgreen uppercase font-extrabold text-lg my-2">
      our partners
    </h2>
    <div class="grid grid-cols-4 gap-4 items-center justify-items-center">
      <img class="max-h-16" src="{beattie_dodge}" alt="Beattie Dodge" />
      <img class="max-h-16" src="{thousand_island_rv}" alt="Thousand Island RV" />
      <img class="max-h-16" src="{yfc}" alt="Youth for Christ" />
      <img class="max-h-16" src="{wesleyan_church}" alt="Wesleyan Church" />
      <img class="max-h-16" src="{ignite_printing}" alt="Ignite Printing" />
      <img class="max-h-16" src="{mason_photog}" alt="Mason Photography" />
      <img class="max-h-16" src="{c_road}" alt="Centennial Road Church" />
      <img class="max-h-16" src="{beattie_film}" alt="Beattie Film" />
    </div>
    <div class="text-center mt-4">
      <a href="mailto:unlimited@slwc.ca" class="uppercase text-white px-2 border font-bold">become a partner</a>
    </div>
  </section>
</section>

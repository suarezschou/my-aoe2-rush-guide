import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main>

      <div className='m-10 text-center'>
        <h1 className='text-5xl'>Rush guide</h1>
        <p className='text-xl m-10'>This strategy works best on open maps such as arabia.</p>
      </div>
      
        <div className='flex justify-center m-10'>
            <Image
              src="/map-aoe2.png"
              width={500}
              height={500}
              alt="Picture of maps where it works"
            />
        </div>

    <ol className="list-inside list-decimal text-center mx-10">

      <li className='text-green-400'>Build a house</li>
        <div className='flex justify-center'>
            <Image
              src="/b_house.png"
              width={100}
              height={100}
              alt="Picture of a house"
            />    
        </div>
        <p className='m-10'>Grab a villager and build a house and make sure you always have room for more units</p>
        
        
      <li className='text-green-400'>Villagers</li>
        <div className='flex justify-center'>
            <Image
              src="/villager.png"
              width={100}
              height={100}
              alt="Picture of a house"
            />
        </div>
          <p className='m-10'>Queue up some villagers and keep doing that whenever you have 50 food</p>

      <li className='text-green-400'>Scout</li>
        <div className='flex justify-center'>
            <Image
              src="/u_scout_cavalry.png"
              width={100}
              height={100}
              alt="Picture of a scout"
            />
        </div>
          <p className='m-10'>Find some animals to hunt and find out where the enemy's base is located</p>
        
      <li className='text-green-400'>Build lumber camp </li>
        <div className='flex justify-center'>
            <Image
              src="/b_lumber_camp.png"
              width={100}
              height={100}
              alt="Picture of lumber camp"
            />
        </div>
          <p className='m-10'>
            Build a lumber camp near some trees and gather just enough wood for the mill and houses
            </p>

      <li className='text-green-400'>Build mill </li>
        <div className='flex justify-center'>
            <Image
              src="/b_mill.png"
              width={100}
              height={100}
              alt="Picture of b_mill"
            />
        </div>
          <p className='m-10'>Build a mill near some berries reach 500 food</p>

      <li className='text-green-400'>Click to advance to feudal age </li>
        <div className='flex justify-center'>
            <Image
              src="/t_feudal_age.png"
              width={100}
              height={100}
              alt="Picture of feudal age"
            />
        </div>
          <p className='m-10'>
            Whenever you reach 500 food don't hesitate to click asap
            and send 2 villagers towards your enemy's base.
          </p>

      <li className='text-green-400'>Outposts</li>
        <div className='flex justify-center'>
            <Image
              src="/b_outpost.png"
              width={100}
              height={100}
              alt="Picture of b_outpost"
            />
        </div>
          <p className='m-10'>
            While you wait for feudal, 
            you can build 1 or 2 outposts with the same 2 villagers. 
            <br />This way you gain vision and map control.
          </p>


      <li className='text-green-400'>Build barracks</li>
        <div className='flex justify-center'>
            <Image
              src="/b_barracks.png"
              width={100}
              height={100}
              alt="Picture of b_barracks"
            />
        </div>
          <p className='m-10'>
            You want to build your military buildings close enough so that you can keep the aggression and harass your enemy.
          </p>


      <li className='text-green-400'>Units you want to be producing</li>
        <div className='flex justify-center '>
            <Image
              src="/u_skirmisher.png"
              width={100}
              height={100}
              alt="Picture of skirm"
            />
            <Image 
              src="/u_spearman.png"
              width={100}
              height={100}
              alt="Picture of spear"
            />
        </div>
          <p className='m-10'>
            These units are cheap and effective when used correctly. <br />
            Try to not be in the enemy's town center range and keep an eye on your units.<br />
            Go kill the villagers by the lumber camp, 
            those are usually easier to kill.
          </p>
    </ol>
      </main>
      
    </div>
  );
}

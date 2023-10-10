import { CheckBadgeIcon, XMarkIcon } from '@heroicons/react/24/solid'

function CardPatient() {
  return (
    <>
          <article class="rounded-xl mt-8 bg-white p-3 h-96 mx-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img className='h-64 w-full bg-cover' src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
          
        </div>
        <div className='flex my-3 justify-center items-center text-lg font-medium'>
            Silvester Stallone
        </div>
        <div>
            <span className='flex justify-center items-center rounded-2xl bg-indigo-500 px-3 py-2 font-semibold text-lg text-white'>B1</span>
        </div>

      </a>
    </article>
    </>
  )
}

export default CardPatient
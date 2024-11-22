'use client'
export default function Card({title, description, img}){
    return(

        <div className="card bg-[#262626]  md:w-96 h-64 shadow-xl rounded-none ">
        <figure>
          <img
            src={img ? img : "https://cdn.tgdd.vn/Files/2016/12/30/931979/-windowsxpaa_800x450.jpg"}
            alt="img" />
        </figure>
        <div className="card-title p-2 text-base  overflow-hidden">
          <span>{title}</span>  

        </div>
        <div className="p-2 h-1/6 overflow-hidden">
          <p className="text-xs">{description ? description.split(' ').slice(0, 15).join(' ') + '...' : ''}</p>
          </div>
      </div>
    )
}
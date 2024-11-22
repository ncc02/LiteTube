'use client'
export default function Card({title, description, img}){
    return(

        <div className="card bg-[#262626]  md:w-48 w-40 shadow-xl rounded-none">
        <figure>
          <img
            src={img ? img : "https://cdn.tgdd.vn/Files/2016/12/30/931979/-windowsxpaa_800x450.jpg"}
            alt="img" />
        </figure>
        <div className="card-body">
          <p>{title}</p>
          {/* <p>{description}</p> */}
        
        </div>
      </div>
    )
}
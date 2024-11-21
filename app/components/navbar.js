'use client'
export default function Navbar(){
    return(

        <div>

            <div className="navbar bg-[#262626]">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">LiteTube</a>
            </div>
            <div className="flex justify-center w-full ">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-96 bg-[#262626]" />
                </div>
            </div>
            <div className="flex-none gap-2">
                {/* Nếu bạn có các phần tử khác ở đây */}
            </div>
            </div>

        </div>
    )
}
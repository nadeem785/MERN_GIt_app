import { use } from "react";
import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
// TODO Implement Logout functionality

const Logout = () => {

const { setAuthUser, authUser}= useAuthContext()

	const handleLogout =  async() => {
		try{
		const res= await fetch('/api/auth/logout',{credentials:'include'})
	   const data=  await res.json()
	   setAuthUser(null)
	   console.log(data)
}catch(err){
	toast.error(err.message)
}
}


	return (
		<>
			<img
				src={authUser?.avatarUrl}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'
			onClick={handleLogout}
			>
				<MdLogout size={22} />
			</div>
		</>
	);
};
export default Logout
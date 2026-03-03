import { useParams } from "react-router-dom"

const UserProfile = () => {
    const {userId}=useParams();
  return (
    <>
      <h2>{userId?`The userId: ${userId}`:`Please give the userId`}</h2>
    </>
  )
}

export default UserProfile

import React from 'react'
import ProfileCards from './components/ProfileCards'

const App = () => {
  return (
    <div className='parent'>
      <ProfileCards name='Piyush' age={20} role="frontend Developer" img="https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain&o=7&rm=3"/>
      <ProfileCards name='Neelesh' age={21} role="Backend Developer" img="https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0"/>
      <ProfileCards name='Ayush' age={19} role="full-Stack Developer" img="https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg"/>
      <ProfileCards name='Vipin' age={22} role="Frontend Developer" img="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"/>
    </div>
  )
}

export default App
